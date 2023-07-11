import styled from 'styled-components';

export const StAll=styled.div`
    display: flex;
    background: #fff;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

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
        justify-content: center;
        border-radius: 16px;
        font-size: 12px;
    line-height: 28px;
    height: 28px;
    color: #999;
    svg{
        margin-left:5px;
    }
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
.all-sellers{
    button{
        width: 100%;
        background: linear-gradient(180deg,#f04151,#d73948);
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
    }
`