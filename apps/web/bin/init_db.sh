#!/bin/bash

set -a
source ../../.env
set +a

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

# Command to check if the database exists
DB_EXISTS=$(psql $POSTGRES_URL -tAc "SELECT 1 FROM pg_database WHERE datname='$DB_NAME'" 2>/dev/null)

# Check if the database exists
if [ -z "$DB_EXISTS" ]; then
    echo "Database does not exist. Creating database..."
    # Command to create database
    createdb $CONN_STR $DB_NAME
    echo "Database $DB_NAME created."
else
    echo "Database $DB_NAME already exists."
fi

# Unset PGPASSWORD to avoid leaking it in the environment
unset PGPASSWORD
