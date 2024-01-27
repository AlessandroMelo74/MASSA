const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://confirme30-dev.confirmeonline.com.br',
  },
  fixturesFolder: false,
  video: false,
})
