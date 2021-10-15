import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getDetail} from "../actions"
import {useEffect} from "react";



export default function Detail(props){
    console.log(props)
const dispatch = useDispatch()

useEffect(()=> {
    dispatch(getDetail(props.match.params.id));
},[dispatch])

const myDog = useSelector ((state)=> state.detail)

return (
    <div>
        {
            myDog.length>0 ?
            <div>
                <h1>Nombre:{myDog[0].name}</h1>
                <img src= {myDog[0].img? myDog[0].img : myDog[0].image} alt="" width= "500px" height= "700px"/>
                <h2>Altura: {myDog[0].height}</h2>
                <p>Peso: {myDog[0].weight}</p>
                <p>Esperanza de vida {myDog[0].life_span}</p>
                <h4>Temperamentos: {!myDog[0].createdInDb? myDog[0].temperament + ' ' : myDog[0].temperament.map(el => el.name + (' '))}</h4>
                </div> : <p>Cargando...</p>
        }
        <Link to = './home'>
            <button>Volver</button>
        </Link>
    </div>
    )

}
