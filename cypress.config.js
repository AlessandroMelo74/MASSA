const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://confirme-frontend-dev.azurewebsites.net/auth/login',
  },
  fixturesFolder: false,
  video: false,
})
