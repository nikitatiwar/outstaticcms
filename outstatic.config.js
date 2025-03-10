const { defineConfig } = require('outstatic')

module.exports = defineConfig({
  contentDir: 'content', // Directory where markdown files are stored
  collections: [
    {
      id: 'posts',
      name: 'Posts',
      fields: [
        { id: 'title', name: 'Title', type: 'text', required: true },
        { id: 'description', name: 'Description', type: 'textarea' },
        { id: 'slug', name: 'Slug', type: 'slug', required: true },
        { id: 'published', name: 'Published', type: 'boolean', default: false },
        { id: 'date', name: 'Date', type: 'date', required: true },
        { id: 'content', name: 'Content', type: 'markdown', required: true }
      ]
    }
  ],
  settings: {
    basePath: '/admin', // URL path for the CMS
    storageProvider: 'github', // Store content in GitHub
    githubRepo: 'nikitatiwar/outstaticcms', // Your repo name
    githubBranch: 'main', // Default branch
  }
})
