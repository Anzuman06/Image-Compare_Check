it('should go to a local host and collect image', function(){
    
    cy.visit('http://localhost/test/screenshots').get('[href="/test/screenshots/1.jpg"]').click(),
    cy.get('img').screenshot('new'),
    cy.go('back').get('[href="/test/screenshots/Capture.png"]').click(),
    cy.find('img').screenshot('New'),
    cy.compareSnapshot()
    

})