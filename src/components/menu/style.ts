import styled from 'styled-components';

export const StAll=styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 8px;
    width: 15%;
    padding-top: 3%;
    @media (max-width:768px){
            display: none;
    }
`

export const ListOfMenu=styled.div`
    min-height: 100%;
    width: 30%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`