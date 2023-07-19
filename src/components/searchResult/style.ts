import styled from 'styled-components';

export const StAll=styled.div`
    width: 100%;
    float: right;
    position: relative;
margin-left: 4%;
width: 85%;
    margin-top: 4%;
.ant-dropdown-trigger{
    background-color: #ddd;
    padding: 2px 5px;
    border-radius: 10px;
}
`

export const StCardContainer=styled.div`
display: flex;
flex-wrap: wrap;
margin: 2px;
width: 91%;

.ant-card{
    margin: 3px;
}
@media(max-width:768px){
    width:100%;
    justify-content:stretch;
    
.ant-card{
    margin: 8px;
}
}
`