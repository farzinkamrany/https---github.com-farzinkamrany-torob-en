import styled from 'styled-components';

export const StAll=styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
background: #f2f3f5;

a{
  text-decoration: none;
}
@media (max-width:768px){
    width: 160vw;
}
.details{
    display: grid;
    max-width: 1280px;
    margin: 2% auto;
    /* grid-template-columns: 840px 416px; */
    gap: 24px;

    @media (max-width:768px) {
    gap: 24px 0;
    margin: 1% auto;
        grid-template-columns: 100%;
    }
}
.bread-crumb{
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
        margin-top:2%;
    @media (max-width:768px){
    }
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
    
@media (max-width:768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 216px;
        height: 216px;
    }
}
}
h2{
text-align: center;
}
.price-details{
    h1{
        font-size: 16px;
        
@media (max-width:768px) {
    line-height: 45px;
    white-space: normal;
    font-size:large;
}
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
    flex-wrap: nowrap;
    
@media (max-width:768px) {
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-between;
}
}
.actions{
    display: flex;
    width: 100%;
    align-items: center;
    padding: 2%;
    justify-content: space-between;
    div{
        display: flex;  svg{
        font-size: 20px;
        fill:rgb(153, 153, 153);
        width: 24px;
    height: 24px;
    margin-inline-end: 24px;
    }
    }
@media (max-width:768px) {
    div{
        
  display: none;
    }
  width:20%;
}
    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f2f3f5;
        border-radius: 14px;
        border: none;
        height: 28px;
        margin-left: 8px;
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
    b,p{
        font-size:12px;
    }
    
@media (max-width:768px) {
    justify-content: space-between;
   span{
    padding: 8px;
    height: auto;
}
p{
    white-space: nowrap;
}
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
        @media (max-width:768px) {
            padding-right: 40px;
           .red{ 
            b{
                font-size: 14px;
            }
            width: 100%;
            padding: 16px;
            height: 72px;
           }
        }
}
.mobile-app{
    display: grid;
    grid-area: 2/1/3/1;
    display: none;
    background: #fff;
        align-items:center;
    padding: 20px 0 20px 20px;
    .logo{
        width: 140px;
    }
    .installer{
        min-height:140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .question{
            font-size:18px;
        }
        .no{
            
    background: white;
    color: #d73948;
    border: 1px solid #d73948;

        }
        img{
            width:100px;
            height:100px;
        }
    }
    @media (max-width:768px) {
        display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    }
}

.sellers{
    min-height: 180px;
    background-color: #fff;
    padding:5px 3px;
    border-radius: 4px;
    display: grid;
    grid-area: 2 / 1 / 3 / 2;
.ant-anchor{
        background: #fff;
    }
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 12px ;
        margin: 10px 0;
        h3{
            margin: 0;
        }
        a{
            text-decoration: none;
            color: #d73948;
        }
    }
    @media (max-width:768px) {
    grid-area:4/1/5/2;
    display: flex;
    flex-direction: column;
    width: 100%;
        
    }
.cards{
display: flex;
height: 52px;
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
    /* border:1px solid #ddd; */
    p{
        font-size: 12px;
        margin: 0;
    }
    }
.active-card{
    margin-inline-start: 8px;
    outline-offset: 0px;
    border: 2px solid #333;
    b{
        text-align: left;
    width: 100%;
    }
        }
}
}
.in-person{
    display: grid;
    grid-area: 3 / 1 / 4 / 2;
    border-radius: 10px;
    width: 100%;
    @media (max-width:768px) {
    grid-area: 5 / 1 / 6 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
}
.specs{
    display: grid;
@media (max-width:768px) {
    display: grid;
    grid-area: 6 / 1 / 7 / 2;
}
}
.chart-items{
    display: grid;
    grid-area: 1 / 2 / 2 / 3;
    
@media (max-width:768px) {
    display: grid;
    grid-area: 7 / 1 / 8 / 2;
}
}
.product-section{
    display: grid;
    grid-area: 4 / 1 / 5 / 2;
@media (max-width:768px) {
    display: none;
    grid-area: 8 / 1 / 9 / 2;
}
}
@media(max-width:768px){
    /* width: 637px; */
    
   .cards .active-card b{
        font-size: 12px;
    }
}
`