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
NEON_URL="ep-holy-brook-a5dypx8h.us-east-2.aws.neon.tech"
# neon cred
NEON_USER="alex"
NEON_PASSWORD=""
NEON_API_KEY=""
NEON_PROJECT_ID=""

REF_DB=""

VERCEL_TOKEN=""

while getopts "r:b:n:u:p:k:P:" flag
do
  case "${flag}" in
    r) REF_BRANCH="${OPTARG}";;
    b) BRANCH_NAME="${OPTARG}";;
    n) NEON_URL="${OPTARG}";;
    u) NEON_USER="${OPTARG}";;
    p) NEON_PASSWORD="${OPTARG}";;
    k) NEON_API_KEY="${OPTARG}";;
    P) NEON_PROJECT_ID="${OPTARG}";;
  esac
done

for arg in REF_BRANCH BRANCH_NAME NEON_URL NEON_URL NEON_PASSWORD NEON_API_KEY NEON_PROJECT_ID; do
  if [[ -z "${!arg}" ]]; then
    echo "ERROR: Missing required argument for ${arg}"
    exit 1
  fi
done



echo "1. Creating DB at ${NEON_URL}/${BRANCH_NAME/\//%2F}"
echo "----------------------------------"
# npx neonctl databases create --project-id=${NEON_PROJECT_ID} --branch=main --name=${BRANCH_NAME} --api-key=${NEON_API_KEY}
echo "----------------------------------"
echo "2. Copying DB based from ${REF_BRANCH}"
echo "----------------------------------"
# pg_dump -Fc -v -d ${REF_DB} | pg_restore -v -d postgresql://${NEON_USER}:${NEON_PASSWORD}@${NEON_URL}/${BRANCH_NAME/\//%2F}?sslmode=require
echo "----------------------------------"
echo "3. Getting vercel db"
# npx vercel --token=${VERCEL_TOKEN} --scope graveflex env ls production
