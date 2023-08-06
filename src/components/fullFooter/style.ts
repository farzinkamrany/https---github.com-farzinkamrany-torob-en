'use client'
import styled from "styled-components";

export const StAll=styled.div`
display: flex;
    flex-direction: column;
    border-top:1px solid #ddd;
    margin-top:8px;
.large,.small{
    display: flex;
    width:100%;
    justify-content:space-between;
}
    .spans{
        width: 25%;
    justify-content: space-between;
    display:flex;
    }
    .uls{
        display:flex;
        flex-direction:column;
        margin:0 2%;
        span{
            white-space:nowrap;
        }
    }
.large{
    border-bottom:1px solid #ddd;
    display: flex;
    justify-content: space-between;
    width:100%;
    padding:10px;
    .links{
        display: flex;
        width:40%;
    }
    .signs{

        display: flex;
        width:40%;
    }
}
    .small{
        width: 95%;
    padding:1px;
    .ul-down{
        display:flex;
        width:30%;
        justify-content:space-between;
        align-items: center;
        padding: 36px 5px;
        .ant-row{
            
    flex-flow: row nowrap;
        }
        span{
            display:flex;
            margin:14%;
            svg{
                font-size:22px;
                fill:rgb(128, 128, 128);
            }
        }
        img{
            width:160px;
            height:48px;
        }
    }
    }
@media(max-width:768px){
    .large,.small{
        flex-direction:column;
        span{
            margin:4% auto;
        }
    }
       .small .ul-down{
            flex-direction:column;
            width:100%;
            margin:4% auto;
            justify-content:center;
        }
    .spans{
        width:100%;
        flex-direction:column;
    }
    .uls{
        margin:5% auto;
    }
}


`
