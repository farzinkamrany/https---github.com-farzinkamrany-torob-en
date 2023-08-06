import styled from 'styled-components'

export const StAll=styled.div`

.mobile-app{
    display: grid;
    grid-area: 2/1/3/1;
    display: none;
    background: #fff;
        align-items:center;
    padding: 20px 0 20px 20px;
    .logo{
        width: 140px;
    }
    .installer{
        min-height:140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .question{
            font-size:18px;
        }
        .btns{
            display: flex;
    flex-direction: column;
    width: 80%;
        }
        .btns{
            display: flex;
    flex-direction: column;
    width: 100%;
        }
        .no{
            margin-top: 8px;
            margin-top: 8px;
    background: white;
    color: #d73948;
    border: 1px solid #d73948;
            width: 40%;
        }
        img{
            width:100px;
            height:100px;
        }
    }
    @media (max-width:768px) {
        display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    }
}
`