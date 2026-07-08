describe('Login', () => {

  beforeEach(() =>  {
    
    cy.env(['URL']).then(({ URL }) => {
      cy.visit(URL)
      cy.screenshot('apos-visitar-pagina')
    })
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    

    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })

    cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-em-botão-clicar')

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  
  })

  it('Login com dados inválidos deve apresentar mensagem de erro.', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.usuario)
    })
    cy.screenshot('apos-preencher-senha-invalida')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-botao-entrar-com-senha-invalida')

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  
  })
})