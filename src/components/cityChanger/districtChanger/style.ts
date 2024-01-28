import styled from 'styled-components';

export const StAll=styled.div`
height:350px;
overflow-y:scroll;
.ant-input{
    margin:2% 0;
}
.tags{
    position: sticky;
    top: 0;
    width: 100%;
    background:#fff;
    z-index:10;

}
.ant-tag{
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    background: #333;
    color: white;
    padding: 0 12px;
    height: 32px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-column-gap: 6px;
    -moz-column-gap: 6px;
    column-gap: 6px;
    svg{
        color:#fff;
        font-size:12px;
    }
}
.cities-container{
    /* margin-top:70px; */
}
.ant-btn{
    border:none;
    box-shadow:none;
}
.ant-radio-checked .ant-radio-inner{
    background:#333;
}
svg{
    font-size:20px;
}
.cities{
    display: flex;
    width:100%;
    cursor: pointer;
    justify-content:space-between;
    padding:8px;
    border-bottom:1px solid #ddd;
}
.districts{
    display: flex;
    width:100%;
    cursor: pointer;
    justify-content:space-between;
    padding:8px;
    align-items:center;
}
`