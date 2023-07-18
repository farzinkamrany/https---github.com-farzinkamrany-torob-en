import styled from 'styled-components';

export const StAll=styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #f9fafb;
    justify-content: space-between;
    /* position: fixed; */
    bottom: 0;
    @media(max-width:768px){
        position: relative;
    }

`
export const StList=styled.ul`

display: flex;
    align-items: center;
    list-style: none;
    li{
        margin:0 8px;
        font-size: 14px;
    }
`