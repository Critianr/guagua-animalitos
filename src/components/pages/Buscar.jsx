import './buscar.css';
const Search = () => {
    return (
        <>
        <div className="container">
            <h1>Busca las fundaciones y Hogares de paso Disponibles</h1>
            <div className='items-centro'>
            <i className='fas fa-search-location'></i>
            <input className='buscador' type="text" placeholder='Busca aqui' />
            </div>
        </div>
        </>
    )
}
export {Search} 