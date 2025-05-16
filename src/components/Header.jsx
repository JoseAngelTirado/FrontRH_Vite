import '../assets/Header.css'

const Header = () => {

    return (
        <div className='header'>
            <h2>Nombre de la empresa</h2>
            <div className='perfil'>
                <div>
                    <img
                        className='perfil-imagen'
                        alt='El avatar de emir'
                        src={`https://unavatar.io/AdrinEmir1`}
                    />
                </div>
                <div className='perfil-info'>
                    <strong>Nombre</strong>
                    <span className=''>rol</span>
                </div>
                <button className="">
                    <span className="">Salir</span>
                </button>
            </div>

        </div>
    )
}
export default Header;