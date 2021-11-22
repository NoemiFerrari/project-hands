import styled from 'styled-components';

export const Bar = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dbdbdb;

    div {
        width: 800px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            width: 130px;
            height: 30px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            color: #000;
            margin-top: 20px;
            border: 1px solid #dbdbdb;
        }

        .photo {
            width: 25%;

            img {
                width: 120px;
                height: 120px;
                border-radius: 50%;
            }
        }

        .data {
            width: 75%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            span {
                font-family: 'Roboto';
                font-size: 24px;
            }

            div {
                width: 100%;
                height: 15px;
                display: flex;
                margin-top: 20px;
                justify-content: start;

                span {
                    width: auto;
                    font-family: 'Roboto';
                    font-size: 16px;
                    color: #000000;
                    margin-right: 60px;

                    span {
                        font-weight: 600;
                        font-size: 16px;
                        color: #000000;
                        margin-right: 0px;
                    }
                }
            }
            
        }
    }
`;

export const Tab = styled.div`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-bottom: 30px; */
    color: rgb(38, 38, 38);

    svg {
        color: rgb(38, 38, 38);
        margin-right: 10px;
    }
`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    justify-content: space-evenly;
    padding-left: 15%;
    padding-right: 15%;
    grid-template-columns: 290px 290px 290px;
   

    div {
        height: 290px;
        margin-bottom: 20px;
        /* background-color: rebeccapurple; */

        img {
            width: 290px;
            height: 290px;
        }

    }
`;