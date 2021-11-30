import { Footer, Header, Modal } from '../Login/styles';
import React, { useEffect, useState } from 'react';
import Close from '../../assets/close.png';
import Handshake from '../../assets/handshake.png';
import { myPosts } from '../../api/users';
import { Bar, Grid, Tab } from './styles';
import { Copyright, Facebook, GridOn, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import { useNavigate } from 'react-router';
import { FormControl, TextField } from '@material-ui/core';
import { ColorButton } from 'pages/Login';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile: React.FC = () => {

    const navigate = useNavigate();
    
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [openEdit, setOpenEdit] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState<string>("");
    const [link, setLink] = React.useState<string>("");
    const [linkProfile, setLinkProfile] = React.useState<string>("");
    const [usernameProfile, setUsernameProfile] = React.useState<string>("");
    const [username, setUsername] = React.useState<string>("");
    const [userImg, setUserImg] = React.useState<string>("");
    const [postsList, setPostsList] = useState(myPosts);

    const handleChangeModal = () => {
        setOpenModal(!openModal); 
    }

    const handleChangeModalProfile = () => {
        setOpenEdit(!openEdit); 
    }

    useEffect(() => {
        const username = localStorage.getItem("username");

        if(!username) {
            navigate("/");
        }

        const postsStorage = localStorage.getItem("posts");
        
        if(postsStorage) {
            setPostsList(JSON.parse(postsStorage || ""));
        }

    }, []);

    const editProfile = () => {

        if(usernameProfile === '' || linkProfile === '') {
            toast.warn("Campos não podem ser vazios.");
            return;
        }

        setUsername(usernameProfile);
        setUserImg(linkProfile);

        localStorage.setItem("username", usernameProfile);
        localStorage.setItem("userImg", linkProfile);

        toast.success("Perfil editado com sucesso!");
        handleChangeModalProfile();
    }

    const post = () => {

        if(title === '' || link === '') {
            toast.warn("Campos não podem ser vazios.");
            return;
        }

        const obj = {
            'title': title,
            'link': link,
            'comments': [],
            'like': false
        }

        let newState = [];
        const postsStorage = localStorage.getItem("posts");
        
        if(postsStorage) {
            newState = JSON.parse(postsStorage || "");
        }else {
            newState = myPosts;
        }

        newState.unshift(obj);
        setPostsList([...newState]);

        localStorage.setItem("posts", JSON.stringify(newState));

        toast.success("Publicação concluída.")
        setLink("");
        setTitle("");
        handleChangeModal();

    };

    useEffect(() => {
        const username = localStorage.getItem("username");
        const userImg = localStorage.getItem("userImg");
        setUsername(username || "");
        setUserImg(userImg || "");
    }, []);

    return (
        <>
            {openModal && (
                <Modal>
                    <div id="modal">
                        <div style={{width: '100%', display: 'flex', justifyContent: 'end', marginBottom: '30px'}}>
                            <img src={Close} alt={''} onClick={handleChangeModal}/>
                        </div>
                        <h3>Nova publicação</h3>
                        <FormControl variant="outlined" style={{width: '80%', marginTop: '30px'}}>
                            <TextField
                                id="outlined-basic"
                                label="Link da imagem"
                                variant="outlined"
                                value={link}
                                required
                                onChange={(event: any) => setLink(event.target.value)} />
                        </FormControl> 
                        <FormControl variant="outlined" style={{width: '80%', marginTop: '30px'}}>
                            <TextField
                                id="outlined-basic"
                                label="Título"
                                variant="outlined"
                                value={title}
                                required
                                inputProps={{ maxLength: 100 }}
                                onChange={(event: any) => setTitle(event.target.value)} />
                        </FormControl>  
                        <ColorButton onClick={post} variant="contained" style={{marginTop: '30px'}}>PUBLICAR</ColorButton>
                    </div>
                </Modal>
            )}
            {openEdit && (
                <Modal>
                    <div id="modal">
                        <div style={{width: '100%', display: 'flex', justifyContent: 'end', marginBottom: '30px'}}>
                            <img src={Close} alt={''} onClick={handleChangeModalProfile}/>
                        </div>
                        <h3>Editar perfil</h3>
                        <FormControl variant="outlined" style={{width: '80%', marginTop: '30px'}}>
                            <TextField
                                id="outlined-basic"
                                label="Imagem de perfil"
                                variant="outlined"
                                value={linkProfile}
                                required
                                onChange={(event: any) => setLinkProfile(event.target.value)} />
                        </FormControl> 
                        <FormControl variant="outlined" style={{width: '80%', marginTop: '30px'}}>
                            <TextField
                                id="outlined-basic"
                                label="Nome de usuário"
                                variant="outlined"
                                value={usernameProfile}
                                required
                                inputProps={{ maxLength: 100 }}
                                onChange={(event: any) => setUsernameProfile(event.target.value)} />
                        </FormControl>
                        <ColorButton onClick={editProfile} variant="contained" style={{marginTop: '30px'}}>EDITAR</ColorButton>
                    </div>
                </Modal>
            )}
             <Header>
                <span onClick={() => navigate('/feed/quem-somos')}>Quem somos</span>
                <span>Meu perfil</span>
                <span>Fale conosco</span>
                <span onClick={() => navigate('/feed/faq')}>FAQ</span>
                <span onClick={() => navigate('/feed')}>Feed</span>
                <img src={Handshake} alt={''} onClick={() => navigate('/')}/>
            </Header>
            <ToastContainer />
            <Bar>
                <div>
                    <div className="photo">
                        <img src={userImg === "" ? 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' : userImg} alt={''} />
                    </div>
                    <div className="data">
                        <span>@{username}</span>
                        <div>
                            <span>
                                <span>{postsList.length}</span> publicações
                            </span>
                            <span>
                                <span>0</span> conexões
                            </span>
                            <span style={{marginLeft: '20px'}}>
                                <span>0</span> curtidas
                            </span>
                        </div>
                        <div style={{width: '280px', display: 'flex', justifyContent: 'space-between'}}>
                            <button onClick={handleChangeModal}>Criar publicação</button>
                            <button onClick={handleChangeModalProfile}>Editar perfil</button>
                        </div>
                    </div>
                </div>
            </Bar>
            <Tab>
               <GridOn /> Publicações
            </Tab>
            <Grid>
                {postsList?.map((item, index) => (
                    <div key={index}>
                        <img src={item.link} alt={''} />
                    </div>
                ))}
            </Grid>
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

export default Profile;
