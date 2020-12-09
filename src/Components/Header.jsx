import Navbar from './Navbar'
import '../Styles/Components/header.css'

const Header = () => {
    return (
        <>

        <Navbar />
        <header>
            <div className="head">
                <p className='head-titulo'>MOMsIN</p>
                <p className='head-subtitulo'>Marketing Digital</p>
            </div>
        </header>
        
        </>
    )
}

export default Header