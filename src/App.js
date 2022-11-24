import { useState } from "react";
import CartTela from "./componentes/CartProduto/CartTela";
import TelaDeProdutos from "./componentes/TelaDeProduto/TelaDeProduto";
import Header from "./componentes/Header/Header";



function App() {

  const [telaAtiva, setTelaAtiva] = useState("TelaDeProduto")

  const irParaTelaDeProduto = () => setTelaAtiva("TelaDeProduto")
  const irParaCartTela = () => setTelaAtiva("CartTela")

  const rederTela = () => {
    switch (telaAtiva) {
      case "TelaDeProduto":
        return <TelaDeProdutos
        />
      case "CartTela":
        return <CartTela
        />
      default:
        return <div>Tela não encontrada</div>

    }
  }

  return (
    <>
      <Header
       irParaTelaDeProduto={irParaTelaDeProduto}
       irParaCartTela={irParaCartTela}
       
      />
      {rederTela()}
    </>
  )
}

export default App
