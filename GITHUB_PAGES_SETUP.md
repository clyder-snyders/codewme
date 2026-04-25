# GitHub Pages Deployment Guide

This portfolio is ready to be deployed on GitHub Pages. Follow these steps to get your site live.

## Prerequisites

- A GitHub account
- Git installed on your machine
- The portfolio repository

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `{your-username}.github.io`
   - Replace `{your-username}` with your actual GitHub username
   - This special naming convention makes GitHub Pages automatically publish from the `main` branch
3. Leave it public so GitHub Pages can serve it

### 2. Clone and Configure

```bash
# Clone your new repository
git clone https://github.com/{your-username}/{your-username}.github.io.git
cd {your-username}.github.io

# Copy the portfolio files into the repository
# (Copy all files from the dist/public directory after building)
```

### 3. Build the Portfolio

```bash
# Install dependencies
pnpm install

# Build for production
pnpm build

# The built files will be in dist/public/
```

### 4. Deploy to GitHub Pages

```bash
# Copy the built files to the root of your repository
cp -r dist/public/* .

# Add all files to git
git add .

# Commit the changes
git commit -m "Deploy portfolio to GitHub Pages"

# Push to GitHub
git push origin main
```

### 5. Enable GitHub Pages

1. Go to your repository settings: `https://github.com/{your-username}/{your-username}.github.io/settings`
2. Scroll down to the "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Make sure "main" branch is selected
5. Click "Save"

Your site should be live at `https://{your-username}.github.io` within a few minutes!

## Automatic Deployment with GitHub Actions

For easier updates, you can set up GitHub Actions to automatically deploy on every push:

### 1. Create a Workflow File

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

### 2. Commit and Push

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

Now, every time you push to the `main` branch, your portfolio will automatically rebuild and deploy!

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Go to your repository settings → Pages
3. Under "Custom domain", enter your domain name
4. Update your domain's DNS records to point to GitHub Pages:
   - Add an A record pointing to `185.199.108.153`
   - Or add a CNAME record pointing to `{your-username}.github.io`
5. GitHub will verify the domain and enable HTTPS automatically

## Troubleshooting

### Site not showing up
- Wait 5-10 minutes for GitHub Pages to process
- Check that your repository is public
- Verify the build completed successfully locally

### 404 errors on subpages
- This is normal for client-side routing. GitHub Pages requires a workaround.
- The portfolio uses Wouter for client-side routing, which should work correctly
- If you experience issues, you may need to add a `404.html` file

### Styles not loading
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Verify that the CSS files are in the `dist/public` directory

## Updating Your Portfolio

To update your portfolio:

1. Make changes to the source files
2. Run `pnpm build`
3. Copy the new files: `cp -r dist/public/* .`
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

If you set up GitHub Actions, you can skip steps 2-3 and just push your changes!

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
