#!/bin/sh

programname=$0
function usage {
    echo ""
    echo "Push a local database from a folder to the remote"
    echo ""
    echo "usage: $programname --db string --folder"
    echo ""
    echo "  --db string             environmental variable for remote DB"
    echo "                          (default: STAGING_MONGODB_URI)"
    echo ""
    echo "  --folder string         folder to dump db"
    echo "                          (default: STAGING)"
    echo ""
}

# by default, load the staging db
REMOTE_DB="STAGING_MONGODB_URI"
TMP_FOLDER="local-backup/hts-develop"

while [ $# -gt 0 ]; do
    if [[ $1 == "--help" ]]; then
      usage
      exit 0
    elif [[ $1 == "--"* ]]; then
        v="${1/--/}"
        declare "$v"="$2"
        shift
    fi
    shift
done

if [ "$db" ]; then
  REMOTE_DB="$db"
fi

if [ "$folder" ]; then
  TMP_FOLDER="$folder"
fi

export $(grep -e "^${REMOTE_DB}" -- .env)

# you don't have the environmental variable defined
if [ -z "${!REMOTE_DB}" ]; then
  echo "${REMOTE_DB} is not defined in your .env"
  exit 1
fi

echo "Pushing database in '/tmp/${TMP_FOLDER}' to remote '${REMOTE_DB}'"
echo "running the following command:"
echo ""
echo "mongorestore --uri ${!REMOTE_DB} --drop /tmp/${TMP_FOLDER}"
echo ""
read -p "Press 'Enter' to continue, or 'ctrl+c' to exit."

mkdir -p tmp
mongorestore --uri ${!REMOTE_DB} --drop tmp/${TMP_FOLDER}
