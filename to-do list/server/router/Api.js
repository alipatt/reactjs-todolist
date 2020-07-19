const express = require('express')
const app = express.Router()
const cors = require('cors')
const Todo = require('../models/Todo')

app.use(cors())

process.env.SECRET_KEY = 'secret'


//get list
app.get('/list' , async function(req,res) {
  
  await Todo.findAll().then((products) => {
  res.status(200).json(products)
}).catch((err) => {
  console.log({ err })
  res.status(404).json()

})
})


app.post('/didit', (req, res) => {
  const todo = {
    id:req.body.id,
  todo: req.body.todo,
  status: 1
    }

// Update into table
Todo.update(todo,{ where: { id: todo.id } }).then((response) => {
  res.status(200).json(response)
}).catch((err) => {
  console.log('update failed with error: ' + err)
  res.status(404).json()
})
})

app.post('/delete', (req, res) => {
  const product = {
    id:req.body.id
    }

// Delete into table
Todo.destroy({ where: { id: product.id } }
  ).then(() => {
    res.status(200).json()
  }).catch(function (err) {
    console.log('delete failed with error: ' + err)
    res.status(404).json()
  })
})

app.post('/addtodo', (req, res) => {
  const todo = {
    id:req.body.id,
    todo: req.body.todo,
    status: 0
    }
console.log(todo)
// Insert into table
Todo.create(todo).then((response) => {
  res.status(200).json(response)
}).catch((err) => {
  console.log('Insert failed with error: ' + err)
  res.status(404).json()
})
})

module.exports = app
