import styled from 'styled-components';

export const StAll=styled.div`
    width: 100%;
    float: right;
    position: relative;
margin-top: 4%;
display: flex;
justify-content:space-between;
/* width: 80%; */
    /* margin-top: 4%; */
.ant-dropdown-trigger{
    background-color: transparent;
    padding: 2px 5px;
    border-radius: 10px;
    width:80px;
    span{
        display: flex;
        justify-content:space-between;
    color: #000;
    align-items: center;
    background: transparent;
    font-size:14px;
    font-weight:bold;
    }
}
.ant-col{
    width:76%;
    padding:10px;
}
@media (max-width:768px){
margin-top: 0;
    width: 100%;
    flex-direction: column;
    h2{
        display:none;
    }
    hr{
        display: none;
    }
}
`

export const StCardContainer=styled.div`
display: flex;
flex-wrap: wrap;
margin: 2px;
/* width: 91%; */
.ant-card{
    margin: 3px;
    padding: 3px;
    img{
        height: 181px;
        width: 148px;
    }
    .ant-btn{
        border: 0;
        height: 16px;
        width: 16px;
    }
    svg{
        height: 16px;
        width: 16px;
        /* margin: 0 4px; */
        z-index:10;
    }
}
@media(max-width:768px){
    width:100%;
    justify-content:stretch;
    
.ant-card{
    width: auto;
    margin: 2px;
    img{
        height: 176px;
        width: 157px;
    }
}
}
`


export const StHeader=styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    align-items:center;
@media(max-width:768px){
    display: none;
}

`
export const StMobileHeader=styled.div`
display:none;
justify-content:space-between;
width:100%;
align-items:center;
flex-direction:column;
/* padding-top:5%; */
.tags{
    display: flex;
justify-content:space-between;
width:100%;
align-items:center;
overflow-x:scroll;
flex-wrap:nowrap;
overflow-x:scroll;

.ant-btn{
    margin: 0 3%;
}
h3{
    font-weight:normal;
    font-size:14px;
    white-space:nowrap;
}
}
.shoppers{
    display: flex;
width:100%;
align-items:center;
justify-content:flex-start;
flex-wrap:nowrap;
overflow-x:scroll;
.ant-btn{
    background: transparent;
    border: 0;
}
}
.dropdownFilter{
    
    display: flex;
width:100%;
align-items:center;
justify-content:flex-start;
background: #fff;
li{
    list-style:none;
    padding: 6px;
    margin: 0 3%;
}
.ant-btn{
    background: transparent;
    border: 0;
}
}
@media(max-width:768px){
    display: flex;
    .tags,.dropdownFilter{
        padding: 12px;
    }
}
`

