#!/bin/sh

programname=$0
function usage {
    echo ""
    echo "Load a backup remote DB to a local folder in /tmp"
    echo ""
    echo "usage: $programname --folder string --backup string"
    echo ""
    echo "  --folder string         folder to load db"
    echo "                          (default: tmp)"
    echo ""
    echo "  --backup string         folder to backup the current db"
    echo "                          (default: tmp/local-backup)"
    echo ""
}

# by default, load from tmp folder
TMP_FOLDER="tmp/staging"
BACKUP_FOLDER="tmp/local-backup"
MONGODB_URI="MONGODB_URI"

# parse args
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

if [ "$folder" ]; then
  TMP_FOLDER="$folder"
fi

if [ "$backup" ]; then
  BACKUP_FOLDER="$backup"
fi

export $(grep -e "^${MONGODB_URI}" -- .env)

echo "Loading in database from '${TMP_FOLDER}' into '${MONGODB_URI}'." 
echo "This will back up the current db in 'tmp/${BACKUP_FOLDER}'" 
read -p "Press 'Enter' to continue, or 'ctrl+c' to exit."

mongodump --uri "${MONGODB_URI}" --out tmp/${BACKUP_FOLDER}
mongorestore --drop ${TMP_FOLDER}
