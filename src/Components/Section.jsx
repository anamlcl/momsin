import '../Styles/Components/section.css'
import imgHome from '../Assets/pregnant-woman-notebook.jpg'

const Section = () => {
    return (
        <section className='sessao-principal'>
            <div className='sessao-titulo'>
                <p className='sessao-title'>Sobre o Projeto</p>
            </div>
            <div className='sessao-conteudo'>
                <div className='sessao-img'>
                    <img src={imgHome} alt='mulher grávida usando notebook' />
                </div>
                <div className='sessao-texto'>
                    <p>
                        O MOMsIN é o projeto final com tema livre que foi desenvolvido durante o bootcamp de front-end da <a className='link-word' href='https://reprograma.com.br/' rel='noreferrer noopener nofollow' target='_blank'>&#123;reprograma&#125;.</a> Esse projeto foi escolhido e criado para servir de complemento à Trilha MOMsIN, sendo direcionado a profissionais, mulheres e mães, que buscam entrar ou retornar ao mercado de trabalho. O objetivo é mapear e facilitar o acesso a vagas, cursos preparatórios e eventos focados em Marketing Digital.
                </p>
                </div>
            </div>
        </section>
    )
}

export default Section