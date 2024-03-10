const Donar = require("../models/Donar")
const Admin=require("../models/Admin")

 const viewdonars = async (request, response) => 
 {
    try 
    {
      const donars = await Donar.find();
      if(donars.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(donars);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
};
const deletedonar = async (request, response) => 
 {
    try 
    {
      const email = request.params.email  //passing input through without parameters
      const donar = await Donar.findOne({"email":email})
      if(donar!=null)
      {
        await Donar.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
  

  module.exports = {viewdonars,deletedonar,checkadminlogin}