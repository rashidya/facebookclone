const express = require('express')
const Post = require('../models/post')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.send("Error" + err)
    }

})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.send("Error" + err)
    }

})


router.get('/user/:userId', async (req, res) => {
    try {
        const post = await Post.find({userId:req.params.userId})
        res.json(post)
    } catch (err) {
        res.send("Error" + err)
    }

})

router.post('/', async (req, res) => {

    const post = new Post({
        userId: req.body.userId,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body,
    })

    try {

        const response = await post.save()
        res.json(response)
    } catch (err) {
        res.send("Error" + err)
    }

})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        post.userId = req.body.userId
        post.date = req.body.date
        post.time = req.body.time
        post.title = req.body.title,
            post.body = req.body.body
        const response = await post.save()

        res.json(response)
    } catch (err) {
        res.send("Error" + err)
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const response = await post.remove()
        res.json(response)
    } catch (err) {
        res.send("Error" + err)
    }

})
module.exports = router