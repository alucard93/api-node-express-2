import RequisicaoIncorreta from './RequisicaoIncorreta.js'

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagensErro = Object.values(erro.errors)
      .map((val) => val.message)
      .join('; ')

    super(`Os seguintes erros de validação foram encontrados: ${mensagensErro}`)
  }
}

export default ErroValidacao
