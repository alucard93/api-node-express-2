class ErroBase extends Error {
  constructor(mensagem = 'Erro interno no servidor.', statusCode = 500) {
    super(mensagem)
    this.message = mensagem
    this.statusCode = statusCode
  }

  enviarResposta(res) {
    res.status(this.statusCode).json({ message: this.message })
  }
}

export default ErroBase
