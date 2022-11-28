import './register.css';

const Register = () => {
    return (
        <>
        <div className='register'>
            <form action="">
            <img src="./src/assets/logo.png" alt="logo" width="150" height="130 " />
                <p>Nombre de colaboradores o nombre de las fundaciones</p>
                <input type="text" />
                <p>Cedula o nit</p>
                <input type="text" />
                <p>Fecha de nacimiento</p>
                <input type="text" />
                <h3>Registro de fundaciones y voluntarios</h3>
                <button className='enviar'>Enviar</button>
            </form>
        </div>
        </>
)}
export {Register}