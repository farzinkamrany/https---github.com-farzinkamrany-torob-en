import styled from 'styled-components';

export const StAll=styled.div`
    display:none;
    width: 100%;
    @media(max-width:768px){
        display: flex;
        justify-content:center;
        position: fixed;
        top:0;
        background: #fff;
        padding:8px;
        z-index:12;
    }
`