#!/bin/bash

# Backup script for Boellhoff_Config from otto-id server

REMOTE_HOST="otto-id"
REMOTE_PATH="/var/www/Boellhoff_Config/"
LOCAL_BACKUP_DIR="backups/$(date +%Y-%m-%d_%H-%M)"

mkdir -p "$LOCAL_BACKUP_DIR"

rsync -avz --progress "$REMOTE_HOST:$REMOTE_PATH" "$LOCAL_BACKUP_DIR/"