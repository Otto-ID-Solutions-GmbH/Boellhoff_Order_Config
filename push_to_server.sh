#!/bin/bash

# Push changes to Boellhoff_Config on otto-id server

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REMOTE_HOST="otto-id"
REMOTE_PATH="/var/www/Boellhoff_Config/"

# Backup current server state first
echo "Creating backup of current server state..."
"$SCRIPT_DIR/backup_from_server.sh"

if [ $? -ne 0 ]; then
    echo "Backup failed. Aborting push."
    exit 1
fi

echo "Pushing changes to server..."
rsync -avz --progress \
    --exclude 'backups' \
    --exclude '.git' \
    --exclude '*.sh' \
    "$SCRIPT_DIR/" "$REMOTE_HOST:$REMOTE_PATH"

echo "Push completed."
