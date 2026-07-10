Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
    cy.selecionarOpcaoNAComboBox('conta-origem', contaOrigem)
    cy.selecionarOpcaoNAComboBox('conta-destino', contaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})