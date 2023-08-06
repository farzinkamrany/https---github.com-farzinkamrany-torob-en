import styled from 'styled-components';

export const StAll=styled.div`
    display: flex;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    a{
        text-decoration: none;
        color: #000;
    }
    .detailss{
        display: flex;
    width: 100%;
    }
    .update-details{
        width:100%;
    }
    .list-of-cards{
            width: 100%;
            padding: 4px 0;
            @media (max-width:768px) {
                
            }
            :hover{
                background: #f7f8fa;
    cursor: default;
            }
        .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            border-bottom: 1px solid#dfe3e8;
            padding: 0 16px 24px 24px;
            :last-child{
                border-bottom: 0;
            }
        .card-location{
            display: flex;
            flex-direction: column;
            width: 100px;
            b{
                white-space: nowrap;
                font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
    -webkit-margin-end: 16px;
    -moz-margin-end: 16px;
    margin-inline-end: 16px;
    line-height: 28px;
    display: inline-block;
            }
        }
        .delivery{
            display: flex;
            flex-direction: column;
            margin-right: 0%;
    @media (max-width:768px){
            margin-left: 0%;
            width: 100%;
    }
        }
        .garranty{

                .info{

                    display: flex;
                        :hover{
                            background: initial;
                        }
                }
                .info-container{
                    display: flex;
                    flex-direction: column;
                        :hover{
                            background: initial;
                        }
                    div{
                        :hover{
                            background: initial;
                        }
                    }
                    span{
                        /* width:60%; */
                        display: flex;
                        p{
                            /* min-width: 60px; */
                            min-width: 130px;
                            display: flex;
                            justify-content: center;
                            /* :hover{ */
                                border:1px solid #4a90e2;
                            /* } */
                        }
                    }
                }
                display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width:768px) {
        justify-content: space-between;
    align-items: center;
    width: 100%;
    }

    .report{
        background: #f2f3f5;
        color: #fff;
        padding: 2px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        font-size: 12px;
    line-height: 28px;
    height: 28px;
    color: #000;
    margin-left: 8px;
    svg{
        margin-left:5px;
    }
    }
    
    span p,.moreInfo{
        padding: 4px 8px;
    border-radius: 20px;
    background: #ecedef;
    border-color: #ecedef;
    color: #000;
    div{
        margin:4px 0;
        font-size:12px;
        :hover,p:hover{
        background: inherit;
    }}
    }
    a{
        color: #000;
        /* text-decoration: none; */
    }
            }
            .update-details{
                p,span{
                    font-size: 12px;
                }
            }
            .shopping{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-end;
                width: 50%;
                b{
                    color: #3468cc;
                }
                button{
                }
                a{
                    text-align: right;
                    span{
                        white-space: nowrap;
                        @media (max-width:768px) {
                            white-space: normal;
                        }
                    }
                }
                p{
                    font-size: 14px;
                    text-align: right;
                }
                    span{
                        background-color: transparent;
                    }
        button{
    align-self: center;
    height: 40px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    background: linear-gradient(180deg,#3a75e6,#3468cc);
    text-align: center;
    line-height: 32px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    margin-top: 12px;
    padding: 4px 16px;
    span{
    color: #fff;
    }
    

        }
            .update-details-mobile{
                display: none;
            }
        .update-details{
            font-size: 12px;
    margin-top: 12px;
    color: #808080;
    line-height: 20px;
    text-align: start;
    @media (max-width:768px) {
        white-space: normal;
    }

        }
            }
            
            @media(max-width:768px) {
                /* width: 84%; */
                flex-direction: column;
    .sellers .mobileBtn{
        display:block;
    }
    .sending{
        display:none;
    }
                .shopping{
                    margin-top:8px;
                    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
                    button{
                    margin-top:0;
                        span{
                            white-space: nowrap;
                        }
                    }
    a{
            text-align: left;
        }
        p{
            font-size: 12px;
            text-align: left;
        }
    .update-details{
        display:none;
    }
    .update-details-mobile{
        display: flex;
        color:#808080;
    }
    /* b{
                color: #d73948;
            } */
                }
                .card-location{
                    width: 100%;
    align-items: center;
                    flex-direction:row;
                    .div{
                        flex-direction: column;
                        /* width: 100%; */
    /* justify-content: space-between; */
                    }
                    small{
                        margin-left:3%;
                    }
                }
            }

        }
    }
    .div{
        display:flex;
                    align-items: flex-start;
                    width: 100%;
                    .delivery{
                        margin-left:3%;
                    }
                    @media (max-width:768px) {
                        flex-direction: column;
                        
                    }
    }
.all-sellers{
    width:100%;
.mobileBtn{
    display:none;
}
    button{
        width: 100%;
        background: linear-gradient(180deg,#3a75e6,#3468cc);
        color:#fff;
        padding: 5px;
    width: 100%;
    height: 48px;
    color: white;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    line-height: 48px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    }
}
    @media (max-width:768px) {
        .detailss{
            display:block;

        }
        .list-of-cards{
             .card{
            padding: 10px;
            .info-container{
                span{
                    /* padding: 8px 2px; */
                }
            }
        }}
        .garranty{
            width:100%;
            .info{
                width:100%;
            }
        }
               .all-sellers .pcBtn{
                    display:none;
                }
        .update-details{
            margin-top: 8px;
        }
        grid-area: 3 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`