import React, { Component } from 'react'
import { DataConText } from './Context'

export default class ProductItem extends Component {
    // sử dụng keywork tĩnh để gọi context 
    /**
     * không cần  qua lớp đối tượng new ra đối tượng mới có thể sài 
     * được thì mình chỉ gọi cái đối tượng cũ và gọi phương thức mà mình 
     * đã static cho nó
     * 
     * và ở react thì static này dùng để khai báo context
     */
    static contextType = DataConText;
    render() {

        const { name, image, price } = this.props.prod

        return (
            <div className='card p-3 mb-4'>

                <img src={image} alt="" />
                <h4>{name}</h4>
                <p>Price: {price} </p>
                <div className="d-flex justyfi-content-center">
                    <button className='btn btn-danger me-3'
                        onClick={() => {
                            this.props.setSelectedProduct(this.props.prod)
                        }}
                    >
                        Detail
                    </button>
                    <button className='btn btn-info' onClick={() => {
                        this.context.onHandleAddToCart(this.props.prod)
                    }}>

                        Cart
                    </button>
                </div>
            </div>
        )
    }
}
