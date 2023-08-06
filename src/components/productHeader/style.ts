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
    border-bottom: 1px solid#ecedef;
    .back{
        width:18px;
        height:18px;
    }
    h2{
        font-size: 14px;
    line-height: 48px;
    margin: 0 auto 0 auto;
    font-weight: normal;
    max-width: 100%;
    -webkit-padding-end: 2px;
    -moz-padding-end: 2px;
    padding-inline-end: 2px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    color:#333;
    padding: 0 10px;
    -webkit-box-orient: vertical;

    }
    svg{
        font-size:24px;
        margin:0 6px;
    }
    @media(max-width:768px){
        display: flex;
        /* padding: 10px; */
    }
    .btns{
       display:flex;
    }
`