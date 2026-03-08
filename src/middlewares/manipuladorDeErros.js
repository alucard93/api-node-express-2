import mongoose from 'mongoose'
function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .json({ message: 'Um ou mais dados fornecidos estão incorretos.' })
  } else {
    res
      .status(500)
      .json({ message: `${erro.message} - Erro interno no servidor.` })
  }
}

export default manipuladorDeErros
