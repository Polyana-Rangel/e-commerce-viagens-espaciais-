import styled from 'styled-components'


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    .button-group{
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
    color: white ;
    background-color:#008CBA;
    border:none;
    width: 70px;
    height: 50px;
    margin: 04px;
    
    :hover{
        cursor: pointer;
        filter: brightness(1.1);
    }
    :active{
        filter: brightness(0.90);

    }
    }

    
`
