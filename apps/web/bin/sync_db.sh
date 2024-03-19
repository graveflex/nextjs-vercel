#!/bin/bash

set -a
source ../../.env
set +a

# create the tmp folder if it doesn't exist
mkdir -p tmp

parse_url() {
    echo "$1" | python3 -c "from urllib.parse import urlparse; import sys; print(urlparse(sys.stdin.readline()).$2)"
}

# Extracting components from POSTGRES_URL
DB_USER=$(parse_url "$POSTGRES_URL" "username")
DB_PASS=$(parse_url "$POSTGRES_URL" "password")
DB_HOST=$(parse_url "$POSTGRES_URL" "hostname")
DB_PORT=$(parse_url "$POSTGRES_URL" "port")
DB_NAME=$(parse_url "$POSTGRES_URL" "path[1:]")

if [ "$DB_USER" == "None" ]; then
    DB_USER=""
fi

if [ "$DB_PASS" == "None" ]; then
    DB_PASS=""
fi

# Set PGPASSWORD if it's not empty
if [ -n "$DB_PASS" ]; then
    export PGPASSWORD=$DB_PASS
fi

CONN_STR="-h $DB_HOST"
[ -n "$DB_PORT" ] && CONN_STR+=" -p $DB_PORT"
[ -n "$DB_USER" ] && CONN_STR+=" -U $DB_USER"

# drop the database
dropdb $DB_NAME

# re-initialize the database
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
"${dir}/init_db.sh"

# export the remote database to a local file
pg_dump -Fc -v $REMOTE_POSTGRES_URL > tmp/latest.dump

# import the remote database into our local postgres
pg_restore -v -d $POSTGRES_URL tmp/latest.dump
