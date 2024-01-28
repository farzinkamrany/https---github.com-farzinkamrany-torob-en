import styled from 'styled-components';

export const StAll=styled.div`
display: flex;
flex-direction:column;
justify-content:flex-start;
.wrapper{
display: flex;
justify-content:space-between;
width: 100%;
img{
    width: 118px;
    height:118px;
}
}
.answers{
display: flex;
flex-direction:column;
justify-content:flex-start;

}

`
export const StNextPhase=styled.div`

display: flex;
flex-direction:column;
justify-content:flex-start;
textarea{
    resize:none;
}
`