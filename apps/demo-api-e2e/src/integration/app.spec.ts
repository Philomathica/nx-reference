describe('SharedApiHealthController', () => {
  const getHealth = () => cy.request('/health');
  const healthResponse = { status: 'ok', info: { 'demo-db': { status: 'up' } }, error: {}, details: { 'demo-db': { status: 'up' } } };

  it('should return status ok', () => {
    getHealth().its('status').should('eq', 200);
  });

  it('returns JSON', () => {
    getHealth().its('headers').its('content-type').should('include', 'application/json');
  });

  it('return health response', () => {
    getHealth().its('body').should('deep.eq', healthResponse);
  });
});
