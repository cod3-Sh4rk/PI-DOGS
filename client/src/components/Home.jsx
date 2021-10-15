import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getDogs,filterDogsByWeight,  filterCreated} from '../actions'
import {Link} from 'react-router-dom'
import Card from './Card'
import Paginado from './Paginado'
import SearchBar from './SearchBar';




export default function Home (){


    const dispatch = useDispatch()
    
    const allDogs = useSelector ((state) => state.dogs)

    const weight= useSelector ((state) => state.weight)

    const [currentPage,setCurrentPage] = useState(1)

    const [dogsPerPage,setDogsPerPage] =useState(8)

    const indexOfLastDog = currentPage * dogsPerPage

    const indexOfFirstDog = indexOfLastDog - dogsPerPage

    const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }



    useEffect (()=>{
        dispatch(getDogs());
    },[dispatch])
function handleClick(e){
    e.preventDefault();
    dispatch(getDogs());
}
function handleFilterWeight (e){
dispatch(filterDogsByWeight(e.target.value))
}
function handlefilterCreated(e){
dispatch(filterCreated(e.target.value))
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
        <select onChange={e=> handleFilterWeight (e)}>
            <option value = 'weight'>Peso</option>
        </select>
        <select onChange={e=> handlefilterCreated(e)}> 
            <option value = 'all'>Todos</option>
            <option value = 'created'>Creados</option>
            <option value = 'api'>de la api</option>
        </select>
        
            <Paginado
        dogsPerPage= {dogsPerPage}
        allDogs={allDogs.length}
        paginado = {paginado}
        />
        <SearchBar/>
    {currentDogs?.map((e)=> {
        
        return (
            <div>
                <Link to={"/home/" + e.id}>
                    <Card name={e.name} image_url={e.image_url} temperament={e.temperament} key={e.id}  />
                </Link>
            </div>
        )
    })}
    </div>
        </div>
 )


}