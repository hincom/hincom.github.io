---
layout: custom
title: 生成 SSH 公钥
---

## 生成 SSH 公钥
----------------------------------

> Windows 用户建议使用 **Windows PowerShell** 或者 **Git Bash**，在 **命令提示符** 下无 `cat` 和 `ls` 命令。

### 通过命令 `ssh-keygen` 生成 SSH Key：

```
ssh-keygen -t ed25519 -C "Gitee SSH Key" -f id_ed25519_XXX
```

*   `-t` key 类型
*   `-C` 注释
*   `-f` 自定义密钥名称

输出，如：

```
Generating public/private ed25519 key pair.  
Enter file in which to save the key (/home/git/.ssh/id_ed25519):  
Enter passphrase (empty for no passphrase):  
Enter same passphrase again:  
Your identification has been saved in /home/git/.ssh/id_ed25519  
Your public key has been saved in /home/git/.ssh/id_ed25519.pub  
The key fingerprint is:  
SHA256:ohDd0OK5WG2dx4gST/j35HjvlJlGHvihyY+Msl6IC8I Gitee SSH Key  
The key's randomart image is:  
+--[ED25519 256]--+  
|    .o           |  
|   .+oo          |  
|  ...O.o +       |  
|   .= * = +.     |  
|  .o +..S*. +    |  
|. ...o o..+* *   |  
|.E. o . ..+.O    |  
| . . ... o =.    |  
|    ..oo. o.o    |  
+----[SHA256]-----+  

```
*   中间通过三次**回车键**确定

### 查看生成的 SSH 公钥和私钥：
```
ls ~/.ssh/  
```

输出：

```
id_ed25519  id_ed25519.pub  
```

*   私钥文件 `id_ed25519`
*   公钥文件 `id_ed25519.pub`

默认位置在`C:\Users\Administrator\.ssh`中

### 读取公钥文件 `~/.ssh/id_ed25519.pub`：

```
cat ~/.ssh/id_ed25519.pub  
```

输出，如：

```
ssh-ed25519 AAAA***5B Gitee SSH Key  
```

复制终端输出的公钥。
