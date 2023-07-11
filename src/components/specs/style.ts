import styled from 'styled-components';

export const StAll=styled.div`
display: grid;
grid-area: 5 / 1 / 6 / 2; 
background-color: #fff;
padding: 8px;
border-radius:4px;
height: 260px;
    overflow-y: scroll;
.specs{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    
    .row-specs{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
        b,p{
            font-size: 14px;
        }
    }
}

`