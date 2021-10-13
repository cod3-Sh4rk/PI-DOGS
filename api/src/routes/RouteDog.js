const { Router } = require('express');
const router = Router();
const {getAllDogs} = require('../controllers/Dogcontroller')
const { Dog, Temperament} = require("../db");

 router.get("/dogs",    async (req,res) =>{
    const name = req.query.name
    let dogsTotal = await getAllDogs();
    if (name){
        let dogName = await dogsTotal.filter( el => el.name.toLowerCase().includes(name.toLowerCase()))
        dogName.length?
        res.status(200).send(dogName):
        res.status(404).send("lost doggo");
    }else{
        res.status(200).send(dogsTotal)
        
    }
 })
 router.post("/dog", async (req,res)=>{
    let{
         name,
            img,
            height,
            weight,
            life_span,
            id,
            temperament,
            createdInDb

    } = req.body;
    let dogCreated = await Dog.create({
        name,
            img,
            height,
            weight,
            life_span,
            id,
            createdInDb

    })
    let temperamentDb = await Temperament.findAll({
        where:{name: temperament}
    })
    dogCreated.addTemperament(temperamentDb)
    res.send('Perro creado exitosamente')
})


router.get("/dogs/:id", async (req,res)=>{
    const id = req.params.id;
    const dogsTotal = await getAllDogs()
    if (id){
        let dogId = await dogsTotal.filter(el => el.id == id)
        dogId.length?
        res.status(200).json(dogId):
        res.status(404).send('lost Id dogoo')
    }
}) 

module.exports = router;