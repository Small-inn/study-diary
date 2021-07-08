#### git 命令

---

- 修改 git--config 文件的 url: https://[username]:[password]@github.com/....

---

0. Git 规范和 changelog 生成

   - 加快 Code Review 的流程
   - 根据 Git Commit 的元数据生成 ChangeLog
   - 后续的维护更加快捷方便
   - 一般提交格式：
     ```javascript
         <type>(<scope>): <subject>
         <BLANK LINE>
         <body>
         <BLANK LINE>
         <footer>
     ```
     - type 代表某次提交的类型，比如是修复还是新增 feature。类型如下：
     - feat: 新增 feature
     - fix： 修复 bug
     - docs：修改了文档，README，CHANGELOG
     - style：修改样式，不改变逻辑
     - refactor：代码重构
     - perf：优化相关
     - test：测试用例
     - chore： 改变构建流程，增加依赖库等
     - revert：回滚到上一个版本

1. 比较差异

- 比较的是暂存区和工作区的差异

```javascript
    git diff
```

- 比较的是暂存区和历史区的差异

```javascript
    git diff --cached
```

- 比较的是历史区和工作区的差异（修改）

```javascript
    git diff master
```

2. 撤回内容
   (如果修改了工作区的文件后发现改错了，可以用暂存区或者版本库里的文件替换掉工作区的文件)

- 用暂存区中的内容或者版本库中的内容覆盖掉工作区

```javascript
    git checkout index.html
```

- 取消增加到暂存区的内容（添加时）

```javascript
    git reset HEAD index.html
```

- 显示目录的状体 有没有添加或者修改文件

```javascript
    git status
```

- 删除本地文件

```javascript
    rm fileName
```

- git init --初始化本地 git 环境
- git clone XXX--克隆一份代码到本地仓库
- git pull --把远程库的代码更新到工作台
- git pull --rebase origin master --强制把远程库的代码跟新到当前分支上面
- git fetch --把远程库的代码更新到本地库
- git add . --把本地的修改加到 stage 中
- git commit -m 'comments here' --把 stage 中的修改提交到本地库
- git push --把本地库的修改提交到远程库中
- git branch -r/-a --查看远程分支/全部分支
- git checkout master/branch --切换到某个分支
- git checkout -b test --新建 test 分支
- git checkout -d test --删除 test 分支
- git merge master --假设当前在 test 分支上面，把 master 分支上的修改同步到 test 分支上
- git merge tool --调用 merge 工具
- git stash --把未完成的修改缓存到栈容器中
- git stash list --查看所有的缓存
- git stash show stash@{0} 查看某个进度具体修改的文件
- git stash pop --恢复本地分支到缓存状态
- git blame someFile --查看某个文件的每一行的修改记录（）谁在什么时候\* 修改的）
- git status --查看当前分支有哪些修改
- git log --查看当前分支上面的日志信息
- git diff --查看当前没有 add 的内容
- git diff --cache --查看已经 add 但是没有 commit 的内容
- git diff HEAD --上面两个内容的合并
- git reset --hard HEAD --撤销本地修改
- echo $HOME --查看 git config 的 HOME 路径
- export $HOME=/c/gitconfig --配置 git config 的 HOME 路径

## 常用的一些命令

- git remote add origin 远程仓库地址 --将当前的仓库与远程的仓库连接起来
- git branch --set-upstream debug origin/test --远程分支关联
- git push -u origin branch(分支名称) --绑定远程分支
- git branch -d BranchName --删除本地分支
- git push origin --delete BranchName --删除远程分支
- git checkout -b test origin/test 切换并绑定远程分支
- git fetch --all git reset --hard origin/master git pull origin/master (三个命令)
-

### 远程仓库删除分支后本地仍能查看的问题

- git remote show origin 先查看 remote 地址，以及本地分支与之对应的关系
- git remote prune origin 删除远程仓库不存在的分支

### npm 命令

- npm list -g --depth 0 查看本地安装的所有 npm 包
- npm update -g xxx 更新
- npm uninstall -g xxx 删除
- npm config set registry https://registry.npm.taobao.org/ 设置淘宝镜像
- npm config get registry 查看 npm 使用哪个源
