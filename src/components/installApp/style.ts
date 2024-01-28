import styled from 'styled-components';

export const StAll=styled.div`
display: none;
justify-content: space-between;
align-items: center;
width: 100%;
height: 56px;
position: fixed;
bottom: 54px;
padding: 14px;
box-shadow: 0 0 1px 0#eceef0;
background-color: #fff;
border: 1px solid #ddd;
.img {
    display: flex;
    align-items: center;
    white-space: nowrap;
    img{
    width: 48px;
    height: 48px;
    margin: 0 2%;
}}
.ant-btn{
    border: none;
    background-color: transparent;
}
@media (max-width:768px) {
display: flex;

}
`
