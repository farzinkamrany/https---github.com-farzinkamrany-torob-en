import styled from 'styled-components';

export const StAll=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 400px;
background: transparent;
margin: 8px;
    button{
        
    background: transparent;
    box-shadow: none;
    }
.showBtn{
    display: flex;
    align-items: center;
border:none;
padding: 4px 0;

svg{
    margin-left: 3%;
}
}
.send-details{
    display: flex;
flex-direction: column;
.features{
display: flex;
width: 100%;
    flex-wrap: wrap;
    .tags{
        padding: 0px 4px;
    font-size: 10px;
    line-height: 20px;
        display: flex;
        white-space: nowrap;
        flex-wrap: wrap;
    border: 1px solid rgb(205, 205, 205);
}
}
}
`