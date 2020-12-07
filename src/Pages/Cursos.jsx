import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import cursos from '../Services/cursos'
import '../Styles/Pages/cursos.css'


const Cursos = () => {
    return (
        <>
            <Navbar />
            <div className='subtitulos-cursos'>
                <h2>Quer começar uma carreira em marketing digital mas não sabe como? Calma! A gente te ajuda!</h2>
                <h3>Aqui listamos cursos gratuitos com alguns dos principais conhecimentos exigidos nessa área para você iniciar seus estudos, se aperfeiçoar e se tornar super competitiva no mercado de trabalho!</h3>
            </div>
            <div id='container-cursos'>
                {cursos.map(curso => {

                    return <div id='card-cursos' key={curso.id}>
                        <h3>{curso.titulo}</h3>
                        <p>{curso.descricao}</p>
                        <p>Oferecido por: {curso.fornecedor}</p>
                        <a href={curso.link} rel='noreferrer noopener nofollow' target='_blank'>Saiba mais</a>
                    </div>
                    
                })}
            </div>
            <Footer />
        </>
    )
}

export default Cursos