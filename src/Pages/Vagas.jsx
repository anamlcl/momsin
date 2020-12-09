import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import vagas from '../Services/vagas'
import '../Styles/Pages/vagas.css'


const Vagas = () => {
    return (
        <>
            <Navbar />
            <div className='subtitulo'>
                <p>Separamos aqui as principais vagas para você iniciar<br /> a sua carreira no marketing digital!</p>
            </div>
            <div id='container-vagas'>
                {vagas.map(vaga => {

                    return <div id='card-vagas' key={vaga.id}>
                        <h3>{vaga.cargo}</h3>
                        <p>{vaga.empresa}</p>
                        <p>{vaga.local}</p>
                        <a href={vaga.link} rel='noreferrer noopener nofollow' target='_blank'>Saiba mais</a>
                    </div> 
                })}
            </div>
            <Footer />
        </>
    )
}

export default Vagas