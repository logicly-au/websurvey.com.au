#!/usr/bin/env bash
set -e # halt script on error

openssl aes-256-cbc -K $encrypted_a842c56f2ce8_key -iv $encrypted_a842c56f2ce8_iv \
  -in .travis/deploy_key.travis -out .travis/deploy_key -d

eval "$(ssh-agent -s)" #start the ssh agent
chmod 600 .travis/deploy_key
ssh-add .travis/deploy_key
git remote add gh-pages git@github.com:strategicdata/websurvey.com.au.git
git push gh-pages