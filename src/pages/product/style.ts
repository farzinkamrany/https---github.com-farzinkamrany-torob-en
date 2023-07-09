import styled from 'styled-components';

export const StAll=styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
.product-overview{
    margin: 2%;
    display: flex;
    display: grid;
    grid-template-columns: 352px auto;
}
h2{
text-align: center;
}
.price-details{

    span{
        padding: 5px;
        border-radius:15px ;
        border: 1px solid #999;
        text-decoration: none;
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
`