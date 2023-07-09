import styled from 'styled-components';

export const StAll=styled.div`
    display: flex;
    background-color: #f9fafb;
    height:48px;
    padding: 1% 2%;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: relative;
    width: 100%;
    /* position: fixed; */
    /* top:0; */
`


export const ListOfMenu=styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    li{
        font-size: 14px;
        margin: 0 8px;
        cursor: pointer;
    }


`