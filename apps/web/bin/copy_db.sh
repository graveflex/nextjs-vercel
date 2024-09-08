#!/bin/bash

# Step 0: Create tmp dir if it doesn't exist
mkdir -p tmp

# Dump the source database
echo "Dumping source database to tmp/dump.bak..."
pg_dump -Fc --no-owner --clean -d "$SOURCE_DATABASE_URL" -f tmp/dump.bak

# Extract database name from the DESTINATION_DATABASE_URL
DEST_DB=$(echo "$DESTINATION_DATABASE_URL" | sed -r 's/.*\/([^?]+).*/\1/')

# Extract destination host and credentials
DEST_CREDENTIALS=$(echo "$DESTINATION_DATABASE_URL" | sed -r 's/(postgres:\/\/[^\/]+).*/\1/')

# Recreate the destination database (won't work on neon, but will locally)
psql "$DEST_CREDENTIALS" -c "DROP DATABASE IF EXISTS $DEST_DB;"
psql "$DEST_CREDENTIALS" -c "CREATE DATABASE $DEST_DB;"

# Restore the dump into the destination database
echo "Restoring source DB to destination DB..."
pg_restore --no-owner --disable-triggers -c --if-exists -d "$DESTINATION_DATABASE_URL" tmp/dump.bak

# echo "Granting privileges to current user..."
# psql "$DEST_CREDENTIALS" -c "GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO CURRENT_USER;"

# Cleanup the dump file
rm tmp/dump.bak
