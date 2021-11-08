import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;

    .container-image {
        width: 100%;    
        box-sizing: border-box;
        height: 500px;
        background-image: url("https://images.pexels.com/photos/5318961/pexels-photo-5318961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }

    .container-text {
        width: 100%;
        height: 400px;
        background-color: #FFF;
        display: flex;
        align-items: center;
        text-align: justify;
        justify-content: center;

        span {
            font-weight: bold;
            font-size: 42px;
            margin-left: -5px;
            font-family: Roboto;
        }

        div {
            width: 40%;
            height: inherit;
            padding: 50px;
            font-size: 18px;
            line-height: 28px;
            font-family: Roboto;
        }
    }

    .container-company {
        width: 100%;
        height: 400px;
        background-color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            height: inherit;
            font-size: 18px;
            line-height: 28px;
            font-family: Roboto;
            font-size: 18px;
            line-height: 28px;
            font-family: Roboto;

            img {
                width: 100%;
                height: inherit;
            }
        }
    }

`;