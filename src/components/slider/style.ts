import styled from 'styled-components';

export const StAll=styled.div`
display: flex;
flex-direction: column;
margin-top: 5%;
width: 100%;
.header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    h2{
        font-size:16px;
    }
}
.body{
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
a{
    margin-right: 4%;
}
}
`