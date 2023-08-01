import styled from 'styled-components';

export const StAll=styled.div`
    display: flex;
    width: 98%;
    justify-content: space-between;
    align-items: center;
    padding:  5px;
    height: 48px;
    margin-top: 10px;
img{
    width: 40px;
    height: 40px;
}
.signup{
    height: 48px;
    color: #000;
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
        display:flex;
        margin-right:5%;
        align-items:center;
        img{
        margin-right:5%;

        }
    }
    }
    
    @media (max-width:768px) {
        /* display: none; */
        background: #fff;
        flex-direction:column;
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