---
title: 'Can not Access SSH in AWS after enable UFW firewall'
date: '2023-03-08'
tags: ['aws', 'DEVOPS']
draft: false
summary: 'In most cases when enabling or disabling the UFW firewall in AWS, the SSH connection is lost and cannot be re-established.'
images: ['/static/images/how-to-fin-hcf-and-lcm-in-javascript-with-example.jpg']
authors: ['default']
---

did you enable UFW on your EC2 instance for any kinds work like setup apache, ngnix , ftp or something. After that got stucked ? Its really sucks for a newbie like me sometimes when you are learning AWS.

![aws can't access ec2](/static/images/aws/ssh-problem/aws-ssh2-cant-access.jpg)

Follow this step carefully, Hope you will be get rid from this problem.

### 1. First you need to stop the AWS instance or light-sail. Give a few seconds to be stopped.

![step 1](/static/images/aws/ssh-problem/step-1.jpg)

For this just right click on the instance, you will get the option like my one.

### 2. Again go to the right click and change user data.

![step 2](/static/images/aws/ssh-problem/step-2.jpg)

After click on instace setting-> you need to edit the user data.

### 2. Final action

```bash
Content-Type: multipart/mixed; boundary="//"
MIME-Version: 1.0
--//
Content-Type: text/cloud-config; charset="us-ascii"
MIME-Version: 1.0
Content-Transfer-Encoding: 7bit
Content-Disposition: attachment; filename="cloud-config.txt"
#cloud-config
cloud_final_modules:
- [scripts-user, always]
--//
Content-Type: text/x-shellscript; charset="us-ascii"
MIME-Version: 1.0
Content-Transfer-Encoding: 7bit
Content-Disposition: attachment; filename="userdata.txt"
#!/bin/bash
ufw disable
iptables -L
iptables -F
--//
```

Copy this code and paste this user data & save it. Now please start the instance , it will work like a charm 😍 Fill Free to comment to mail me if there has still problem.

Read More

- [Add free Cloudflare SSL in AWS EC2 Instance](https://www.rathik.dev/blog/add-free-ssl-in-ec2-instaces)
