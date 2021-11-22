import { Footer, Header } from 'pages/Login/styles';
import React, { useEffect, useState } from 'react';
import Handshake from '../../assets/handshake.png';
import { List, Card } from './styles';
import { posts, myPosts } from '../../api/users';
import { ChatBubbleOutline, Copyright, Facebook, Favorite, FavoriteBorderOutlined, Instagram, LinkedIn, SendOutlined, SmsOutlined, Twitter } from '@material-ui/icons';
import { useNavigate } from 'react-router';

const Feed: React.FC = () => {

    const [comment, setComment] = useState<string>("");
    const [postsList, setPostsList] = useState(posts);
    const [myPostsList, setMyPostsList] = useState(myPosts);
    const [name, setName] = React.useState<string>("");
    const navigate = useNavigate();

    const postComment = (index: number) => {

        const username = localStorage.getItem("username");

        const obj = {
            'username': `@${username}`,
            'comment': comment
        }

        posts[index].comments.push(obj);        
        setPostsList([...posts]);
        setComment("");
    }

    const postCommentInMyPost = (index: number) => {

        const username = localStorage.getItem("username");

        const obj = {
            'username': `@${username}`,
            'comment': comment
        }

        myPosts[index].comments.push(obj);        
        setMyPostsList([...myPosts]);
        setComment("");
    }

    const likePost = (index: number, like: boolean) => {
        posts[index].like = like;        
        setPostsList([...posts]);
    }

    useEffect(() => {
        const username = localStorage.getItem("username");
        setName(username || "");
    }, []);

    return (
        <>
             <Header>
                <span onClick={() => navigate('quem-somos')}>Quem somos</span>
                <span onClick={() => navigate('/feed/perfil')}>Meu perfil</span>
                <span>Fale conosco</span>
                <span onClick={() => navigate('faq')}>FAQ</span>
                <span onClick={() => navigate('/feed')}>Feed</span>
                <img src={Handshake} alt={''} onClick={() => navigate('/')}/>
            </Header>
            <List>
                <div className="round">
                    <SmsOutlined style={{color: '#FFF', fontSize: '40px'}} />
                </div>
                {postsList?.map((item, index) => (
                    <Card key={index}>
                        <header>
                            <img src={item.user.photo} alt={''}/>
                            <span>{item.user.username}</span>
                        </header>
                        <img src={item.photo} alt={''} />
                        <div id="icons">
                            {!item.like ?
                                <FavoriteBorderOutlined style={{fontSize: '30px'}} onClick={() => likePost(index, true)} /> 
                            : 
                                <Favorite style={{fontSize: '30px'}} onClick={() => likePost(index, false)} /> 
                            }
                            <ChatBubbleOutline fontSize={'large'} style={{marginLeft: '15px', fontSize: '30px'}} />
                            <SendOutlined fontSize={'large'} style={{marginLeft: '15px', fontSize: '30px'}} />
                        </div>
                        <div id="comments">
                            <span>{item.user.username} <span>{item.legend}</span></span>
                            {item.comments.map((comment, index) => (
                                <span key={index}>{comment.username} <span>{comment.comment}</span></span>
                            ))}
                        </div>
                        <div id="comments-me">
                            <input type="text" value={comment} placeholder="Diga alguma coisa sobre isso..." onChange={(event) => setComment(event.target.value)}/>
                            <span onClick={() => postComment(index)}>Comentar</span>
                        </div>
                    </Card>
                ))}
                {myPostsList?.map((item, index) => (
                    <Card key={index}>
                        <header>
                            <img src={'https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142837145'} alt={''}/>
                            <span>{name}</span>
                        </header>
                        <img src={item.link} alt={''} />
                        <div id="icons">
                            {!item.like ?
                                <FavoriteBorderOutlined style={{fontSize: '30px'}} onClick={() => likePost(index, true)} /> 
                            : 
                                <Favorite style={{fontSize: '30px'}} onClick={() => likePost(index, false)} /> 
                            }
                            <ChatBubbleOutline fontSize={'large'} style={{marginLeft: '15px', fontSize: '30px'}} />
                            <SendOutlined fontSize={'large'} style={{marginLeft: '15px', fontSize: '30px'}} />
                        </div>
                        <div id="comments">
                            <span>{name}<span>{item.title}</span></span>
                            {item.comments.map((comment, index) => (
                                <span key={index}>{comment.username} <span>{comment.comment}</span></span>
                            ))}
                        </div>
                        <div id="comments-me">
                            <input type="text" value={comment} placeholder="Diga alguma coisa sobre isso..." onChange={(event) => setComment(event.target.value)}/>
                            <span onClick={() => postCommentInMyPost(index)}>Comentar</span>
                        </div>
                    </Card>
                ))}
            </List>

            <Footer>
                <div className="menu">
                    <div>
                        <img src={Handshake} alt={''} />
                    </div>
                    <div>
                        <span>Informações</span>
                        <p>
                            Endereço: Rua Sabiá 133, Jardim Briquet 06655250. Itapevi - SP<br /> Atendimento 24h pelo telefone (11) 4142-1831 ou <br /> pelo e-mail contato@hands.com.br.
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

export default Feed;
