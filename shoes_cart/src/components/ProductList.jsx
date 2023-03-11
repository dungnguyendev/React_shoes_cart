import React, { Component } from 'react'
import ProductItem from './ProductItem'
export default class ProductList extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div className='container mt-5'>
                <div className="row">
                    {this.props.data.map((item) => (
                        <div key={item.id} className='col-3'>
                            <ProductItem prod={item} setSelectedProduct={this.props.setSelectedProduct}/>
                        </div>
                    ))}
                        
                       
                    
                </div>
            </div>
        )
    }
}
