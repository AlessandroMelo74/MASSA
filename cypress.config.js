const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://confirme30-dev.confirmeonline.com.br/auth/login',
  },
  fixturesFolder: false,
  video: false,
})
