import styled from 'styled-components';

interface Props {
    position?: string;
}

export const Header = styled.div`
    width: 100%;
    height: 120px;
    background-color: #383ED1;
    padding-left: 18%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 10%;

    span {
        color: #FFF;
        font-weight: 600;
        margin-right: 25px;
        cursor: pointer;
    }

    img {
        width: 50px;
        cursor: pointer;
        height: 50px;
        margin-left: 30px;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 50px;
    flex-direction: row;
    height: 600px;
    align-items: center;
    justify-content: center;

    .accordion {
        width: 60%;
        display: flex;
        flex-direction: column;

        .title {
            color: #222a99;
            font-size: 60px;
            font-weight: bold;
            line-height: 36px;
            margin-bottom: 50px;
            font-family: Poppins;  
        }
    }

    button {
            width: 170px;
            height: 40px;
            margin-top: 30px;
            background-color: #222a99;
            color: #FFF;
            border-radius: 20px; 
            cursor: pointer;
            font-size: 14px;
            font-weight: bolder;
            letter-spacing: 0.6px;
            font-family: var(--roboto);
        }

    .image {
        img {
            width: 100%;
            height: 300px;
        }
        width: 40%;
        
    }
`;
