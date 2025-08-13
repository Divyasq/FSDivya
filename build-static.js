#!/usr/bin/env node

// Script to build a static version of the migration status page
import { build } from 'vite';
import fs from 'fs';
import path from 'path';

async function buildStatic() {
  console.log('Building static version...');
  
  // Build the project
  await build({
    base: '/migration-status/',  // GitHub Pages subdirectory
    build: {
      outDir: 'docs',  // GitHub Pages looks for docs folder
      emptyOutDir: true,
    }
  });
  
  // Create a simple index.html that redirects to the migration status
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Migration Status - SDP Migration Tracker</title>
    <meta http-equiv="refresh" content="0; url=./index.html">
    <style>
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 50px; 
            background: #f5f5f5; 
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white; 
            padding: 40px; 
            border-radius: 8px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
        }
        .loading { 
            color: #666; 
            font-size: 18px; 
        }
        a { 
            color: #007bff; 
            text-decoration: none; 
        }
        a:hover { 
            text-decoration: underline; 
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>SDP Migration Status Tracker</h1>
        <p class="loading">Loading migration status...</p>
        <p>If you're not redirected automatically, <a href="./index.html">click here</a>.</p>
    </div>
</body>
</html>
  `;
  
  fs.writeFileSync(path.join('docs', 'index.html'), indexHtml.trim());
  
  console.log('✅ Static build complete! Files are in the "docs" directory.');
  console.log('📁 Ready for GitHub Pages deployment.');
}

buildStatic().catch(console.error);
