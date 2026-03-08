import mongoose from 'mongoose'

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: {
    type: String,
    required: [true, 'O título do livro é obrigatório.'],
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'autores',
    required: [true, 'O autor do livro é obrigatório.'],
  },
  editora: {
    type: String,
    required: [true, 'A editora do livro é obrigatória.'],
    enum: {
      values: ['Editora A', 'Editora B', 'Editora C'],
      message:
        'A editora {VALUE} deve ser uma das seguintes: Editora A, Editora B, Editora C.',
    },
  },
  numeroPaginas: {
    type: Number,
    min: [
      10,
      'O número de páginas deve ser pelo menos 10. Valor fornecido: {VALUE}.',
    ],
    max: [
      5000,
      'O número de páginas deve ser no máximo 5000. Valor fornecido: {VALUE}.',
    ],
  },
})

const livros = mongoose.model('livros', livroSchema)

export default livros
