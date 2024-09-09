describe('Login negativo', () => {
    it('Logueo de usuario negativo', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
  
      cy.get('input#email').type('estonoesunmail')
      cy.get('input[type="password"]').type('wewe')
  
      cy.get('button#submit').contains('Submit').click()
      
      cy.contains('span', 'Incorrect username or password').should('be.visible')

    })
  })