const express=require('express')
const router = express.Router()
const {createUser, deleteUser,getUser,getUsers}=require('../controllers/userController')


router.get('/',getUsers)

//get a single user
router.get('/:id',getUser)

//add a single user
router.post('/',createUser)

//delete a single user
router.delete('/:id',deleteUser)



module.exports=router