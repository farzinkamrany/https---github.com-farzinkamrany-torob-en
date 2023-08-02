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
`