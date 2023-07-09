import { Card } from 'antd';
import styled from 'styled-components';

export const StCard=styled(Card)`
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
`