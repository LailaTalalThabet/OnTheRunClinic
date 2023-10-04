const Doctor=require('../models/DoctorModel')

//create a new doctor
const { default: mongoose } = require('mongoose');

const createDoctor = async(req,res) => {
   //add a new doctor to the database with 
   //Name,type,password
   const{Username,Name,Email,Password,Date_Of_Birth,Gender,Mobile_Number,Hourly_Rate,Hospital, Speciality} = req.body ;
   console.log(req.body);
   try {
      const user = await Doctor.create({Username,Name,Email,Password,Date_Of_Birth,Gender,Mobile_Number,Hourly_Rate,Hospital, Speciality});
      console.log(user);
      res.status(200).json(user)
   }catch(error) {
         res.status(400).json({error:error.message})
       }    
   }



const getPatients = async (req, res) => {
   //retrieve all patients of a doctor
	const{Username} = req.body ; 
   const patients = await DoctorModel.find({Username:Username},{Patients:1});
    console.log(patients);
   res.status(200).json(users)
  }

  const updateDoctor = async (req, res) => {
    //update a user in the database
    try{
       const{username}=req.body
       const user = await userModel.findOne({Name : Name})
       
       user.save()
       res.status(200).json(user)
    }catch{1
 
       res.status(400).json({error:ServiceWorkerRegistration.message})
    }
   }





module.exports = {createDoctor, getPatients};