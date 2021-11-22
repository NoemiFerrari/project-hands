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
                <span onClick={() => navigate('quem-somos')}>Quem somos</span>
                <span onClick={() => navigate('/feed/perfil')}>Meu perfil</span>
                <span>Fale conosco</span>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum sem sit amet metus ornare, eget mattis lorem auctor. Proin euismod euismod neque, non vestibulum risus congue interdum. Praesent mi nisl, scelerisque pretium turpis eu, placerat aliquet felis. Duis quis rhoncus felis. Vestibulum gravida eu massa scelerisque cursus. Nullam varius est metus, quis rutrum mi vehicula sit amet. Cras semper in nibh a mollis. Aliquam ante enim, laoreet nec sagittis quis, egestas at sem.
                    </div>
                    <div style={{paddingTop: '65px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum sem sit amet metus ornare, eget mattis lorem auctor. Proin euismod euismod neque, non vestibulum risus congue interdum. Praesent mi nisl, scelerisque pretium turpis eu, placerat aliquet felis. Duis quis rhoncus felis. Vestibulum gravida eu massa scelerisque cursus. Nullam varius est metus, quis rutrum mi vehicula sit amet. Cras semper in nibh a mollis. Aliquam ante enim, laoreet nec sagittis quis, egestas at sem. Duis eros mauris, posuere ut metus in, consequat ultricies libero. Aliquam erat volutpat.
                    </div>
                </div>
                <div className="container-company">
                    <div style={{width: '35%'}}>
                        <img src={"https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt={''}/>
                    </div>
                    <div style={{padding: '25px', display: 'flex', alignItems: 'center', width: '30%', textAlign: 'justify'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum sem sit amet metus ornare, eget mattis lorem auctor. Proin euismod euismod neque, non vestibulum risus congue interdum. Praesent mi nisl, scelerisque pretium turpis eu, placerat aliquet felis. Duis quis rhoncus felis. Vestibulum gravida eu massa scelerisque cursus. Nullam varius est metus, quis rutrum mi vehicula sit amet. Cras semper in nibh a mollis. Aliquam ante enim, laoreet nec sagittis quis, egestas at sem. Duis eros mauris, posuere ut metus in, consequat ultricies libero. Aliquam erat.
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