import styled from 'styled-components';

export const InputStyle=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 80%;
    align-items: center;
    position: relative;
    float: right;
    margin: 7% auto;
    /* margin-top: 10%; */

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
    height: 260px;
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
