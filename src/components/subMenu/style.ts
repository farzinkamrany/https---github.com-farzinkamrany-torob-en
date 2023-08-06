import styled from 'styled-components';

export const StAll=styled.div`
display: none;
width: 100%;
justify-content: space-between;
position: fixed;
bottom: 0;
border-top: 1px solid#ecedef;
.ant-btn{
    width: 25%;
    border: 0;
    border-radius: 0;
    height: 50px;
    font-size: 12px;
    color:#808080;
}
.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#808080;
    svg{
        font-size:20px;
    }
}
.ant-drawer-header{
    text-align:center;
}

@media (max-width:768px) {
display: flex;
}
`