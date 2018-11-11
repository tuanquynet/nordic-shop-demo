import React from 'react'
import "./style.css"
import ProductCard from '../ProductCard';

class ProductList extends React.Component{
    render(){
        const products = this.props.products.map(product => {
			return {
				...product,
				saleOf: product.saleOf ? product.saleOf : 0,
				isNew: !!product.isNew,
				salePrice: product.saleOf ? product.originalPrice - product.saleOf : 0,
			}
		});

        return(
            <div className="product-grid">
                {products.map(product=>(
					<ProductCard
						key={product.id}
						onClickProduct={this.props.onClickProduct}
						onClickAddToCart={this.props.onClickAddToCart}
						product={product}
						/>
                ))}
            </div>
        )
    }
}
export default ProductList;
