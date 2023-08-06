import styled from "styled-components";

export const StAll=styled.div`
display: flex;
    flex-direction: column;
.large,.small{
    display: flex;
}
.large{
    border-bottom:1px solid #333;
    display: flex;
    justify-content: space-between;
    width:100%;
    .links{
        display: flex;
        width:40%;
    }
    .signs{

        display: flex;
        width:40%;
    }
}



`
