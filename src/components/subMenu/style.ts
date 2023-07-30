import styled from 'styled-components';

export const StAll=styled.div`
display: none;
width: 100%;
justify-content: space-between;
position: fixed;
bottom: 0;
.ant-btn{
    width: 25%;
    border: 0;
    border-radius: 0;
    height: 50px;
    font-size: 12px;
}
.ant-drawer-header{
    text-align:center;
}

@media (max-width:768px) {
display: flex;
}
`