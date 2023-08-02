import styled from 'styled-components';

export const InputStyle=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
    align-items: center;
    /* position: relative; */
    float: right;
    min-height: 70vh;
    margin: 7% auto;
    overflow:clip;
    /* margin-top: 10%; */
    .pcImg{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            color: #ff3333;
            font-size: 40px;
            font-weight: bold;
        }
    }
.sticky{
    position:sticky;
    top:0;
    
  position: -webkit-sticky;
}
.ant-select{
    
    /* height: 48px; */
    margin: 2% 0;
    width: 500px;
    /* height: 50px; */
    .ant-select-selector{
        /* height: 48px; */
    }
}
.imgMobile{
    display: none;
}
img{
    
}
.mobileView{
    display: none;
}
@media (max-width:768px) {
    margin-top: 15%;
    .pcImg{
        display: none;
       
    }
    .mobileView{
        display: contents;
    }
   .pcP{
    display: none;
      }
   .imgMobile{
    display: block;
    img{
        width: 80px;
        height: 80px;
    }
   }
}
`
