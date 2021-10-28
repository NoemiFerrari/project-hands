import { Header } from 'pages/Login/styles';
import React from 'react';
import Handshake from '../../assets/handshake.png';
import { List, Card } from './styles';
import { posts } from '../../api/users';
import { ChatBubbleOutline, FavoriteBorderOutlined, SendOutlined, SmsOutlined } from '@material-ui/icons';
import { TextField } from '@material-ui/core';

const Feed: React.FC = () => {

    return (
        <>
            <Header style={{position: 'fixed'}}>
                <img src={Handshake} alt={''} />
            </Header>
            <List>
                <div className="round">
                    <SmsOutlined style={{color: '#FFF', fontSize: '40px'}} />
                </div>
                {posts.map(item => (
                    <Card>
                        <header>
                            <img src={item.user.photo} />
                            <span>{item.user.username}</span>
                        </header>
                        <img src={item.photo} alt={''} />
                        <div id="icons">
                            <FavoriteBorderOutlined style={{fontSize: '30px'}} />
                            <ChatBubbleOutline fontSize={'large'} style={{marginLeft: '15px', fontSize: '30px'}} />
                            <SendOutlined fontSize={'large'} style={{marginLeft: '15px', fontSize: '30px'}} />
                        </div>
                        <div id="comments">
                            <span>{item.user.username} <span>{item.legend}</span></span>
                            {item.comments.map(comment => (
                                <span>{comment.username} <span>{comment.comment}</span></span>
                            ))}
                        </div>
                        <div id="comments-me">
                            <input type="text" placeholder="Diga alguma coisa sobre isso..." />
                            <span>Comentar</span>
                        </div>
                    </Card>
                ))}
            </List>
        </>
    );
}

export default Feed;
