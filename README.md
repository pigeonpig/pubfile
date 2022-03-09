# 仓库同步 ：
 ## https://gitee.com/valetzx/valetzx.gitee.io
 ## https://gitlab.com/valetzx/valetzx.gitlab.io
 ## https://github.com/valetzx/valetzx.github.io

# 同步到网盘 ：
 ## https://pighog.vercel.app/p/8a1f.html
 
# 代码 ： 
````
name: 'GitHub Actions Mirror'

on:
  push:
    branches: 
      - master //当有文件上传到这个分支开始部署 也有可能是main
  schedule:
    - cron: '0 16 * * *' //定时每天16点UTC

jobs:
  mirror_to_gitee:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitee'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitee.com:valetzx/valetzx.gitee.io.git //这里填gitee仓库ssh地址
          ssh_private_key:
            ${{ secrets.GITEE_KEY }}

  mirror_to_gitlab:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout'
        uses: actions/checkout@v1
      - name: 'Mirror to gitlab'
        uses: pixta-dev/repository-mirroring-action@v1
        with:
          target_repo_url:
            git@gitlab.com:valetzx/valetzx.gitlab.io.git //这里填gitlab仓库ssh地址
          ssh_private_key:
            ${{ secrets.GITLAB_KEY }}
````

## 需要生成github的ssh id_rsa私钥（添加到GitHubAction secrets 对应的GITEE_KEY,GITLAB_KE）id_rsa.pub公钥（添加到gitee,gitlab的用户设置中的ssh key）
# 本仓库的同步 ：
## https://gitee.com/valetzx/pubfile
## https://gitlab.com/valetzx/pubfile
## https://github.com/valetzx/pubfile
### 将图片文件链接中的blob改为raw即为直链
## 演示为markdown链接
`![](https://gitee.com/valetzx/pubfile/raw/main/img/computer/RM.jpg)`
![](https://gitee.com/valetzx/pubfile/raw/main/img/computer/RM.jpg)
`https://gitlab.com/valetzx/pubfile/-/blob/main/img/computer/RM.jpg`
![](https://gitlab.com/valetzx/pubfile/raw/main/img/computer/RM.jpg)
`https://github.com/pigeonpig/pubfile/blob/main/img/computer/RM.jpg`
![](https://github.com/pigeonpig/pubfile/raw/main/img/computer/RM.jpg)
## 在URL前加`https://ghproxy.com/`也可以加速github
`https://ghproxy.com/https://github.com/pigeonpig/pubfile/blob/main/img/computer/RM.jpg`
![](https://ghproxy.com/https://github.com/pigeonpig/pubfile/blob/main/img/computer/RM.jpg)
## 此方法可以直链任意文件，源码：https://github.com/hunshcn/gh-proxy
