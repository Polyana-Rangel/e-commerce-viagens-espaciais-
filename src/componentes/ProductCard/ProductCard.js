import { ProductCardContainer } from "./ProductCard.styled"

const priceFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency', currency: 'BRL',


    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

console.log(priceFormatter.format(2500));

function ProductCard(props) {
    const { product,
        addToCart,
        isOnProductsScreen,
        isOnCartScreen,


    } = props
    return (
        <ProductCardContainer>
            <p>{isOnProductsScreen && "telade produtos"}</p>
            <p>{isOnCartScreen && "tela carrinho"}</p>
            <img src={product.imageUrl} alt={product.imageAlt} />
            <div>
                <div className="card-header">
                    <h2>{product.name}</h2>
                    <span>{product.rating}</span>
                </div>

                <div className="card-price-and-cart-action">
                    <span>{priceFormatter.format(product.price)}</span>
                    {
                        isOnProductsScreen 
                        && <button onClick={() => addToCart(product)} >+ Add ao Carrinho </button>
                    }
                    {
                        isOnCartScreen
                        && <span>{product.quantity}</span>
                    }

                </div>
            </div>
        </ProductCardContainer>
    )
}

export default ProductCard