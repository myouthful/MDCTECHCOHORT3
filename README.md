# Welcome to MyDreamConnect Tech Bootcamp — Cohort 3 🚀

Welcome to the **Project Phase** of your journey with MyDreamConnect Tech Bootcamp!  
In this phase, you’ll build real projects and collaborate using **Git and GitHub** — just like developers in the industry.

This guide will help you learn how to use GitHub step-by-step.


## 🔄 Step 1: Clone the Repository to Your Computer

In your terminal or VS Code:

```bash
git clone https://github.com/myouthful/MDCTECHCOHORT3.git


Then move into the project folder:

cd project-name

```

## 🌿 Step 3: Create Your Own Branch

Before you start working, create a new branch:

```bash
git checkout -b your-name-feature

```
Example:

```bash
git checkout -b gideon-auth-page

```

---


🛠️ Step 4: Make Your Changes Locally

Edit or create files for your task. Make sure your changes are saved.


---

✅ Step 5: Stage and Commit Your Changes

Once you’re done:

```bash
git add .
git commit -m "A short message describing what you did"

```

Example:

```bash
git commit -m "Added login page and connected to API"
```

---

📤 Step 6: Push to Your GitHub

Push your branch to your own repo:

```bash
git push origin your-name-feature

```

---

🔁 Step 7: Open a Pull Request

1. Go to your GitHub repo in the browser.


2. You’ll see a "Compare & pull request" button — click it.


3. Choose the original repo as the base and your branch as the compare.


4. Add a title and description.


5. Click "Create Pull Request".



The project maintainer will review and merge your work.


---

💡 Useful Git Commands

Check current branch:

```bash

git branch

```
Switch to another branch:

```bash
git checkout branch-name

```

Pull latest changes from original repo (if you've added it as upstream):

```bash
git pull upstream main
```

---

❗ Final Tips

Commit regularly with clear messages

Do not push directly to main

Always create a pull request from your feature branch

Ask for help if you’re stuck — learning is part of the process



---

👏 Good luck — we can’t wait to see what you build!

– MyDreamConnect Bootcamp Team

---

Would you like me to:
- Include how to set up `upstream` remote?
- Add screenshots or video links?
- Adjust this for a React or Node.js project structure?

Let me know and I’ll update it for your exact use case!

---

## 🔐 GitHub Personal Access Token Setup

This project includes MCP (Model Context Protocol) server configuration for enhanced GitHub integration.

To set up Personal Access Token authentication, see: [MCP PAT Setup Guide](./MCP_PAT_SETUP.md)

Quick setup:
1. Create a GitHub PAT with `repo` and `read:packages` scopes
2. Restart VS Code MCP server
3. Enter your PAT when prompted

---
