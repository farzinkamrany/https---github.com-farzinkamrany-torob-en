import styled from 'styled-components';

export const StAll=styled.div`
display: grid;
    grid-template-rows: auto auto;
    grid-gap: 12px 12px;
    .topRow{
        display: grid;
    grid-template-columns: 50%50%;
    grid-gap: 12px;
    img{
        height: 289px;
        width: 154px;
        border-radius: 12px;
    }
    }
    .bottomRow{
        display: grid;
    grid-template-columns: 31%31%31%;
    grid-gap: 12px 12px;
    img{
        height: 90px;
        border-radius: 12px;
        width: 99px;
    }
    }
`