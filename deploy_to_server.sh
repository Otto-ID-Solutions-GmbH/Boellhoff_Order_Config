#!/bin/bash

# Deploy script for Boellhoff_Config to otto-id server
# 1. Backs up current server files
# 2. Updates server with latest from origin/master

set -e

REMOTE_HOST="otto-id"
REMOTE_PATH="/var/www/Boellhoff_Config/"

./backup_from_server.sh
ssh "$REMOTE_HOST" "cd $REMOTE_PATH && git fetch && git rebase origin/master"

