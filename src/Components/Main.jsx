import '../Styles/Components/main.css'


const Main = () => {
    return (
        <main>
            <div className='main'>
                <p className='main-titulo'>Trilha MOMsIN</p>
                <p className='main-subtitulo'>Marketing Digital</p>
            </div>
            <div className='main-conteudo'>
                <div className='main-video'>
                    <iframe title='momsin-marketing-digital' width="560" height="315" src="https://www.youtube.com/embed/YfvHH1ibqP0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
                </div>
                <div className='main-texto'>
                    <p>
                        Primeiro programa de Education Recruiting desenhado especialmente para mulheres com filhos. Um mix de treinamentos e resolução de desafios práticos para que você mostre na prática todo seu potencial, ganhe experiência, prepare seu portfólio e seu discurso para entrar no mercado de trabalho altamente competitiva. O único requisito para participar é ser mãe!<br/> <br/> Programa desenhado pela startup parentsIN, em parceria com a FGV Ventures, Aceleradora de Startups da Escola de Administração de São Paulo da Fundação Getúlio Vargas.<br /><br /> A parentsIN é signatária dos Princípios de Empoderamento das Mulheres, plataforma da ONU Mulheres e do Pacto Global da ONU, e segue as diretrizes desenhando programas e ações que guiam as empresas a respeito dos Objetivos de Desenvolvimento Sustentável, em especial sobre a meta 5.5 da Agenda 2030, que exige a total participação e oportunidades igualitárias na liderança e na vida econômica.<br /><br /> Se interessou? Increva-se para a próxima Trilha MOMsIN:
                    </p>
                    <a className='link-word' href='https://momsin.co/' rel='noreferrer noopener nofollow' target='_blank'>Quero Participar!</a>
                </div>
            </div>
        </main>
    )
}

export default Main