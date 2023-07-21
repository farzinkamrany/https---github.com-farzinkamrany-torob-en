import { Card } from 'antd';
import styled from 'styled-components';

export const StAll=styled.div`

display: flex;
margin: 1% 0;
@media (max-width:768px){
    margin: 1% 4% 1% 0;
}
img{

}
`
export const StCard=styled(Card)`
width: 180px;
padding: 12px;
.ant-card-body{
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding: 0 10px!important;

}
.card-footer{
    .shops{
    display: flex;
    align-items:center;
        font-size: 12px;
    white-space: nowrap;
    }
    .ant-btn{
        padding: 4px 7px !important;
        border:none;
    }
}
h3{
    overflow: hidden;
    position: relative;
    margin: 12px auto;
    line-height: 24px;
    color: #333;
    font-size: 14px;
    height: 72px;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.card-footer{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.action-items{
    display: flex;
}
@media (max-width:768px){
    padding: 12px;
    /* width:100% !important; */
    width: 180px;
    /* height:416px; */
    height: auto;
    img{
        height: 176px;
    }
    .ant-card-body{
        padding: 0 0px!important;
    }
    .ant-card-body::after{
        content:none;
    }
}
`