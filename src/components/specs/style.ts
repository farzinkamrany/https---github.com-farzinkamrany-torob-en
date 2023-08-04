import styled from 'styled-components';

export const StAll=styled.div`
/* display: grid; */
/* grid-area: 1 / 2 / 4 / 3;  */
display: flex;

    flex-direction: column;
    justify-content: space-between;
background-color: #fff;
padding: 8px;
border-radius:4px;
height: 100%;
/* height: 260px; */

    overflow-y: scroll;
    .detailed{
        margin:4%;
    }
.specs{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    margin-top: 12px;
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
        b{
            margin-bottom:4px;
        }
        p{
            color: #808080;
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
.ant-btn{
    display: none;
}
    @media(max-width:768px){
        display: flex;
        flex-direction: column;
        width: 95%;
    margin: auto;
        overflow: auto;
.ant-btn{
    display: flex;
}
.detailed{
    height: 160px;
}
        .mobile{
            display: flex;
        }
    }
`