const { Temperament} = require("../db");
const axios = require('axios');
const {API_KEY} = process.env

async function preTemperament(){
    try {
        let allData = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
       
       const temperamentperdog = allData.data.map(e=>
           e.temperament ? e.temperament: "no dog"
        ).map(e=> e?.split(", "))
        
        const uniquetemperament = [...new Set(temperamentperdog.flat())]
        
        
        //
     uniquetemperament.forEach(el => {
         if (el) {
             Temperament.findOrCreate({
                 where : {name: el}
             })
         }
         
     });
  
     //console.log(uniquetemperament)
     
     return "temperamentos cargados exitosamente"
 
     } catch (error) {
        return "No se pudo cargar los temperamentos"
     }
     
}
async function getTemperament(req, res, next){
    try {
       let allData = await Temperament.findAll()
     res.json(allData)

    } catch (error) {
        next(error)
    }
}
module.exports = {
    getTemperament,
    preTemperament
}
