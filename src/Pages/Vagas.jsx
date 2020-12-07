import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import vagas from '../Services/vagas'
import '../Styles/Pages/vagas.css'


const Vagas = () => {
    return (
        <>
            <Navbar />
            <div className='subtitulo'>
                <h2>Separamos aqui as principais vagas para você dar início a sua carreira no marketing digital!</h2>
            </div>
            <div id='container-vagas'>
                {vagas.map(vaga => {

                    return <div class='card-vagas' key={vaga.id}>
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