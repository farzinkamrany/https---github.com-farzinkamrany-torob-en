import styled from 'styled-components';

export const StAll=styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
background: #f2f3f5;
.details{
    display: grid;
    max-width: 1280px;
    margin: 2% auto;
    grid-template-columns: 840px 416px;
    gap: 24px;
    
}
.product-overview{
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
    background: #fff;
    grid-template-columns: 352px auto;
    border-radius: 4px;
    padding: 24px;
    img{
        width: 352px;
    }
}
h2{
text-align: center;
}
.price-details{
    h1{
        font-size: 16px;
    }
    span{
        padding: 5px;
        border-radius:8px ;
        border: 2px solid #333;
        text-decoration: none;
    }
}

.price-and-action{
    width: 80%;
    padding-top: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.actions{
    display: flex;
    width: 85%;
    align-items: center;
    padding: 2%;
    justify-content: space-between;
    div{
        display: flex;
    svg{
        font-size: 20px;
        fill:rgb(153, 153, 153);
        width: 24px;
    height: 24px;
    margin-inline-end: 24px;
    }
    }
    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f2f3f5;
        border-radius: 14px;
        border: none;
        height: 28px;
        svg{
            margin-inline-end: 5px;
        }
    }
    
}
.price-help{
    b{
        
        padding: 5px 0;
        border-radius:12px;
        :hover{
        background: #ddd;
    }
    }
    
}
.price-tags{
    display: flex;
    padding-top: 16px;
    span{
        margin: 1%;
        height: 50px;
    }
}
.seller{
    margin-top: 16px;
    .red{
        width: 80%;
        display: flex;
        line-height: 30px;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(180deg,#f04151,#d73948);
        color: #fff;
        border-radius: 8px;
        padding: 8px 24px 8px 16px;
        max-width: 500px;
        span{
            border-radius: 12px;
            border: none;    
            background-color: #cc3644;
            color: #fff;
        }
    }
}
.sellers{
    min-height: 180px;
    background-color: #fff;
    padding:5px 12px;
    border-radius: 4px;
    display: grid;
    grid-area: 2 / 1 / 3 / 2;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 2px;
        margin: 10px 0;
        h3{
            margin: 0;
        }
        a{
            text-decoration: none;
            color: #d73948;
        }
    }
.cards{
display: flex;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card,.active-card{
    background: white;
    display: flex;
    flex-direction: column;
    padding: 4px 12px;
    margin-inline-start: 8px;
    border-radius: 16px;
    cursor: pointer;
    min-height: 52px;
    border: 2px solid transparent;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    user-select: none;
    border:1px solid #ddd;
    p{
        font-size: 12px;
    }
    }
.active-card{
    border: 2px solid #000;
        }
}
}
.in-person{
    display: grid;
    grid-area: 3 / 1 / 4 / 2;
    border-radius: 10px;
    width: 100%;
}

.chart-items{
    display: grid;
    grid-area: 1 / 2 / 2 / 3;
}
.similars{
    display: grid;
    grid-area: 4 / 1 / 5 / 3;
}
.product-section{
    display: grid;
    grid-area: 4 / 1 / 5 / 2;
}
`