import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
    <header>
      <div className="icons-followers">
        <ul>
          <li><i className="fab fa-whatsapp"></i></li>
          <li><i className="fab fa-facebook-f"></i></li>
          <li><i className="fab fa-twitter"></i></li>
          <li><i className="fab fa-instagram"></i></li>
        </ul>
      </div>
      <div className='title'>
        <NavLink className='navbar-brand' to="/">
        <img src="./src/assets/logo.png" alt="logo" width="50" height="30 " />
       
      </NavLink>
      <NavLink className='logo-title' to="/">Guagua Animalitos</NavLink>
      </div>
      <div className='menu'>
        <NavLink className="item-menu" to="Registro"> Registro</NavLink>
        <NavLink className="item-menu" to="Login"> Inicio de Sección Voluntarios</NavLink>
        <NavLink className="item-menu" to="found"> Hogares de paso</NavLink>
        
      </div>
    </header>    
      
    );
  };

export {Header}