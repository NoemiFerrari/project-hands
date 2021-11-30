import React from 'react';
import { Header, Container } from './styles';
import Handshake from '../../assets/handshake.png';
import FAQ from '../../assets/faq.jpg';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { Copyright, ExpandMore, Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import { Footer } from 'pages/Login/styles';

const Faq: React.FC = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <Header>
                <span onClick={() => navigate('/feed/quem-somos')}>Quem somos</span>
                <span onClick={() => navigate('/feed/perfil')}>Meu perfil</span>
                <span>Fale conosco</span>
                <span>FAQ</span>
                <span onClick={() => navigate('/feed/')}>Feed</span>
                <img src={Handshake} alt={''} onClick={() => navigate('/')}/>
            </Header>
            <Container>
                <div className="accordion">
                    <span className="title">FAQ</span>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Como me cadastrar?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Na página inicial, basta clicar em "Vamos começar?"
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Esqueci minha senha</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Clique no campo de esqueci minha senha e digite os dados usados no cadastro.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Como buscar profissionais</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Faça o cadastro e comece uma conversa por chat com uma pessoa disponível para você, anonimamente ou sendo identificado
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Como publicar no feed</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            No seu perfil, adicione o link da imagem e detalhes da legenda e a mesma sera adicionada ao seu perfil assim que você salvar :)
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Cancelar minha conta</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Vá na página Fale Conosco e solicite o cancelamento da sua conta.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Quero falar com o suporte</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Por favor sinta-se a vontade de entrar em contato com a gente pelo canal telefônico ou por email e também na página Fale Conosco. Caso precise de ajuda urgente ligue para o CVV 152.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="image">

                    <img src={FAQ} alt={''} />
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

export default Faq;
