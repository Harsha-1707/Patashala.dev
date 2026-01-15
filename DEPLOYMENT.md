# Deployment Guide: GitLab → Firebase

This project uses **GitLab CI** for all deployments. GitHub is a read-only mirror.

---

## 🔒 Deployment Security

- **GitLab**: Controls all deployments via CI/CD
- **GitHub**: Mirror only, NO deployment access
- **Firebase**: Credentials stored only in GitLab CI variables

---

## 🚀 How Deployment Works

1. Push to `main` branch on GitLab
2. GitLab CI builds the frontend (`npm run build`)
3. GitLab CI deploys to Firebase Hosting
4. Changes automatically mirror to GitHub

**⚠️ Deployments DO NOT happen from:**

- Feature branches
- GitHub (ever)
- Local machines (use GitLab CI)

---

## ⚙️ Initial Setup

### 1. Firebase Project Setup

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project (already done if firebase.json exists)
firebase init hosting
```

### 2. Create Firebase Service Account

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Project Settings** → **Service Accounts**
4. Click **Generate New Private Key**
5. Download the JSON file (keep it secret!)

### 3. Configure GitLab CI Variables

In your GitLab project:

1. Go to **Settings** → **CI/CD** → **Variables**
2. Add these variables:

| Variable Name              | Value                 | Protected | Masked |
| -------------------------- | --------------------- | --------- | ------ |
| `FIREBASE_SERVICE_ACCOUNT` | _Entire JSON content_ | ✅ Yes    | ❌ No  |
| `FIREBASE_PROJECT_ID`      | `your-project-id`     | ✅ Yes    | ✅ Yes |

**Important**: Paste the ENTIRE service account JSON as the value for `FIREBASE_SERVICE_ACCOUNT`.

### 4. Update `.firebaserc`

Replace `your-firebase-project-id` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "patashala-dev"
  }
}
```

---

## 🔄 GitLab → GitHub Mirroring Setup

### In GitLab:

1. Go to **Settings** → **Repository** → **Mirroring repositories**
2. Enter GitHub repository URL:
   ```
   https://<username>:<token>@github.com/username/repo.git
   ```
   OR use SSH:
   ```
   git@github.com:username/repo.git
   ```
3. Select **Push** as mirror direction
4. Enable **Mirror only protected branches** (optional)
5. Click **Mirror repository**

### GitHub Personal Access Token:

1. Go to GitHub **Settings** → **Developer settings** → **Personal access tokens**
2. Generate new token with `repo` scope
3. Use this token in the GitLab mirror URL

---

## 🧪 Testing the Pipeline

### Test Build (without deploy):

```bash
# Push to feature branch
git checkout -b feature/test
git push origin feature/test
```

This will build but NOT deploy.

### Test Deploy:

```bash
# Push to main branch
git checkout main
git push origin main
```

This will build AND deploy to Firebase.

### Verify GitHub Mirror:

- Changes should appear on GitHub within minutes
- GitHub should have NO `.github/workflows` or Firebase credentials

---

## 📊 Monitoring Deployments

### GitLab CI:

- Go to **CI/CD** → **Pipelines**
- View build logs and deployment status

### Firebase Hosting:

```bash
firebase hosting:channel:list
```

### Live URL:

```
https://your-project-id.web.app
```

---

## 🛡️ Security Checklist

- ✅ Service account JSON NEVER committed to repo
- ✅ GitLab CI variables are protected
- ✅ GitHub repo has no Firebase credentials
- ✅ Only `main` branch triggers deploys
- ✅ `.gitignore` includes `firebase-sa.json`

---

## 🔧 Troubleshooting

### Deploy fails with "Permission denied"

- Check service account has "Firebase Hosting Admin" role
- Verify `FIREBASE_SERVICE_ACCOUNT` variable is set correctly

### GitHub not updating

- Check GitLab mirroring status in Settings → Repository
- Verify GitHub personal access token is valid

### Build succeeds but deploy skipped

- Verify you're pushing to `main` branch
- Check `.gitlab-ci.yml` has `only: - main` condition

---

## 📝 Manual Deploy (Emergency Only)

If GitLab CI is down:

```bash
# Build locally
cd frontend
npm install
npm run build

# Deploy using your personal Firebase login
firebase login
firebase deploy --only hosting
```

**⚠️ Use GitLab CI whenever possible!**
