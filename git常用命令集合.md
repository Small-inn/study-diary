#### git命令
---
1. 比较差异
- 比较的是暂存区和工作区的差异
```
    git diff
```
- 比较的是暂存区和历史区的差异
```
    git diff --cached
```
- 比较的是历史区和工作区的差异（修改）
```
    git diff master
```
2. 撤回内容
(如果修改了工作区的文件后发现改错了，可以用暂存区或者版本库里的文件替换掉工作区的文件)
- 用暂存区中的内容或者版本库中的内容覆盖掉工作区
```
    git checkout index.html
```
- 取消增加到暂存区的内容（添加时）
```
    git reset HEAD index.html
```
- 显示目录的状体 有没有添加或者修改文件
```
    git status
```
- 删除本地文件
```
    rm fileName
```
* git init --初始化本地git环境
* git clone XXX--克隆一份代码到本地仓库
* git pull --把远程库的代码更新到工作台
* git pull --rebase origin master --强制把远程库的代码跟新到当前分* 支上面
* git fetch --把远程库的代码更新到本地库
* git add . --把本地的修改加到stage中
* git commit -m 'comments here' --把stage中的修改提交到本地库
* git push --把本地库的修改提交到远程库中
* git branch -r/-a --查看远程分支/全部分支
* git checkout master/branch --切换到某个分支
* git checkout -b test --新建test分支
* git checkout -d test --删除test分支
* git merge master --假设当前在test分支上面，把master分支上的修改同步到test分支上
* git merge tool --调用merge工具
* git stash --把未完成的修改缓存到栈容器中
* git stash list --查看所有的缓存
* git stash show stash@{0} 查看某个进度具体修改的文件
* git stash pop --恢复本地分支到缓存状态
* git blame someFile --查看某个文件的每一行的修改记录（）谁在什么时候* 修改的）
* git status --查看当前分支有哪些修改
* git log --查看当前分支上面的日志信息
* git diff --查看当前没有add的内容
* git diff --cache --查看已经add但是没有commit的内容
* git diff HEAD --上面两个内容的合并
* git reset --hard HEAD --撤销本地修改
* echo $HOME --查看git config的HOME路径
* export $HOME=/c/gitconfig --配置git config的HOME路径


## 常用的一些命令
* git remote add origin 远程仓库地址 --将当前的仓库与远程的仓库连接起来
* git branch --set-upstream debug origin/test --远程分支关联
* git push -u origin branch(分支名称) --绑定远程分支
* git branch -d BranchName --删除本地分支
* git push origin --delete BranchName --删除远程分支 
* git checkout -b test origin/test 切换并绑定远程分支
* git fetch --all  git reset --hard origin/master git pull origin/master (三个命令)