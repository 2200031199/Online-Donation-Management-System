const Donar=require("../models/Donar") 


const insertdonar = async (request, response) => {
    try 
    {
      const input = request.body;
      const donar = new Donar(input);  
      await donar.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const checkdonarlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const donar = await Donar.findOne(input)
       response.json(donar)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

  module.exports = {insertdonar,checkdonarlogin}