---
date: '2023-10-24'
title: How to add an SSH key in GitHub from your Linux and Windows
tags: ['linux', 'github', 'devops']
summary: Adding an SSH key in GitHub from Ubuntu- Open your terminal and generate a new SSH key by running the following command
draft: false
---

## Here's a step-by-step guide on how to add an SSH key in GitHub from your device.

Adding an SSH key in GitHub from Ubuntu- Open your terminal and generate a new SSH key by running the following command:

![ubuntu firewall](/static/images/add-ssh-key-into-github.jpg)

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Note: If you're using a legacy system that doesn't support the Ed25519 algorithm, use:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

- Press Enter to accept the default file location when prompted to "Enter a file in which to save the key".
- Add your SSH key to the ssh-agent by running the following command:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Copy your public SSH key to your clipboard by running the following command:

```bash
cat < ~/.ssh/id_ed25519.pub
```

### Now go to your github profile and follow this step.

- In GitHub, click on your profile photo and select Settings.
- In the sidebar, click on SSH and GPG keys.
- Click on New SSH key or Add SSH key.
- In the Title field, add a descriptive label for your new key.
- Paste your public SSH key into the Key field.
- Click on Add SSH key.

<br/>

## Adding an SSH key in GitHub from Windows

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- Press Enter to accept the default file location when prompted to "Enter a file in which to save the key".
- Add your SSH key to the ssh-agent by running the following command:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

- Copy your public SSH key to your clipboard by running the following command:

```bash
clip < ~/.ssh/id_ed25519.pub
```

### Now go to your github profile and follow this step.

- In GitHub, click on your profile photo and select Settings.
- In the sidebar, click on SSH and GPG keys.
- Click on New SSH key or Add SSH key.
- In the Title field, add a descriptive label for your new key.
- Paste your public SSH key into the Key field.
- Click on Add SSH key.
  I hope this helps! Let me know if you have any other questions or if there's anything else I can help you with.

To test whether your GitHub account is associated with your SSH key, you can use the following command in your terminal:

```
ssh -T git@github.com
```

This command attempts to SSH to GitHub using the SSH key associated with your account. If the authentication is successful, you should see a message like this:

```
Hi <USERNAME>! You've successfully authenticated, but GitHub does not provide shell access.
```

If you receive a "permission denied" message, it means that your SSH key is not associated with your GitHub account. In that case, you can follow the steps outlined in my previous response to add your SSH key to your GitHub account ¹².

please feel free to comment or mail me hello@rathik.dev for any queries.
