import styled from 'styled-components';

export const StAll=styled.div`
display: grid;
grid-area: 4 / 1 / 5 / 2;
background: #fff;
padding: 8px;
border-radius: 10px;
.title{
    display: flex;
    align-items:center ;
    width: 100%;
    h2{
        font-size: 18px;
    }
    small{
        margin-left: 3%;
        font-size: 12px;
        white-space: nowrap;
    }
}
.qualities{
    display: flex;
    ul{
        margin: 0;
        padding-left: 20px;
        li{
            font-size: 12px;
            /* padding-inline-start: 20px; */
}
    }
    .s-title{
        color: #4caf50;
    }
    .w-title{
        color: #f49342;
    }
}
    .continue{
        width: 100%;
        text-align: center;
        button{
            border: none;
            font-weight: bold;
            color: #d73948;
        }
    }
`