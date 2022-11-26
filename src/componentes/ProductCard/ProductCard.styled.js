import styled from "styled-components"

export const ProductCardContainer = styled.article`
    border: 1px solid black;
    margin: 8px 0;
    margin-right: 8px;
    border-radius: 10px;
    overflow: hidden;
    

    > div{
        padding:8px;
        
    
    }
    .card-header{
        display: flex;
        justify-content: space-between;
        align-items:center;
        

    }
    .card-price-and-cart-action{
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin-top: 8px;
        background-color: #d7ffe0;
        color: #42446e;
        font-weight: 300;
        font-size: 14px;
        margin-bottom: 16px;
        padding: 4px;
        padding-bottom: calc(24px - 7px);
        transform: translateY(-7px);

        button{
        padding:4px;
        color: #018c0f;
        background-color: #d7ffe0;
        border-radius: 20px;
        /* padding: 0 18px; */
        
        display: flex;
        align-items: center;
        justify-content: center;

        box-shadow: 0px 4px 8px 0px rgba(102,102,102,1);

            :hover{
            cursor: pointer;
            filter: brightness(1.1);
            }
            :active{
                filter: brightness(0.90);

            }
        }
       
    }

`