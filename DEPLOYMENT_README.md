# Dual-Repo Deployment Configuration

This repository is configured for dual-repo version control with controlled deployment.

## Repository Structure

- **Primary Repo (GitLab)**: Source of truth + deployment control
- **Mirror Repo (GitHub)**: Read-only public mirror
- **Deployment**: Firebase Hosting (GitLab CI only)

## Quick Start

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete setup instructions.

## Key Security Points

- ✅ Firebase credentials stored ONLY in GitLab CI variables
- ✅ GitHub repository CANNOT deploy to Firebase
- ✅ Only `main` branch on GitLab triggers deployments
- ✅ Service account JSON never committed to version control

## Files in This Configuration

- `.gitlab-ci.yml` - GitLab CI pipeline (builds + deploys)
- `firebase.json` - Firebase Hosting configuration
- `.firebaserc` - Firebase project settings
- `DEPLOYMENT.md` - Detailed deployment guide

## For Contributors

When contributing:

1. Fork/branch from GitLab (not GitHub)
2. Submit merge requests to GitLab
3. GitHub mirror updates automatically
4. Deployments happen automatically on merge to `main`

---

**Note**: GitHub is a mirror for public access. All development and deployments happen through GitLab.
