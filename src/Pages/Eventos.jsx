import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import eventos from '../Services/eventos'
import '../Styles/Pages/eventos.css'


const Eventos = () => {
    return (
        <>
            <Navbar />
            <div className='subtitulo-eventos'>
                <p>Fique por dentro dos principais eventos<br /> sobre Marketing Digital:</p>
            </div>
            <div id='container-eventos' >
                {eventos.map(evento => {
                    return <div id='card-eventos' key={evento.id}>
                        <h3>{evento.evento}</h3>
                        <p>{evento.descricao}</p>
                        <p>Data: {evento.data}</p>
                        <p>Local: {evento.local}</p>
                        <a href={evento.link} rel='noreferrer noopener nofollow' target='_blank'>Saiba mais</a>
                    </div>
                })}
            </div>
            <Footer />

        </>
    )
}

export default Eventos