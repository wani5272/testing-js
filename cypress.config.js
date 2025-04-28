import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
  },
});
// Throttle API responses to simulate real-world conditions
beforeEach(() => {
  cy.intercept(
    {
      url: 'http://localhost:3001/**',
      middleware: true,
    },
    (req) => {
      req.on('response', (res) => {
        // Throttle the response to 1 Mbps to simulate a
        // mobile 3G connection
        res.setThrottle(1000)
      })
    }
  )
})