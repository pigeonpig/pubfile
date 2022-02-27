# 仓库同步 ：
 ## https://gitee.com/valetzx/valetzx.gitee.io
 ## https://gitlab.com/valetzx/valetzx.gitlab.io
 ## https://github.com/valetzx/valetzx.github.io
 
# 代码（需要生成github的ssh id_rsa私钥id_rsa.pub公钥 并添加 ） ： 
````
name: 'GitHub Actions Mirror'

on:
  push:
    branches: 
      - master
  schedule:
    - cron: '0 16 * * *'

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
