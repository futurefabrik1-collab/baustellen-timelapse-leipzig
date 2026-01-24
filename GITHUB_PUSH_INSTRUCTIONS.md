# 🚀 How to Push to GitHub

## Your Repository Details
- **GitHub Username**: futurefabrik1-collab
- **Repository**: baustellen-timelapse-leipzig
- **URL**: https://github.com/futurefabrik1-collab/baustellen-timelapse-leipzig

---

## ✅ Quick Option: Use GitHub Desktop

1. **Download GitHub Desktop**: https://desktop.github.com/
2. Open GitHub Desktop and sign in
3. Click "Add" → "Add Existing Repository"
4. Choose: `/Users/markburnett/ai-web-dev-tool/baustellen-timelapse-site`
5. Click "Publish repository"
6. Done! ✅

---

## 🔑 Option 2: Create Personal Access Token (Command Line)

### Step 1: Create Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "Baustellen Timelapse Deploy"
4. Select scopes: ✅ `repo` (all sub-options)
5. Click "Generate token"
6. **COPY THE TOKEN** (you'll only see it once!)

### Step 2: Push with Token
```bash
cd /Users/markburnett/ai-web-dev-tool/baustellen-timelapse-site

# Set remote URL with token
git remote set-url origin https://YOUR-TOKEN@github.com/futurefabrik1-collab/baustellen-timelapse-leipzig.git

# Push
git push -u origin main
```

Replace `YOUR-TOKEN` with the token you copied.

---

## 🔐 Option 3: Setup SSH Key (Most Secure)

### Step 1: Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
# Press Enter to accept default location
# Enter a passphrase (optional)
```

### Step 2: Copy SSH Key
```bash
cat ~/.ssh/id_ed25519.pub
# Copy the entire output
```

### Step 3: Add to GitHub
1. Go to: https://github.com/settings/keys
2. Click "New SSH key"
3. Title: "MacBook - Baustellen Project"
4. Paste your key
5. Click "Add SSH key"

### Step 4: Push
```bash
cd /Users/markburnett/ai-web-dev-tool/baustellen-timelapse-site

# Remote is already set to SSH
git push -u origin main
```

---

## ⚡ Option 4: Install GitHub CLI (Easiest for Future)

```bash
# Install with Homebrew
brew install gh

# Login
gh auth login

# Push
cd /Users/markburnett/ai-web-dev-tool/baustellen-timelapse-site
git push -u origin main
```

---

## 🎯 Recommended: GitHub Desktop

For the fastest solution with no terminal commands, use **GitHub Desktop**.
Download: https://desktop.github.com/

---

## ✅ After Successfully Pushing

1. Visit: https://github.com/futurefabrik1-collab/baustellen-timelapse-leipzig
2. Verify all files are there
3. Proceed to deploy on Vercel!

---

## 🆘 Having Issues?

- Make sure the repository exists at: https://github.com/futurefabrik1-collab/baustellen-timelapse-leipzig
- Check that you're signed in to the correct GitHub account
- Try GitHub Desktop for the easiest experience

---

**Current Status**: Repository configured, ready to push!
