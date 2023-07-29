import styled from 'styled-components';

export const StAll=styled.div`
display: flex;
position: relative;
/* position: fixed; */
/* top: 110px; */
width: 384px;
height:40%;
overflow-y:scroll;
position: sticky;
    top: 0;
z-index: 0;
.ant-menu-title-content{
    display: flex;
    width: 100%;
    justify-content:space-between;
    align-items:center;
}
.ant-btn{
    color: #0000;
    border:1px solid #ddd;
    border-left:0;
    svg{
        :hover{
            background: transparent;
        }
        color: #000;
        
    }
    color: #000;
}
.ant-menu{
    
    background: #fff !important;
    
li:hover,ul:hover{
        background: transparent !important;
    }

}
.ant-menu-root{
    .ant-menu-item-selected{
        padding-left:0;
    }
    li:nth-child(2) ul li{
    height: 150px;
    padding-top:50%;
    padding-left: 2px !important;
    /* background: #000; */
    .ant-row{
        flex-wrap:nowrap;
        justify-content:space-between;
    }
    
.ant-input{
    width: 50%;
    height: 40px;
    padding: 8px;
}
}}

.ant-menu-submenu{
    border-bottom: 1px solid #e6e6e6;
    border-radius: 0;
    padding: 10px;
.ant-menu-submenu-title{
    font-weight:bold;
    border-bottom:1px dolid #999;
    :hover{
    background: transparent;
    /* display: none; */
}}}
@media (max-width:768px){
    display: none;
}
`