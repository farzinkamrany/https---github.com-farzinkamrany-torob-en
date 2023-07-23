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
   ~ :nth-child(3){
    display: none;
    }
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
.mobile{
    display: none;
    width:100%;
    display: flex;
    justify-content: center;
    background-color: transparent;
    box-shadow: none;
    color: #d73948;
    border: 0;
}
    @media(max-width:768px){
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: auto;
.detailed{
    height: 160px;
    overflow: scroll;
}
        .mobile{
            display: flex;
        }
    }
`