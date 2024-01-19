#!/bin/sh
set -eEu

#
# env vars
#
# base branch
REF_BRANCH=""
# branch name
BRANCH_NAME=""
# base aws server for neon db
NEON_URL=
NEON_API_KEY=
NEON_PROJECT_ID=
VERCEL_DB=
VERCEL_TOKEN=

echo "1. Creating DB called ${BRANCH_NAME/\//%2F}"
echo "----------------------------------"
# npx neonctl databases create --project-id=${NEON_PROJECT_ID} --branch=main --name=${BRANCH_NAME} --api-key=${NEON_API_KEY}
echo "----------------------------------"
echo "2. Copying DB based from ${REF_BRANCH}"
echo "----------------------------------"
# pg_dump -Fc -v -d ${REF_DB} | pg_restore -v -d postgresql://${NEON_USER}:${NEON_PASSWORD}@${NEON_URL}/${BRANCH_NAME/\//%2F}?sslmode=require
