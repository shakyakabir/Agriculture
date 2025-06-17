# 🚀 Git & GitHub Workflow Guide

This README provides a simple step-by-step guide to working with Git and GitHub — including cloning, creating branches, making changes, pushing, pulling, and merging.

---

## 🔧 Git Workflow (All Steps in One)

### 1 Clone the Repository

Start by cloning the GitHub repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2 Create a New Branch
Before making changes, create a new branch:

git checkout -b your-branch-name

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3 Stage and Commit Your Changes

git add .
git commit -m "Add: Description of the changes"

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4 Push Your Branch to GitHub

git push origin your-branch-name

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5  Pull the Latest Changes from Main (Optional but Recommended)
Make sure your branch is not behind:

git pull origin main

If you're on a different branch:
git checkout main
git pull origin main
git checkout your-branch-name
git merge main

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

6 Merge Your Branch into Main
After testing and reviewing your changes:

git checkout main
git pull origin main
git merge your-branch-name
git push origin main

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

7.  Delete the Merged Branch (Optional Cleanup)

git branch -d your-branch-name                # Delete locally
git push origin --delete your-branch-name     # Delete from GitHub

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 Quick Command Summary
git clone <repo-url>                  # Clone repository
git checkout -b <branch>              # Create new branch
git add .                             # Stage changes
git commit -m "message"               # Commit changes
git push origin <branch>              # Push to GitHub
git pull origin main                  # Pull latest main
git merge <branch>                    # Merge into main
git branch -d <branch>                # Delete local branch
git push origin --delete <branch>     # Delete remote branch
