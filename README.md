# 仓库同步 ：
 ## https://gitee.com/valetzx/valetzx.gitee.io
 ## https://gitlab.com/valetzx/valetzx.gitlab.io
 ## https://github.com/valetzx/valetzx.github.io
 
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

