import React from 'react';
import { Header, Container } from './styles';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from 'pages/Login/styles';
import CONTACT from '../../assets/contact-us.png';
import Handshake from '../../assets/handshake.png';
import { toast, ToastContainer } from 'react-toastify';
import { Button, ButtonProps, Checkbox, CheckboxProps, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, withStyles } from '@material-ui/core';
import { Copyright, Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';


export const ColorButton = withStyles({
    root: {
      color: '#FFF',
      '&:hover': {
        background: '#222a99',
      },
      background: '#222a99'
    },
  })((props: ButtonProps) => <Button color="default" {...props} />);


const ContactUs: React.FC = () => {
    
    const navigate = useNavigate();

    const [username, setUsername] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");

    const goTo = () => {

        if(username === '' || email === '' || message === '') {
            toast.warning("É necessário preencher todos os campos.");
            return;
        }else{
            toast.success("Mensagem encaminhada para a nossa equipe!");
        }
    }

    return (
        <>
            <Header>
            <span onClick={() => navigate('/feed/quem-somos')}>Quem somos</span>
                <span onClick={() => navigate('/feed/perfil')}>Meu perfil</span>
                <span>Fale Conosco</span>
                <span onClick={() => navigate('/feed/faq')}>FAQ</span>
                <span onClick={() => navigate('/feed')}>Feed</span>
                <img src={Handshake} alt={''} onClick={() => navigate('/')}/>
            </Header>
            
            <ToastContainer />
            <Container>
                <div className="accordion">
                    <span className="title">Fale Conosco</span>

                    <FormGroup style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                      
                        </FormGroup>
                        <FormControl variant="outlined" style={{width: '80%', marginTop: '30px'}}>
                            <TextField
                                id="outlined-basic"
                                label="Seu nome"
                                value={username} 
                                onChange={(event: any) => setUsername(event.target.value)} 
                                variant="outlined"
                                required/>
                        </FormControl> 

                        <FormControl variant="outlined" style={{width: '80%', marginTop: '30px'}}>
                            <TextField
                                id="outlined-basic"
                                label="Seu email"
                                value={email}
                                onChange={(event: any) => setEmail(event.target.value)} 
                                variant="outlined"
                                required/>
                        </FormControl> 
                        
                        <FormControl variant="outlined" style={{width: '80%', marginTop: '30px'}}>
                            <TextField
                                id="outlined-basic"
                                label="Mensagem"
                                value={message} 
                                onChange={(event: any) => setMessage(event.target.value)} 
                                variant="outlined"
                                required/>
                        </FormControl> 
                        
                        <ColorButton onClick={() => goTo()}>Enviar mensagem</ColorButton>
                </div>

                <div className="image">

                    <img src={CONTACT} alt={''} />
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

export default ContactUs;
