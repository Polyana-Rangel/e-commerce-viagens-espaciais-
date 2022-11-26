import ProductCard from "../ProductCard/ProductCard";
import { Main } from "./CartTela.styled";


function CartTela(props) {

  const{cart} = props

  return (
    <Main >

      <section>
        <h1>Tela de carrinhos </h1>
        <hr />
        {
          cart.map((product) => (

              <ProductCard product={product} key={product.id}   isOnCartScreen={true} />
            ))
        }
      </section>



    </Main>
  );
}

export default CartTela