#!/bin/sh

BRANCH_NAME=""
NEON_URL=""
VERCEL_TOKEN=""

echo "1. Get preview env vars from vercel"
echo "----------------------------------"
npx vercel --token=${VERCEL_TOKEN} --scope graveflex env pull --environment=development --yes .env
echo "2. Build project, replacing/updating POSTGRES_URL"
echo "----------------------------------"
npx vercel --token=${VERCEL_TOKEN} build
echo "3. Deploy project, replacing/updating POSTGRES_URL"
echo "----------------------------------"
npx vercel --token=${VERCEL_TOKEN} deploy --prebuilt
