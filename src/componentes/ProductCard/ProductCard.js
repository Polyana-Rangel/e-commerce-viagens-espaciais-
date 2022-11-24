
function ProductCard(props) {
    const { product } = props
    return (
        <div>
            <img src={product.imageUrl} alt={product.imageAlt} />
            <div>
                <h2>{product.name}</h2>
                <span>{product.rating}</span>
            </div>

            <div>
                <span>{product.price}</span>
                <button>Adicionar ao Carrinho </button>
            </div>
        </div>
    )
}

export default ProductCard