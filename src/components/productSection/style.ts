import styled from 'styled-components';

export const StAll=styled.div`
display: grid;
grid-area: 5 / 1 / 6 / 2;
background: #fff;
padding: 24px;
border-radius: 10px;
.title{
    display: flex;
    align-items:center ;
    width: 100%;
    margin-bottom: 24px;
    h2{
        font-size: 18px;
    }
    small{
        margin-left: 3%;
        color: #737373;
        font-size: 12px;
        white-space: nowrap;
    }
}
.qualities{
    display: flex;
    ul{
        margin: 0;
            list-style: none;
        li{
            line-height: 24px;
            font-size: 12px;
            display: flex;
                align-items: center;
            /* padding-inline-start: 20px; */
}

    }
    .weaknesses{
        margin-left: 15px;
    }
    .strengths span{
                color: #00528c;
                width: 1rem;

            }
           .weaknesses span{
                color: #f49342;
                width: 1rem;

            }
    .s-title{
        color: #4caf50;
    }
    .w-title{
        color: #f49342;
    }
}
    .continue{
        width: 100%;
        text-align: center;
        button{
            border: none;
            font-weight: bold;
            color: #d73948;
            box-shadow: none;
        }
    } 
    @media(max-width:768px){
        padding:0;
        width:95%;
        margin: 14% auto;
        .title,.qualities{
            flex-direction:column;
            /* background:#f2f3f5; */
            align-items:flex-start;
            margin-bottom:4px;

        .weaknesses{
            font-weight:bold;
            margin-top:15px;
            margin-left:0;
            li{
                font-size: 12px;
            font-weight:normal;
    line-height: 24px;
            }
        }
        }
        .qualities{
            padding: 12px;
        }
        .title{
            background: #f2f3f5;
    margin: 0 0 2% 0;
    height: 62px;
        }
    }
`