---
date: '2023-04-30'
title: Automate MySQL Backup and Send Them to Telegram on Ubuntu
tags: ['ubuntu', 'devops', 'bash', 'mysql']
summary: You can easily use this code and send notification with backup-file to telegram after create backup.
draft: false
---

I wrote a this similar tutorial for mongodb backup, you can choose that as well from this [link](https://www.rathik.dev/blog/mongodb-backup-locally-with-telegram-notification).

![create mysql backup in ubuntu](/static/images/mysql-backup/mysql-backup-ubuntu.jpg)

Ensuring regular backups of your MySQL databases is a crucial task in data management. But wouldn't it be great if you could automate this process and receive your backups directly via Telegram?

In this blog post, we will guide you through a bash script that not only automates your MySQL database backup but also sends the backup file to a Telegram chat. Let's get started.

### Prerequisites

Before starting, ensure that you have the following:

- MySQL installed and running on your Ubuntu server.
- The username and password for your MySQL database.
- A Telegram account.

## Step 1: Creating a Telegram Bot

- First, we need to create a Telegram bot that will send us the backup files.
- Open your Telegram application and search for "BotFather" in the search bar.
- Start a chat with BotFather and type the command /newbot to create a new bot.
- BotFather will ask you for a name for your new bot. This can be anything you like.
- Next, you'll be asked to choose a username for your bot. This must be unique and end with the word 'bot'. For example, 'my_backup_bot'.
- Once you've done this, BotFather will give you a token for your bot. Make a note of this as you'll need it later.

## Step 2: Getting your Bot Token and Chat ID

To send the backup files to a specific chat, we need two pieces of information: the bot token and the chat ID.

### Obtaining the Bot Token

1. After creating your bot with BotFather (as shown in Step 1), it will provide you with a bot token. This token looks like a long string of numbers and letters.
2. Save this token, as you will need it later in the script. Replace Your_Telegram_Bot_Token with the token you received from BotFather.

### Obtaining the Chat ID

1. Add your newly created bot to a group chat or start a private chat with the bot. This is where you will receive the database backup files.
2. In the group chat or private chat with the bot, search for the "IDBot" in the Telegram application.
3. Start a chat with IDBot and type the command /getid.
4. IDBot will reply with the chat ID for your current chat with the bot. Save this chat ID for later use.
5. Replace Your_Telegram_Chat_ID in the script with the chat ID you received from IDBot.
   By following these steps, you will have both the bot token and chat ID necessary for the script to send the database backup files to your desired chat in Telegram.

## Step 3: The Bash Script

With the bot token and chat ID in hand, we can now create our backup script. However, before we begin writing our script, ensure that the backup directory mentioned in the script exists. If it doesn't, you can create it using the following command in your terminal:

```bash
mkdir /home/username/backup
```

Replace /home/username/backup with your preferred directory path. This is where the backup files will be stored.

Now, let's dive into our backup script:

```bash
#!/bin/bash

# MySQL database details
username="root"
password="xxxxxxx"
database_name="xxxxx"

# Backup file details
backup_dir="/home/username/backup"
backup_file="${backup_dir}/${database_name}_$(date +%Y-%m-%d_%H-%M-%S).sql"

# Take backup
mysqldump --user=${username} --password=${password} ${database_name} > ${backup_file}

# Compress backup file using zip
zip ${backup_file}.zip ${backup_file}

echo "Backup completed: ${backup_file}.zip"

# Send a message to Telegram to confirm the backup has been created
TOKEN="Your_Telegram_Bot_Token"
CHAT_ID="Your_Telegram_Chat_ID"
BACKUP_FILENAME=$(basename "${backup_file}.zip")

# Create a temporary zip file without directory structure for sending to Telegram
temp_zip_file="/tmp/$(basename ${backup_file}).zip"
temp_sql_file="/tmp/$(basename ${backup_file})"
cp "${backup_file}" "${temp_sql_file}"
cd "/tmp"
zip -j "${temp_zip_file}" "$(basename ${temp_sql_file})"

if [ -f "${temp_zip_file}" ]; then
    sleep 5s
    if curl -s -X POST "https://api.telegram.org/bot${TOKEN}/sendDocument" \
    -F chat_id="${CHAT_ID}" \
    -F document=@"${temp_zip_file}" \
    -F caption="The backup for database ${database_name} has been created. Backup file name: ${BACKUP_FILENAME}"; then
        echo "Telegram message and backup file sent successfully."
    else
        echo "Failed to send Telegram message and backup file."
    fi
else
    echo "Temporary backup file

```

Remember to replace username, password, database_name, Your_Telegram_Bot_Token, and Your_Telegram_Chat_ID with your MySQL credentials, Telegram bot token, and chat ID respectively.

## Step 4: Automating the Script using Cron job

To automate the backup process, we'll use Cron, a time-based job scheduler in Unix-like operating systems. We can set up a cron job to run this script at regular intervals.

1. Open the crontab file by typing crontab -e in your terminal.

2. Add a new line at the end of the file in the following format:

```bash
0 2 * * * /path/to/your/script.sh
```

This will run the script every day at 2 AM. You can adjust the time as per your needs. The five fields represent minute (0-59), hour (0

## Finally

And there you have it! You've now automated your MySQL database backups and set them up to be sent directly to your Telegram chat. This method not only saves you time but also helps ensure your data is regularly backed up and easily accessible.

Remember, the script provided is a basic example. Depending on your database size, server configuration, or personal preferences, you may need to modify it to better suit your needs.

If you encounter any issues or believe there's room for improvement in the code, don't hesitate to reach out to us. I always looking to refine our processes and tools. Feel free to get in touch at hello@rathik.dev. i will be more happy to assist you!

Happy coding!
