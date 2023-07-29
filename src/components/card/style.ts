import { Card } from 'antd';
import styled from 'styled-components';

export const StAll=styled.div`

display: flex;
margin: 1% 0;
@media (max-width:768px){
    margin: 1% 1% 1% 0;
    width: 46%;
}
.ant-card-img{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    object-fit: contain;
    color: transparent;
}
`
export const StCard=styled(Card)`
width: 170px;
padding: 12px;
.div{
    display: flex;
}
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
    @media (max-width:768px) {
        /* width: 92%; */
    }
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
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
    .ant-card-body{
        padding: 2px!important;
    }
    .card-footer .ant-btn{
        padding: 0!important;
    }
    .ant-card-body::after{
        content:none;
    }
}
`