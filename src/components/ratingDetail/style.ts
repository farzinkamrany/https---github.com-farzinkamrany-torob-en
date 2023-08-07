import styled from "styled-components";

export const StAll=styled.div`
width:100%;
    .moreInfo{
        .ant-btn{
            color:#4a90e2;
            border:1px solid #4a90e2;
            background-color: transparent;
        }
    }
    .report span{
        padding:1px;
    }
    .info-container{ 
        
        span{
        /* width: 100%; */
    justify-content: flex-start;
    }
    }
    @media (max-width:768px) {
        .info-container{
            
    width: 100%;

        }
    }
`