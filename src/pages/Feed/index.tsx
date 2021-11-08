import { Header } from 'pages/Login/styles';
import React, { useState } from 'react';
import Handshake from '../../assets/handshake.png';
import { List, Card } from './styles';
import { posts } from '../../api/users';
import { ChatBubbleOutline, Favorite, FavoriteBorderOutlined, SendOutlined, SmsOutlined } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import { useNavigate } from 'react-router';

const Feed: React.FC = () => {

    const [comment, setComment] = useState<string>("");
    const [postsList, setPostsList] = useState(posts);
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

    const likePost = (index: number, like: boolean) => {
        posts[index].like = like;        
        setPostsList([...posts]);
    }

    return (
        <>
             <Header>
                <span onClick={() => navigate('quem-somos')}>Quem somos</span>
                <span>Meu perfil</span>
                <span>Fale conosco</span>
                <span onClick={() => navigate('faq')}>FAQ</span>
                <span>Me ajude</span>
                <img src={Handshake} alt={''} />
            </Header>
            <List>
                <div className="round">
                    <SmsOutlined style={{color: '#FFF', fontSize: '40px'}} />
                </div>
                {postsList?.map((item, index) => (
                    <Card key={index}>
                        <header>
                            <img src={item.user.photo} />
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
            </List>
        </>
    );
}

export default Feed;
