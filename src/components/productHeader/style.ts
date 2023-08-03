import styled from 'styled-components';

export const StAll=styled.div`
    display: none;
    width: 100%;
    justify-content:space-between;
    align-items:center;
    position: fixed;
    z-index:10;
    background: #fff;
    top:0;
    h2{
        font-size:14px;
        text-align:center;
    }
    svg{
        font-size:20px;
        margin:0 8px;
    }
    @media(max-width:768px){
        display: flex;
        padding: 10px;
    }
`