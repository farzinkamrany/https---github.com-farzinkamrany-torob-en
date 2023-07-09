import styled from 'styled-components';

export const StAll=styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
background: #f2f3f5;
.product-overview{
    margin:1%;
    display: grid;
    background: #fff;
    padding: 12px;
    border-radius: 10px;
    grid-template-columns: 352px auto;
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
width: 550px;
    span{
        padding: 5px;
        border-radius:8px ;
        border: 2px solid #000;
        text-decoration: none;
    }
}
.actions{
    display: flex;
    width: 50%;
    align-items: center;
    padding: 2%;
    justify-content: space-between;
    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f2f3f5;
        border-radius: 14px;
        border: none;
        height: 28px;
    }
    svg{
        font-size: 20px;
    }
}
.price-help{
        margin-top: 2%;
    b:hover{
        background: #ddd;
        padding: 5px 0;
        border-radius:12px ;
    }
}
.price-tags{
    display: flex;
    span{
        margin: 1%;
        height: 50px;
    }
}
.details{
    max-width: 1280px;
    margin: 0 auto;
    

}
.seller{
    .red{
        width: 80%;
        display: flex;
        line-height: 40px;
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
    margin: 1%;
    border-radius: 10px;
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

`