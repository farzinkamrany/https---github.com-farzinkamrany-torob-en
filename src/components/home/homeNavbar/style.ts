import styled from 'styled-components';

export const StComps=styled.div`
@media (max-width:768px) {
    display: none;
}
`
export const StAll=styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    top:0;
z-index: 10000;
    left: 0;
    justify-content: space-between;
    align-items: center;
    padding:  5px;
    background-color: #f9fafb;
    padding: 0 40px;
    .ant-btn{
        /* max-width: 130px; */
        padding: 0;
        background-color: transparent;
    }
img{
    width: 40px;
    height: 40px;
}
.ant-select-selector{
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    border-top: 1px solid #c4cdd5;
    border-bottom: 1px solid #c4cdd5;
}
    .icon-searchs{
        display: flex;
        align-items: center;
        
    a{
        margin-right:2%;
    }
    }
    
    @media (max-width:768px) {
        /* display: none; */
        flex-direction:column;
        margin-top:12px;
        .icon-searchs{
            flex-direction:column;
            a{
                display: none;
            }
        }
        .ant-button{
            display: none;
        }
    }
`