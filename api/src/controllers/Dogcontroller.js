const { Dog, Temperament} = require("../db");
const axios = require("axios");
const { Router } = require('express');
const router = Router();
const {API_KEY} = process.env

const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const apiInfo = await apiUrl.data.map(e => {
        return {
            name: e.name,
            image:e.image,
            image_url: e.image_url,
            height: e.height,
            weight: e.weight,
            life_span: e.life_span,
            id: e.id,
            temperament: e.temperament
           
        }
    });
    return apiInfo;
};



const getDbInfo = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through :{
                attributes: [],
            },
        }
    })
}

const getAllDogs = async () =>{
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal

}




module.exports={
   getAllDogs, 
   getApiInfo
}