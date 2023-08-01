import styled from 'styled-components';

export const StAll=styled.div`
    display: flex;
    background-color: #f9fafb;
    height:64px;
    flex-direction: column;
    /* padding: 1% 2%; */
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: relative;
    width: 100%;
    /* position: fixed; */
    /* top:0; */
    .ant-select{
        max-width: 480px;

    }
    @media (max-width:768px) {
        display: none;
    }
`


export const ListOfMenu=styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: flex-start;
    padding: 12px;
    width: 100%;
    background: #f9fafb;
    margin: 0;
    button{
        border: none;
        box-shadow: none;
    }
    li{
        font-size: 11px;
        margin: 0 8px;
        font-weight: bold;
        cursor: pointer;
    }


`