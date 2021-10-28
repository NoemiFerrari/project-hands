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

    img {
        width: 50px;
        height: 50px;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 600px;

    .slider {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 200px;
        
        div {
            width: 250px;
            height: 220px;
            color: #222a99;
            /* border: 1px solid black; */

            span {
                font-size: 30px;
                font-weight: bold;
                line-height: 36px;
                font-family: Poppins;
            }

            p {
                font-size: 16px;
                margin-top: 20px;
                line-height: 18px;
                font-weight: bold;
                font-family: Poppins;
                letter-spacing: 0.5px;
                color: #222a99;

                span {
                    font-size: 16px;
                    color: #ECBA59;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    /* justify-content: center; */

                    img {
                        width: 20px;
                        height: 20px;
                        margin-left: 10px;
                    }
                }
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
            font-size: 12px;
            font-weight: bolder;
            letter-spacing: 0.6px;
            font-family: var(--roboto);
        }
    }

    .back-img {
        width: 60%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 700px;
            height: 400px;
        }
    }
`;


export const Bar = styled.div<Props>`
    width: 20% !important;
    background-color: #222a99;
    height: 5px !important;
    margin-top: 30px;
    margin-left: ${(props) => props.position};
`;

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    opacity: 0.5px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    #modal {
        width: 400px;
        background-color: #FFF;
        height: 380px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        align-items: center;

        img {
            width: 18px;
            height: 18px;
            cursor: pointer;
        }
    }
`;