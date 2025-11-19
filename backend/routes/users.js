const User = require('../models/user');
const express = require('express');
const router = express.Router();

// create a user
router.post('/', async (req, res) =>{
    try {
        const user = new User(req.body);
        user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// get all users 
router.get('/', async (req, res) =>{
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// get a user by id
router.get('/:id', async (req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }       
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// update a user
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body, 
            { new: true, runValidators: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// delete a user
router.delete('/:id', async (req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;