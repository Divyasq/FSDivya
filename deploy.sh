#!/bin/bash

echo "🚀 Deploying Migration Status Page to GitHub Pages..."

# Add the HTML file
git add migration-status-standalone.html

# Commit with timestamp
git commit -m "Update migration status page - $(date)"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your page will be available at: https://divyasq.github.io/FSDivya/migration-status-standalone.html"
echo "⏱️  It may take a few minutes for changes to appear on the live site."
