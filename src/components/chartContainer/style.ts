import styled from 'styled-components';

export const StAll=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    height: 100%;
    padding: 24px;
    margin-bottom: 70px;
    
    line{
        display:none;
    }
    .chart{
        width: 365px;
        height: 165px;
        border: 1px solid #000;
        margin: 8px;
    }
    .more{
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }
    
    @media(max-width:768px){
        
    margin-bottom: 20px;
    .chart-container{
        padding: 15%;
    }
        h2{
            width: 100%;
    font-size: 16px;
    background: #f2f3f5;
    padding: 5%;
    text-align: left;
        }
        .recharts-default-legend{
            width:80px;
            display:flex;
        }
        padding:0;
        .chart .recharts-legend-wrapper .recharts-surface{
            width:auto!important;
        }
        .more{
            display:none;
        }
        .chart{
            width:92%;
        .recharts-surface,.recharts-wrapper{
            width:250px !important;
        }
        .recharts-legend-wrapper .recharts-surface{
            width:50px !important;
        }
        }
    }
`