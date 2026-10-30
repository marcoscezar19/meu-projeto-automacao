export interface CenarioLogin {
  descricao: string;
  usuario: string;
  senha: string;
  sucesso: boolean;
  mensagemEsperada?: string;
}

export const listaUsuarios: CenarioLogin[] = [
  {
    descricao: 'Usuário Válido',
    usuario: 'customer@practicesoftwaretesting.com',
    senha: 'welcome01',
    sucesso: true
  },
  {
    descricao: 'Senha Incorreta',
    usuario: 'customer@practicesoftwaretesting.com',
    senha: 'senha_errada_123',
    sucesso: false,
    mensagemEsperada: 'Invalid email or password'
  },
  {
    descricao: 'Usuário Não Cadastrado / Inexistente',
    usuario: 'usuario_inexistente_qa@testing.com',
    senha: 'welcome01',
    sucesso: false,
    mensagemEsperada: 'Invalid email or password'
  }
];