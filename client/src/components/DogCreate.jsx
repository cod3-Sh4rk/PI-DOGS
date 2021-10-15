import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { postDog, getTemperaments } from '../actions'







export default function DogCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const {temperament} = useSelector(state => state)
    console.log(temperament,'estos son los temperamentos')

    const [input,setInput] =useState({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image: "",
        temperament:[]
    })
    

function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    console.log(input)
}


const handleOnChangeEspecial = (e)=>{
    if(input.temperament.includes(e.target.value)){
       let newTemperaments = input.temperament.filter(tem => tem !== e.target.value)
        setInput({
            ...input,
           temperament: newTemperaments
        })
    }else{
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }
}


function handleSelect(e){
    setInput({
        ...input,
        temperament: [...input.temperament,e.target.value]
    })
}

function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    dispatch(postDog(input))
    alert("Perro creado!")
    setInput({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image: "",
        temperament:[]
    })
    history.push('/home')
}

useEffect(()=>{
    dispatch(getTemperaments())
},[dispatch])

    return(
        <div>
            <Link to= '/home'>Volver</Link>
            <h1>Crea tu raza</h1>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type= "text"
                    value= {input.name}
                    name= "name"
                    onChange= {handleChange}
                    />

                </div>
                <div>
                    <label>Altura:</label>
                    <input type= "text"
                     value= {input.height}
                     name= "height"
                     onChange= {handleChange}
                    
                    
                    />
                </div>
                <div>
                    <label>Peso</label>
                    <input
                    type= "text"
                    value= {input.weight}
                    name= "weight"
                    onChange= {handleChange}
                    />
                    
                </div>
                <div>
                    <label>Esperanza de vida:</label>
                    <input
                    type= "text"
                    value= {input.life_span}
                    name= "life_span"
                    onChange= {handleChange}
                    />
                    
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                    type= "text"
                    value= {input.image}
                    name= "image"
                    onChange= {handleChange}
                    />
                    
                </div>
                <select onChange={handleOnChangeEspecial} >
                    {temperament.map((tem) => 
                
                       ( <option value ={tem.name}>{tem.name}</option>)
                    ) }
                </select>
                <ul><li>{input.temperament.map(el => el + " ,")}</li></ul>
                <button type= "submit">Crear</button>


            </form>
       
        </div>)


}