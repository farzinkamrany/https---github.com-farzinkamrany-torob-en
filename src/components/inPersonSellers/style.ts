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
            b{
                white-space: nowrap;
            }
        }
        .delivery{
            display: flex;
            flex-direction: column;
            margin-left: 11%;
    @media (max-width:768px){
            margin-left: 2%;
            width: 100%;
    }
        }
            .garranty{
                display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 20px;
    margin-bottom: 7%;
    
    @media (max-width:768px) {
    margin: 5% 0;
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
    span{
        
    border-radius: 20px;
    padding: 1%;
    background: #daf2d5;
    border-color: #daf2d5;
    color: #0b5124;
    }
    a{
        color: #000;
        text-decoration: none;
    }
    @media (max-width:768px){
        width: 100%;
                justify-content: space-between;
        
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
                .shopping{
                    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    
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
                        width: 100%;
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
        grid-area: 3 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`