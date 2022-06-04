import img from '../Img/atc.jpg'
import '../Css/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
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

    <div className="conteudo">
      <div class= "rounded-lg" className="card">
        <div className="card-header">
          <h1>Conteudo</h1>
        </div>
        <div classname="img"> 
          <img src={img}/> 
        </div>
        <div className="card-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.
          </p>
          </div>
        
      </div>

    </div>
  </div>
  )
}