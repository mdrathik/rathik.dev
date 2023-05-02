---
date: '2023-05-02'
title: How to Manage Ubuntu Users
tags: ['ubuntu', 'devops', 'linux']
summary: Ubuntu is a popular Linux distribution that's user-friendly and easy to use. It has a lot of features that make it a great choice for people who are new to Linux.
draft: false
---

In this tutorial, we'll cover some basic tasks like adding, editing, disabling, and deleting users.

![ubuntu user manage](/static/images/linux/ubuntu.webp)

## 1. How to see all users in Ubuntu:

If you want to see all the users in your Ubuntu system, you can do so easily by using a simple command. To get started, open up a terminal window by pressing `Ctrl+Alt+T`. Then, type in the following command:

```bash
cut -d: -f1 /etc/passwd
```

This command will list all the usernames on your system. Each username will be displayed on a separate line.

## 2. How to add a user in Ubuntu:

If you want to add a new user in Ubuntu, you can do so using the `adduser` command. To get started, open up a terminal window and type in the following command:

```bash
sudo adduser username
```

Replace "username" with the name you want to give the new user. You'll be prompted to enter a password for the new user and some other details. Once you've entered all the required information, the new user will be added to your system.

## 3. How to edit a user's password in Ubuntu:

If you need to change a user's password in Ubuntu, you can do so using the `passwd` command. To get started, open up a terminal window and type in the following command:

```bash
sudo passwd username
```

Replace "username" with the name of the user whose password you want to change. You'll be prompted to enter a new password for the user twice. Once you've entered the new password, it will be updated.

## 4. How to disable a user in Ubuntu:

If you want to disable a user account in Ubuntu, you can do so using the `usermod` command. To get started, open up a terminal window and type in the following command:

```bash
sudo usermod -L username
```

Replace "username" with the name of the user you want to disable. This will lock the user's account and prevent them from logging in.

## 5. How to delete a user in Ubuntu:

If you need to delete a user account in Ubuntu, you can do so using the `deluser` command. To get started, open up a terminal window and type in the following command:

```bash
sudo deluser username
```

Replace "username" with the name of the user you want to delete. This will remove the user's account and all their files from the system.

That's it! These are are some the basic tasks that you can perform with user accounts in Ubuntu.
