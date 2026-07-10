describe('Login', () => {

  beforeEach(() =>  {
    
    cy.env(['URL']).then(({ URL }) => {
      cy.visit('/')
      cy.screenshot('apos-visitar-pagina')
    })
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    
    cy.fazerLoginComCredenciaisValidas()
    cy.screenshot('apos-clicar-em-botão-clicar')

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  
  })

  it('Login com dados inválidos deve apresentar mensagem de erro.', () => {
    cy.fazerLoginComCredenciaisInvalidas()
    cy.screenshot('apos-clicar-botao-entrar-com-senha-invalida')

  
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  
  })
})