import { Copyright, Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import { Footer, Header } from 'pages/Login/styles';
import React from 'react';
import { useNavigate } from 'react-router';
import Handshake from '../../assets/handshake.png';
import { Container } from './styles';

const WhoAreWe: React.FC = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <Header>
                <span>Quem somos</span>
                <span onClick={() => navigate('/feed/perfil')}>Meu perfil</span>
                <span onClick={() => navigate('/feed/fale-conosco')}>Fale Conosco</span>
                <span onClick={() => navigate('/feed/faq')}>FAQ</span>
                <span onClick={() => navigate('/feed')}>Feed</span>
                <img src={Handshake} alt={''} onClick={() => navigate('/')}/>
            </Header>
            <Container>
                <div className="container-image">
                    {/* <img src={'https://images.pexels.com/photos/5318961/pexels-photo-5318961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} /> */}
                </div>
                <div className="container-text">
                    <div>
                        <span>Quem somos?</span> <br /><br />
                        O Project Hands, vem da vontade de ajudar ao próximo e de conectar outras pessoas que querem ajudar com as que necessitam dessa "mão amiga" estamos orgulhosos de poder abraçar a causa e fazer a diferença na vida das pessoas.
                    </div>
                    <div style={{paddingTop: '95px'}}>
                        Esperamos que nossos apoiadores se sintam confortáveis com a plataforma e com a proposta e sempre sugiram melhorias e nos ajudem a agregar na ferramenta, esse projeto é feito de pessoas para pessoas e o que nos move isso, sempre que precisar de uma mão, conte conosco!
                    </div>
                </div>
                <div className="container-company">
                    <div style={{width: '35%'}}>
                        <img src={"https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt={''}/>
                    </div>
                    <div style={{padding: '25px', display: 'flex', alignItems: 'center', width: '30%', textAlign: 'justify'}}>
                        Com esse intuito entendemos que precisaríamos criar um lugar onde todos pudesse compartilhar seus melhores momentos e ao mesmo tempo achar um ambiente seguro o suficiente para que eu possa me comunicar com uma pessoa, problemas que as vezes falar com alguém conhecido parece muito mais difícil, mas sempre com controle e supervisão e deixando claro que caso tenha problemas maiores deve-se buscar ajuda profissional.
                    </div>
                    <div style={{width: '35%'}}>
                        <img src={"https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt={''}/>
                    </div>
                </div>
            </Container>
            <Footer>
                <div className="menu">
                    <div>
                        <img src={Handshake} alt={''} />
                    </div>
                    <div>
                        <span>Informações</span>
                        <p>
                            Endereço: Rua Sabiá 133, Jardim Briquet 06655250. Itapevi - SP<br /> Atendimento 24h pelo telefone (11) 4142-1831 <br /> ou pelo e-mail contato@hands.com.br.
                        </p>
                    </div>
                    <div>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <LinkedIn />
                    </div>
                </div>
                <div className="copyright">
                    <Copyright style={{color: '#FFFFFF', fontSize: '18px', marginRight: '10px'}}/> 2021 - Todos os direitos reservados
                </div>
            </Footer>
        </>
    );
}

export default WhoAreWe;