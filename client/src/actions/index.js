import axios from 'axios'
export const  GET_DOGS = 'GET_DOGS'
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT'
export const GET_NAME_DOGS = 'GET_NAME_DOGS'
export const GET_WEIGHT = 'GET_WEIGHT'
export const FILTER_CREATED = 'FILTER_CREATED'
export const GET_DETAILS = 'GET_DETAILS'


export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs",{
    });
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })

        
        }
    }
    export function getTemperaments(){
        return async function(dispatch){
            var info = await axios.get("http://localhost:3001/temperament",{
        });
            return dispatch({
                type: GET_TEMPERAMENT,
                payload: info.data
            })
    
            
            }
        }
export function postDog(payload){
    return async function (dispatch){
        const response = await axios.post('http://localhost:3001/dog', payload);
        console.log(response)
        return response;

    }
}

export function getNameDogs(name){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3001/dogs?name=" + name);
            return dispatch({
                type : GET_NAME_DOGS,
                payload: json.data
            })
        }catch (error){
            console.log(error)
     } 
    }
}

export function filterDogsByWeight(payload){
    console.log(payload)
    return {
        type: GET_WEIGHT,
        payload
    }
}


export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function getDetail (id){
    return async function (dispatch){
        try{
            var json = await axios.get("http://localhost:3001/dogs" + id);
            return dispatch ({
                type: GET_DETAILS,
                payload:json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}