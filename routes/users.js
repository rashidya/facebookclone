const express=require('express')
const User=require('../models/user')
const router=express.Router()

router.get('/',async (req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    }catch (err){
        res.send("Error" +err)
    }

})

router.get('/:id',async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch (err){
        res.send("Error" +err)
    }

})

router.post('/',async (req,res)=>{

    const user = new User({
        firstName:req.body.firstName,
        surname:req.body.surname,
        gender:req.body.gender,
        dateOfBirth:req.body.dateOfBirth,
        password:req.body.password,
        phoneNo:req.body.phoneNo,
        email:req.body.email

    })

    try {

        const response= await  user.save()
        res.json(response)
    }catch (err){
        res.send("Error" +err)
    }

})

router.put('/:id',async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        user.firstName=req.body.firstName
        user.surname=req.body.surname
        user.gender=req.body.gender
        user.dateOfBirth=req.body.dateOfBirth
        user.password=req.body.password
        user.phoneNo=req.body.phoneNo
        user.email=req.body.email
        const response=await user.save()

        res.json(response)
    }catch (err){
        res.send("Error" +err)
    }

})

router.delete('/:id',async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const response=await user.remove()
        res.json(response)
    }catch (err){
        res.send("Error" +err)
    }

})
module.exports=router