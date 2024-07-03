import { LoginAlert } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        LoginAlert()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a)!')
    })
})
