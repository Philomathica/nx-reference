const demoApiBasUrl = Cypress.env('DEMO_API_BASE_URL');
const getHealthResponse = () => cy.request(`${demoApiBasUrl}/health`);

describe('SharedApiHealthController', () => {


  it('should return status ok', () => {
    getHealthResponse().its('status').should('eq', 200);
  });
});
