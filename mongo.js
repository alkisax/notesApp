const mongoose = require('mongoose')

// πέρνει το pass ως argv με την εντολη node mongo.js 2102011895
if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

// το url to πείρα απο το atlas mongodb
const url =
  `mongodb+srv://alkisax:${password}@cluster0.8ioq6.mongodb.net/testNoteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

// το schema δεν είναι ακριβώς απαραίτητο στα nosql
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

// με το schema φτιάχνω Model
const Note = mongoose.model('Note', noteSchema)

// Data to be inserted from gpt
// const notes = [
//   {
//     content: 'HTML is easy!',
//     important: true,
//     id: '67b784b90f818a3bbf8979e9',
//   },
//   {
//     content: 'geia soy alki',
//     important: true,
//     id: '67b7876bddf359f2b1ee4a70',
//   },
// ]

// το model δρα ως constructor
// const note = new Note({
//   content: 'geia soy mimika',
//   important: true,
// })

//CRUD
//Create
//σώζω και κλείνω
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

//read
//για να βρώ

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

//gpt
// Note.insertMany(notes)
//   .then(() => {
//     console.log('Notes added to the database!')
//     mongoose.connection.close()
//   })
//   .catch((error) => {
//     console.error('Error inserting notes:', error)
//     mongoose.connection.close()
//   })