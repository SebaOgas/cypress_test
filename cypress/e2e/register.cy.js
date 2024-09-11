  describe('Register', () => {
    it('Registro de usuario', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
  
      cy.get('button#signup').contains('Sign up').click()
  
      cy.get('input#firstName').type('Marcuelo')

      cy.get('input#lastName').type('Espeche')

      const emailPrueba = generarEmailAleatorio();

      cy.get('input#email').type(emailPrueba)

      cy.get('input[type="password"]#password').type('test123')
  
      cy.get('button#submit').contains('Submit').click()

      cy.contains('button', 'Logout').should('be.visible')

    })
  })

  function generarEmailAleatorio() {
    const caracteres = '-_$#&*abcdefghijklmnopqrstuvwxyz0123456789';
    const dominio = 'test.com';
    const longitud = 6;

    let nombreUsuario = '';
    for (let i = 0; i < longitud; i++) {
        nombreUsuario += caracteres[parseInt(Math.random() * caracteres.length)];
    }

    return `${nombreUsuario}@${dominio}`;
}

