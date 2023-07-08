import styled from 'styled-components';

export const StAll=styled.div`
    width: 100%;
    display: flex;
    background-color: #f9fafb;
    height:48px;
    padding: 3% 1%;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: relative;
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