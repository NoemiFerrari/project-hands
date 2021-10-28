import React from 'react';
import { Header, Container, Bar, Modal } from './styles';
import BackgroundHome from '../../assets/background-home.jpg';
import ArrowRight from '../../assets/arrow-right.png';
import Handshake from '../../assets/handshake.png';
import Close from '../../assets/close.png';
import { Button, ButtonProps, Checkbox, CheckboxProps, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, withStyles } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

export const BlueCheckbox = withStyles({
    root: {
      color: '#222a99',
      '&$checked': {
        color: '#222a99',
      },
      checked: {},
    },
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

 export const ColorButton = withStyles({
    root: {
      color: '#FFF',
      '&:hover': {
        background: '#222a99',
      },
      background: '#222a99'
    },
  })((props: ButtonProps) => <Button color="default" {...props} />);



const Login: React.FC = () => {

    const [cont, setCont] = React.useState<number>(1);
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [isRegister, setIsRegister] = React.useState<boolean>(true);
    const [isLogin, setIsLogin] = React.useState<boolean>(false);
    const [username, setUsername] = React.useState<string>("");
    // const [password, setPassword] = React.useState<string>("");
    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    

    const handleChangeModal = () => {
        setOpenModal(!openModal); 
    }

    const next = () => {
        if(cont === 5){
            setCont(1);
        }else{
            setCont(cont + 1);
        }
    }

    const handleChangeOrder = () => {
        setIsLogin(!isLogin);
        setIsRegister(!isRegister);
    }

    const goTo = (url: string) => {

        if(isLogin) {

            let users = new Array()

            if (localStorage.hasOwnProperty("users")) {
                users = JSON.parse(localStorage.getItem("users") || "")
            }
                        
            const res = users.find((el : any ) => el.username === username);

            if(res && res.password === values.password) {
                navigate(url);
            }else {
                alert("Usuário não encontrado!")
            }
       }

       if(isRegister) {
            let users = new Array()

            const obj = {
                'password': values.password,
                'username': username
            };

            if (localStorage.hasOwnProperty("users")) {
                users = JSON.parse(localStorage.getItem("users") || "")
            }
            
            users.push(obj)
            localStorage.setItem("users", JSON.stringify(users))
            
            navigate(url);
       }

    };
    
    return (
        <>
            {openModal && (
                <Modal>
                    <div id="modal">
                        <div style={{width: '100%', display: 'flex', justifyContent: 'end', marginBottom: '30px'}}>
                            <img src={Close} alt={''} onClick={handleChangeModal}/>
                        </div>
                        <FormGroup style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <FormControlLabel control={<BlueCheckbox />} label="Login" checked={isLogin} onChange={handleChangeOrder} />
                            <FormControlLabel control={<BlueCheckbox />} label="Cadastro" checked={isRegister}onChange={handleChangeOrder} />
                        </FormGroup>
                        <FormControl variant="outlined" style={{width: '80%', marginTop: '30px'}}>
                            <TextField
                                id="outlined-basic"
                                label="Usuário"
                                variant="outlined"
                                value={username}
                                required
                                inputProps={{ maxLength: 100 }}
                                onChange={(event: any) => setUsername(event.target.value)} />
                        </FormControl> 
                        <FormControl variant="outlined" style={{width: '80%', marginTop: '30px',  marginBottom: '30px'}}>
                            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={!values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>   
                        <ColorButton onClick={() => goTo('/feed')} variant="contained">{isLogin ? "ENTRAR" : "REGISTRAR-SE"}</ColorButton>
                    </div>
                </Modal>
            )}
            <Header>
                <img src={Handshake} alt={''} />
            </Header>
            <Container> 
                <div className="slider">
                    {cont === 1 && (
                        <div>
                            <span>Você precisa de ajuda?</span>
                            <p>
                            Aqui você encontra a pessoa certa. Converse com alguém agora mesmo.
                                <span onClick={next}>Mais <img src={ArrowRight} alt={''}/></span>
                            </p>
                            <Bar position={'0px'}>
                            </Bar>
                        </div>
                     )}
                     {cont === 2 && (
                        <div>
                            <span>Não desista de você!</span>
                            <p>
                                Estamos aqui para te ajudar e te dar suporte em tudo o que for preciso!!
                                <span onClick={next}>Mais <img src={ArrowRight} alt={''}/></span>
                            </p>
                            <Bar position={'50px'}>
                            </Bar>
                        </div>
                     )}
                     {cont === 3 && (
                        <div>
                            <span>Está se sentindo sozinho?</span>
                            <p>
                                Aqui você encontra apoio 24h. Lembre-se, você nunca está sozinho.
                                <span onClick={next}>Mais <img src={ArrowRight} alt={''}/></span>
                            </p>
                            <Bar position={'100px'}>
                            </Bar>
                        </div>
                     )}
                     {cont === 4 && (
                        <div>
                            <span>Se reivente! Permita-se!</span>
                            <p>
                                Imagine uma nova história para sua vida e acredite nela.
                                <span onClick={next}>Mais <img src={ArrowRight} alt={''}/></span>
                            </p>
                            <Bar position={'150px'}>
                            </Bar>
                        </div>
                     )}
                     {cont === 5 && (
                        <div>
                            <span>Seja livre para se expressar!</span>
                            <p>
                                Compartilhe seus momentos e conheça histórias inspiradoras.
                                <span onClick={next}>Mais <img src={ArrowRight} alt={''}/></span>
                            </p>
                            <Bar position={'200px'}>
                            </Bar>
                        </div>
                     )}
                     <button onClick={handleChangeModal}>Vamos começar</button>
                </div>
                <div className="back-img">
                    <img src={BackgroundHome} alt={''} />
                </div>    
            </Container>
        </>
    );
}

export default Login;
