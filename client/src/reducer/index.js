import {GET_DOGS, GET_NAME_DOGS,GET_TEMPERAMENT, GET_WEIGHT,FILTER_CREATED,GET_DETAILS  } from '../actions/index.js'


const initialState = {
    dogs : [],
    allDogs: [],
    weight: [],
    temperament: [],
    detail:[]

}


function rootReducer (state= initialState, action) {
    switch(action.type){
        case GET_DOGS:
        return{
            ...state,
            dogs:action.payload,
            allDogs:action.payload

        }
            case GET_NAME_DOGS:
            return{
                ...state,
                dogs:action.payload
            }

            case GET_TEMPERAMENT:
                return{
                    ...state,
                    temperament: action.payload
                }

            case GET_WEIGHT:
            const allDogs = state.allDogs
            const weightFiltered = action.payload === 'All' ?allDogs : allDogs.filter(el => el.weight === action.payload)
            return {
                ...state,
                dogs: weightFiltered

            }
            case 'POST_DOG':
                return{
                    ...state,

                }
            case FILTER_CREATED:
            
            const createdFilter = action.payload === 'created' ? state.allDogs.filter(el => el.createdInDb) : state.allDogs.filter(el => !el.createdInDb)
            return{
                ...state,
                dogs: action.payload === 'All' ? state.allDogs : createdFilter
            }
            case GET_DETAILS:
            return{
                ...state,
                detail: action.payload
            }

        default:
            return state
     
    }
  

}

export default rootReducer
