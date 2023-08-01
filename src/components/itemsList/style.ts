import styled from 'styled-components';

export const StAll=styled.div`
width: 96%;
margin-top: 10px;
    background-color: #f9fafb;
    border-radius:12px;
    p{
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
    width: 100%;
    }
h4{
    padding: 9px;
    text-align: left;
    border-bottom: 1px solid #333;
}
.dropitems{
    page-break-inside: avoid;
    break-inside: avoid;
    z-index: 12;
    background-color: #f9fafb;
    right: 40px;
    left: 40px;
    padding: 11px;
    /* margin-top: 12px; */
    border-radius: 12px;
    /* position: absolute; */
    width: 12%;
}
li{
    list-style:none;
    margin:5px;
    margin-left: 12px;
}
    h4{
        font-size: 14px;
    }
`