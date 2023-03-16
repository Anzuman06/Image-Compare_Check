
    it('should compare screenshot of the entire page', function(){
        cy.visit('www.google.com').screenshot('homepage'),
        cy.get(':nth-child(7) > .lsbb > .lsb').hideElement(),
        cy.wait(3000),
        cy.compareSnapshot('homepage')
    })