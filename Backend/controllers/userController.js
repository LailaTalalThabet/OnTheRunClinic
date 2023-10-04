const User=require('../models/UserModel')


const { default: mongoose } = require('mongoose');
//create a new user

const createUser = async(req,res) => {
   //add a new user to the database with 
   //Name,type,password
   const{username,password,role} = req.body ;
   console.log(req.body);
   try {
      const user = await User.create({username,password,role});
      console.log(user);
      res.status(200).json(user)
   }catch(error) {
         res.status(400).json({error:error.message})
       }    
   }


const getUsers = async (req, res) => {
   //retrieve all users from the database
   const users = await User.find({}).sort({createdAt : -1});
   for (let index = 0; index < users.length;index++) {
      const element = users[index];
      console.log(element.id);
   }
   res.status(200).json(users)
  }

  const getUser = async (req, res) => {
   const{username}=req.params
   const user=await User.find({username})
   if(!user){
    return res.status(404).json({error:'No such user'})
   }
   res.status(200).json(user)

   }

   const deleteUser = async (req, res) => {
      const { username } = req.params;
  
      try {
          // Attempt to find and delete the user with the specified username
          const deletedUser = await User.findOneAndDelete({ username});
  
          if (!deletedUser) {
              // If the user was not found, return a 404 response
              return res.status(404).json({ message: 'User not found' });
          }
  
          // If the user was found and deleted successfully, return a 200 response
          return res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
          console.error(error);
          // If an error occurred during the deletion process, return a 500 response
          return res.status(500).json({ error: 'An error occurred while deleting the user' });
      }
  };
module.exports = {createUser, getUsers, deleteUser,getUser};