import styled from 'styled-components';

export const InputStyle=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
    align-items: center;
    /* position: relative; */
    float: right;
    min-height: 60vh;
    margin: 7% auto;
    overflow:clip;
    /* margin-top: 10%; */
.sticky{
    position:sticky;
    top:0;
    
  position: -webkit-sticky;
}
.ant-select{
    margin: 2% 0;
    width: 500px;
    height: 50px;
    .ant-select-selector{
        height: 48px;
    }
}
.imgMobile{
    display: none;
}
img{
    width: 500px;
    height: 180px;
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
