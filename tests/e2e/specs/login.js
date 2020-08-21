/// <reference types="Cypress" />
describe('登录页', () => {
    it('没有输入密码时有提示', () => {
        cy.visit('/#login')
        cy.get('#coordinated_username')
            .type('abc')
        // cy.get('#coordinated_password').type()
        cy.get('button[type="submit"]').click()
        cy.get('.ant-form-explain').contains('请输入')
    })
})
