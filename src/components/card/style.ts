import { Card } from 'antd';
import styled from 'styled-components';

export const StCard=styled(Card)`
width: 140px;
.ant-card-body{
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding: 0 10px!important;
    height:170px;

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
    width: 160px;
    height:416px;
    img{
        height: 176px;
    }
}
`