const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://confirme30-dev.confirmeonline.com.br/',
  },
  retries: {
    runMode: 5,  
    openMode: 5, 
  },
  fixturesFolder: false,
  video: false,
  fixturesFolder: 'cypress/fixtures', // ✅ padrão do Cypress

})
