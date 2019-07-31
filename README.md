# coder-forge
Coder Forge

## How-To use Git
----
## Step 1: Setup Git - Set User name and email
----
1. Step 1: git config --global user.name "Alvin Alexander"
2. Step 2: git config --global user.email YOUR-EMAIL-ADDRESS
----
## Step 2: Clone Your Repo
1. Go To: https://github.com/paulmcquad/coder-forge and Press the "Fork" button.
2. Open your Terminal i.e Konsole or CMD
3. git clone https://github.com/{user.name}/coder-forge.git
----
## Step 3: Make Changes to the code
1. Open a Code Editor like [Code](https://code.visualstudio.com/), [Atom](https://atom.io/),[Vim](https://www.vim.org/download.php) or [Emacs](https://www.gnu.org/software/emacs/) and alter the code.
----
## Step 4: Add/Save the changes Locally
1. To find which files have changed Type: [git status](https://git-scm.com/docs/git-status).
2. To see the code that's changed Type: [git diff](https://git-scm.com/docs/git-diff).
3. To Save the file/files changed Type: [git add . ](https://git-scm.com/docs/git-add). Note: The dot means all files.
4. You need to have a Commit message. Type: [git commit -a](https://git-scm.com/docs/git-commit). It opens a code editor for you to describe the changes carried out. The default code editor is vim.
5. See a log of the changes: [git log](https://git-scm.com/docs/git-log)
----
## Step 5: Push to the Server
1. Push your changes online: [git push origin master](https://git-scm.com/docs/git-push)
----
## Step 6: Creating/Merging Branches
1. List All your Branches: [git branch](https://git-scm.com/docs/git-branch). Note by Default you're on "master".
2. Create a branch named "develop": git branch develop.
3. Change to the branch named "test": [git checkout develop](https://git-scm.com/docs/git-checkout)
4. Make changes: See Step 4.
5. Change to the branch named "master": [git checkout master](https://git-scm.com/docs/git-checkout)
6. Merge Code changes to master. [git merge develop](https://git-scm.com/docs/git-merge)
----
## Step 7: Publish Tags Online
1. List all tags: [git tag](https://git-scm.com/docs/git-tag)
2. Create a tag: [git tag v0.0.1](https://git-scm.com/docs/git-tag)
3. push a tag to server: [git push origin v0.0.1](https://git-scm.com/docs/git-tag)
----
## Step 8: Pull Requests
1. Go To: https://github.com/paulmcquad/coder-forge and Press the "Pull request" button.
2. A Big Green Button will appear: "Create pull request".
---
## Step 9: Sync with Cloned Repo

1. Check remote settings: [git remote -v](https://www.git-scm.com/docs/git-remote)
You should get something like this:
origin  https://github.com/{username}/coder-forge.git (fetch)
origin  https://github.com/{username}/coder-forge.git (push)
2. Add an upstream URL:
[git remote add upstream https://github.com/paulmcquad/coder-forge.git](https://www.git-scm.com/docs/git-remote)

3. Check remote settings again: [git remote -v](https://www.git-scm.com/docs/git-remote). It should look something like this:
origin  https://github.com/paulmcquad/coder-forge.git (fetch)
origin  https://github.com/paulmcquad/coder-forge.git (push)
upstream        https://github.com/golang/coder-forge.git (fetch)
upstream        https://github.com/golang/coder-forge.git (push)

4. Fetch changes from main repo: [git fetch upstream](https://www.git-scm.com/docs/git-fetch)
5. Merge changes to "local master" from "upstream master" - [git merge upstream/master](https://www.git-scm.com/docs/git-merge).

6. Push Local changes to Github: [git push origin master](https://www.git-scm.com/docs/git-push)