import styled from 'styled-components';

export const StAll=styled.div`
    display: flex;
    background: #fff;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    .list-of-cards{
            width: 100%;
        .card{
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
        .card-location{
            display: flex;
            flex-direction: column;
            
        }
        .delivery{
            display: flex;
            flex-direction: column;
        }
            .garranty{
                display: flex;
    justify-content: flex-start;
    align-items: center;
    .report{
        background: #f2f3f5;
        color: #fff;
        padding: 5px;
        display: flex;
        align-items: center;
        border-radius: 12px;
        font-size: 12px;
    line-height: 28px;
    -webkit-margin-end: 8px;
    -moz-margin-end: 8px;
    margin-inline-end: 8px;
    color: #999;
    }
    span{
        
    border-radius: 20px;
    padding: 1%;
    background: #daf2d5;
    border-color: #daf2d5;
    }
    a{
        color: #000;
        text-decoration: none;
    }
            }
            .shopping{
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                width: 20%;
                a{
                    text-align: right;
                }
                p{
                    font-size: 14px;
                }
        button{
    align-self: center;
    height: 40px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    background: linear-gradient(180deg,#f04151,#d73948);
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
    text-align: end;
        }
            }
        }

    }
`