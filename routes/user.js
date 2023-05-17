const express=require('express')
const userRouter=express.Router()
const User =require('../models/user')

//add user to db

userRouter.post('/add',async (req,res)=>{
    try{
        let newuser= new User(req.body)
    let saveduser= await newuser.save()
    res.send({saveduser,msg:"user added successefully"})
    } catch (error){
console.log(error)
    }
})


//get all users

userRouter.get('/all',async (req,res)=>{
    try{
    let allusers= await User.find()
    res.send({allusers})
    } catch (error){
console.log(error)
    }
})

//get user by id

userRouter.get('/:id',async (req,res)=>{
    try{
    let oneuser= await User.findById(req.params.id)
    res.send({oneuser})
    } catch (error){
console.log(error)
    }
})


//delete by id
userRouter.delete('/:id',async (req,res)=>{
    try{
    let user= await User.findByIdAndDelete(req.params.id)
    res.send({msg:"user deleted"})
    } catch (error){
console.log(error)
    }
})

//update by id
userRouter.put('/:id',async (req,res)=>{
    try{
    let user= await User.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"user updated"})
    } catch (error){
console.log(error)
    }
})

module.exports=userRouter