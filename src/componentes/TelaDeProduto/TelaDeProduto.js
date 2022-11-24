import products from "../../assets/product.json"
import ProductCard from "../../componentes/ProductCard/ProductCard";
import { Main } from "./TelaDeProduto.styled"

function TelaDeProdutos(props) {

  return (
    <Main >

      <section>
        <h1>Tela de viagens</h1>
        <hr/>
        {
          products
            // .filter((produtc)=>produtc.name.toLowerCase().includes("L".toLowerCase()))
            // .filter((produtc)=>produtc.price >= 8000)
            .map((product) => (

              <ProductCard product={product} key={product.id} />
            ))
        }
      </section>



    </Main>
  );

}

export default TelaDeProdutos