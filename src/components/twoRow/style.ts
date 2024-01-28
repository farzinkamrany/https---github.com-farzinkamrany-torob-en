import styled from 'styled-components';

export const StAll=styled.div`
display: grid;
    grid-template-rows: auto auto;
    grid-gap: 12px 12px;
    margin:4% 0;
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
    .threeBase{
        display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 5px;
grid-row-gap: 3px;

            :nth-child(1){
            grid-area: 1 / 1 / 3 / 2; 
            height: 360px;
        }
        :nth-child(2){
            grid-area: 1 / 2 / 2 / 3;
        border-radius: 12px;
        }
        :nth-child(3){
            grid-area: 2 / 2 / 3 / 3;
        border-radius: 12px;
        }
    
        img{
            margin:2%;
        border-radius: 12px;
    }
    }
    .fourRow{
        display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 10px;
    grid-row-gap: 6px;
    height:360px;

:nth-child(1){
    grid-area: 1 / 1 / 2 / 4;
            height:275px;
            width:314px;
        }
        :nth-child(2){
            grid-area: 2 / 1 / 3 / 2; 
            height:89px;
            width:97px;
        }
        :nth-child(3){
            grid-area: 2 / 2 / 3 / 3;
            height:89px;
            width:97px;
        }
        :nth-child(4){
            grid-area: 2 / 3 / 3 / 4;
            height:89px;
            width:97px;
        }
        
        img{
            margin:2%;
        border-radius: 12px;
    }
    }
    .oneRow{
        width:100%;
        img{
            width: 100%;
    height: 100%;
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