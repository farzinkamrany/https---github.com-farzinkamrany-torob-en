import styled from 'styled-components';

export const StAll=styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    justify-content: space-between;
    .searchBox{
        display: flex;
    }
    @media (max-width:768px) {
        background-color: #fff;
        .homeNavbar{
            display: none;
        }
        .searchBox{
            img{
                width: 100%;
            }
            .ant-select{
                width: 80%;
            }
        }
    }
`