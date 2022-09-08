const express = require('express')
const router = express.Router()
const Todos = require('../models/todos.js');
const Weapons = require('../models/weapons.js');

//INDUCES
//Index
router.get('/', (req, res)=>{
    Todos.find({}, (err, foundTodos)=>{
        res.json(foundTodos);
    });
});

router.get('/weapons', (req, res)=>{
    Weapons.find({}, (err, foundWeapons)=>{
        res.json(foundWeapons);
    });
});
//New - React will handle our New route
//Delete
router.delete('/:id', (req, res)=>{
    Todos.findByIdAndRemove(req.params.id, (err, deletedTodo)=>{
        res.json(deletedTodo);
    });
});

//Update
router.put('/weapons/:id', (req, res)=>{
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedWeapon)=>{
        res.json(updatedWeapon);
    });
});

router.put('/:id', (req, res)=>{
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo)=>{
        res.json(updatedTodo);
    });
});


//Create
router.post('/', (req, res) => {
    Todos.create(req.body, (err, createdTodo) => {
        res.json(createdTodo);
    });
});

router.post('/weapons', (req, res) => {
    Weapons.create(req.body, (err, createdWeapons) => {
        res.json(createdWeapons);
    });
});

//Edit - React will handle our Edit route
//Show
router.get('/weapons/:id', (req, res)=>{
    console.log('in weapons.get')
    Todos.findById(req.params.id, (err, foundWeapon)=>{
        res.json(foundWeapon);
    });
});

router.get('/:id', (req, res)=>{
    Todos.findById(req.params.id, (err, foundTodo)=>{
        res.json(foundTodo);
    });
});



module.exports = router