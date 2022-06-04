import { Link } from "react-router-dom"
import React from 'react'
import '../Css/Adm.css'




export default function Adm() {
  return (
    <div className="home"> 
        <div className="navbar">
            <div className="buttons">
                <nav>
                    <Link className="btn-hm" to="/">Home</Link>
                    <Link className="btn-adm" to="adm">Administração</Link>
                </nav>
            </div>
        </div>

        <div className="content">
            <div class= "rounded-lg" className="area">
                <input class="placeholder-shown:border-gray-800" className="input" placeholder="Input" />   
                <input class="placeholder-shown:border-gray-800" className="input" placeholder="Input" />   
                <input class="placeholder-shown:border-gray-800" className="input" placeholder="Input" />   
                <input class="placeholder-shown:border-gray-800" className="input" placeholder="Input" />  
            </div>
            <div className="btn">
                <button className="botao"> Button</button> 
                <button className="botao"> Button</button> 
                <button className="botao"> Button</button> 
                <button className="botao"> Button</button> 
            </div>

         
        </div>
    </div>
 

  )
}