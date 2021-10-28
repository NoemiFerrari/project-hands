import styled from 'styled-components';

export const List = styled.section`
    width: 100%;
    height: auto;
    background: #fafafa;
    padding: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 130px;

    .round {
        border-radius: 100%;
        overflow: hidden;
        height: 80px;
        position: fixed;
        right: 80px;
        bottom: 50px;
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        width: 80px;
        background: #383ED1;

        svg {
            width: 100%;
        }
    }
`;

export const Card = styled.div`
    width: 700px;
    height: 800px;
    background-color: #FFF;
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    margin-bottom: 30px;

    header {
        width: 100%;
        height: 70px;
        display: flex;
        padding-left: 15px;
        /* justify-content: center; */
        align-items: center;

        img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
        }

        span {
           color: #262626;
           font-weight: bold;
           font-size: 14px;
           margin-left: 15px;
           font-family: var(--roboto);
        }
    }

    img {
        width: 100%;
        height: 500px;
    }

    #icons {
        width: 100%;
        padding: 15px;
        height: 50px;
        display: flex;

        svg {
            cursor: pointer;
        }
    }

    #comments {
        max-height: 110px;
        overflow-y: scroll;
        padding: 15px;
        display: flex;
        flex-direction: column;

        ::-webkit-scrollbar {
            width: 7px;
            cursor: pointer;
        }

        ::-webkit-scrollbar-thumb {
            background: #DFDFDF;
            cursor: pointer;
            border-radius: 3.5px;
        }

        span {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 7px;

            span {
                font-weight: normal;
            }
        }
    }

    #comments-me {
        height: 60px;
        border-top: 1px solid #dbdbdb;
        display: flex;
        align-items: center;

        span {
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
        }

        input {
            width: 580px;
            height: 60px;
            margin-left: 20px;
        }

        input:focus{
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        } 
    }
`;