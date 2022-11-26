import products from "../../assets/product.json"
import ProductCard from "../../componentes/ProductCard/ProductCard";
import { Main } from "./TelaDeProduto.styled"

function TelaDeProdutos(props) {

const {addToCart}=props
  return (
    <Main >

      <section>
        <h1>Tela de viagens</h1>
        <hr/>
        {
          products
         
            .map((product) => (

              <ProductCard 
              product={product} 
              key={product.id}
              addToCart={addToCart}
              isOnProductsScreen={true}
              />
            ))
        }
      </section>



    </Main>
  );

}

export default TelaDeProdutos