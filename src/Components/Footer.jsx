import '../Styles/Components/footer.css'
import { DiReact } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';



const Footer = () => {
    return (
        <footer>
            <div className='footer-texto'>
                Desenvolvido em React <DiReact className='footer-icon' size={18} color='#48CEF7' /> por Ana Luiza Costa Lima |
            </div>
            <div >
                <a className='rodape-media' href='https://www.linkedin.com/in/anamlcl/' rel='noreferrer noopener nofollow' target='_blank'>
                    <AiFillLinkedin className='footer-icon-social-media' size={22} />
                </a>
                <a className='rodape-media' href='https://github.com/anamlcl' rel='noreferrer noopener nofollow' target='_blank'>
                    <AiFillGithub className='footer-icon-social-media' size={22} />
                </a>
            </div>
        </footer>
    )
}

export default Footer