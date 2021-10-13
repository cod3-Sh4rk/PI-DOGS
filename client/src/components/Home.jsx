import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getDogs } from '../actions'
import {Link} from 'react-router-dom'
import Card from './Card'



export default function Home (){


    const dispatch = useDispatch()
    
    const allDogs = useSelector ((state) => state.dogs)

    useEffect (()=>{
        dispatch(getDogs());
    },[dispatch])
function handleClick(e){
    e.preventDefault();
    dispatch(getDogs());
}


return (
    <div>
    <Link to = "/dog">Crear perro</Link>
    <h1>Dog theme page</h1>
    <button onClick = {e=> {handleClick(e)}}>
        Volver a cargar las razas
    </button>
    <div>
        <select>
            <option value = 'asc'>Ascendente</option>
            <option value = 'desc'>Descendente</option>
        </select>
        <select>
            <option>Todos</option>
            <option>Peso</option>
            <option>Temperamentos</option>
        </select>
        <select>
            <option>Todos</option>
            <option>Creados</option>
            <option>Existente</option>
        </select>
    {allDogs?.map((e)=> {
        console.log(allDogs)
        return (
            <fragment >
                <Link to={"/home/" + e.id}>
                    <Card name={e.name} image_url={e.image_url} temperament={e.temperament}   />

                </Link>
            </fragment>
        )
    })}
    </div>
        </div>
 )


}