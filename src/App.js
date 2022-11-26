import { useState } from "react";
import CartTela from "./componentes/CartProduto/CartTela";
import TelaDeProdutos from "./componentes/TelaDeProduto/TelaDeProduto";
import Header from "./componentes/Header/Header";



function App() {

  const [telaAtiva, setTelaAtiva] = useState("TelaDeProduto")

  const [cart, setCart] = useState([])

  const irParaTelaDeProduto = () => setTelaAtiva("TelaDeProduto")
  const irParaCartTela = () => setTelaAtiva("CartTela")

  const addToCart = (productToAdd) => {

    const newCart = [...cart]

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToAdd.id
    )
    if (!productFound) {
      const newProduct = { ...productToAdd, quatity: 1 }
      newCart.push(newProduct)
    }

    setCart(newCart)

  }

  const rederTela = () => {
    switch (telaAtiva) {
      case "TelaDeProduto":
        return <TelaDeProdutos addToCart={addToCart} />
      case "CartTela":
        return <CartTela cart={cart} />
      default:
        return <div>Tela não encontrada</div>

    }
  }

  return (
    <>
      <Header
        irParaTelaDeProduto={irParaTelaDeProduto}
        irParaCartTela={irParaCartTela}
        itemsInCart={cart.length}

      />
      {rederTela()}
    </>
  )
}

export default App
