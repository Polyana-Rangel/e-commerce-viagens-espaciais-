import { HeaderContainer } from "./Header.styled";
import { BsCartCheck } from 'react-icons/bs';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { MdProductionQuantityLimits } from 'react-icons/md';





function Header(props) {
    const { irParaCartTela, irParaTelaDeProduto } = props
    console.log(props)

    return (
        <HeaderContainer>
            <a>viagens </a>

            <div>

                <input placeholder="Pesquisar" />
                <button>

                    <GiMagnifyingGlass />

                </button>

            </div>
            <div className="button-group">
                <button onClick={irParaCartTela}>
                    <BsCartCheck  />
                </button>

                <button onClick={irParaTelaDeProduto} >
                    <MdProductionQuantityLimits  />
                </button>
            </div>
        </HeaderContainer>
    );
}

export default Header;
