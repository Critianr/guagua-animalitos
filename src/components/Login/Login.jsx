import './login.css';

const Login = () => {
    return (
        <>
        <div className='login'>
            <form action="">
            <img src="./src/assets/logo.png" alt="logo" width="150" height="130 " />
                <p>Inicio de Sección</p>
                <input type="text" />
                <p>Correo</p>
                <input type="text" />
                <p>Contraseña</p>
                <button className='enviar'>Enviar</button>
            </form>
        </div>
        </>
)}
export {Login}