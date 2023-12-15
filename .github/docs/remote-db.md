---
title: remote database
---

# Remote Database

Below is information about helper scripts for working with the remote database

## `./bin/dump_remote.sh`

Dumps the remote DB into a `tmp` folder. By default, it will point at the `STAGING_MONGODB_URI` in your `.env` file into `/tmp/staging`

You can also dump your local database by pointing `--db` to your `MONGODB_URI`, which should be the local invironment.

## `./bin/load_backup.sh`

Loads database backup into your local environment. Additionally creates a backup of your current local database. By default, this will load in the backup from `/tmp/staging` and backup your local db into `/tmp/local-backup`

## `./bin/push_local_to_remote`

Pushes a local backup to a remote environment. By default, it will load the backup in `/tmp/local-backup/hts-develop` and point at the `STAGING_MONGODB_URI`.

Note that in order to push the database into the remote, the folder containing your database must match the database name of the remote.
