import React, { Component } from 'react'
import { DataConText } from './Context'
export default class ProductDetail extends Component {
    static contextType = DataConText;
    render() {
        const { name,price,image,description ,quantity} = this.props.selectedProduct
        return (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}


                className='d-flex justify-content-center align-items-center'>
                <span
                    style={{
                        width: 40,
                        height: 40,
                        top: 10,
                        right: 10,
                        cursor: "pointer",
                    }}
                    onClick={this.context.onHandleHideProductDetail}
                    className="position-absolute border rounded-circle d-flex justify-content-center align-items-center"
                >
                    X
                </span>
                <div className="position-relative container bg-white card p-4">
                    <div className="col-3">
                        <img src={image} alt="" />
                    </div>
                    <div className="col-7">
                        <h4>Name: {name}</h4>
                        <h4>Price: {price}</h4>
                        <p>Description: {description}</p>
                        <p>Inventory: {quantity}</p>
                    </div>
                </div>
            </div>
        )
    }
}
