---
date: '2023-03-28'
title: Create Local Backup of MongDB and Send Telegram Notification
tags: ['ubuntu', 'devops', 'bash']
summary: You can easily use this code and send notification to telegram after create backup.
draft: false
---

I was Looking for a Quick solution to get mongoDB data Backup and notification in telegam.

First, let's start by creating a new Bash script file. You can use any text editor you prefer, but for this tutorial, we'll use the nano editor. Open your terminal and run the following command

This will create a new file called backup_script.sh and open it in the nano editor. Now, copy and paste the following code into the file:

```bash
nano backup_script.sh
```

Now copy this code and paste into backup_script.sh

```bash
# Set the database name and backup directory
DB_NAME="your_database_name"
BACKUP_DIR="/path/to/backup/directory/$(date +"%Y-%m-%d*%H-%M-%S")"
ZIP_DIR="/path/to/zip/directory"


# Set the connection string for the MongoDB URL

MONGO_URL="mongodb+srv://your_username:your_password@your_mongodb_host/your_database_name?retryWrites=true"

# Use mongodump to create a backup of the database

mongodump --uri="$MONGO_URL" --db="$DB_NAME" --out="$BACKUP_DIR"

# Move the backup to the zip directory and compress it

cd $(dirname "$BACKUP_DIR")
BACKUP_FILENAME="$(basename "$BACKUP_DIR")"
zip -r "$ZIP_DIR/$BACKUP_FILENAME.zip" "$BACKUP_FILENAME"
cd -

# Send a message to Telegram to confirm the backup has been created

TOKEN="your_telegram_bot_token"
CHAT_ID="your_telegram_chat_id"
BACKUP_SIZE=$(du -h "$ZIP_DIR/$BACKUP_FILENAME.zip" | awk '{print $1}')

if [ -f "$ZIP_DIR/$BACKUP_FILENAME.zip" ]; then
sleep 5s
if curl -s -X POST "https://api.telegram.org/bot$TOKEN/sendMessage" \
 -d chat_id="$CHAT_ID" \
 -d text="The backup for database $DB_NAME has been created. Backup file name: $BACKUP_FILENAME.zip. Size: $BACKUP_SIZE"; then
echo "Telegram message sent successfully."
else
echo "Failed to send Telegram message."
fi
else
echo "Backup file not found. Skipping Telegram message."
fi

# Remove backups older than 7 days

find /path/to/backup/directory -type d -mtime +7 -name "your*backup_prefix*\*" -exec rm -r {} \;
```

Before you run the script, you need to update some variables.

Replace your_database_name with the name of your MongoDB database, /path/to/backup/directory with the path to the directory where you want to store your backups, /path/to/zip/directory with the path to the directory where you want to store your compressed backups, your_username and your_password with your MongoDB username and password, your_mongodb_host with the host of your MongoDB instance (e.g. cluster0.mongodb.net), your_telegram_bot_token with the token of your Telegram bot, and your_telegram_chat_id with the chat ID of the Telegram chat where you want to receive notifications about your backups.

Save the changes by pressing Ctrl+O, then Enter, and exit nano by pressing Ctrl+X.

Now, you can run the script by executing the following command in your terminal:

```
chmod +x backup_script.sh
./backup_script.sh
```

---

😊 Thanks for reading.

Note : If you see any issues or wrong instruction with this article, please feel free to contact with me by comments or mail: hello@rathik.dev

```

```
