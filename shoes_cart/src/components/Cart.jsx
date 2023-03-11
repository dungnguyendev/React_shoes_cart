import React, { Component } from 'react'
import { DataConText } from './Context'
export default class cart extends Component {
    static contextType = DataConText;
    render() {
        return (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}

                className="d-flex justify-content-center align-items-center">
                <div
                    className="position-relative bg-white shadow rounded-lg p-4 w-75">
                    <span
                        style={{
                            width: 40,
                            height: 40,
                            cursor: "pointer",
                            top: 10,
                            right: 10,
                        }}
                        onClick={this.context.onHandleShowCart}
                        className="position-absolute border rounded-circle d-flex justify-content-center align-items-center"
                    >
                        X
                    </span>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>INX</th>
                                <th>NAME</th>
                                <th>IMAGE</th>
                                <th>QUANTILY</th>
                                <th>PRICE</th>
                                <th>TOTAL</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.context.cartList.map((item, i) => {

                                return (

                                    <tr key={item.product.id}>
                                        <td>{i}</td>
                                        <td>{item.product.name}</td>
                                        <td>
                                            <img className='w-25' src={item.product.image} alt="" />
                                        </td>
                                        <td>
                                            <button className='btn btn-info' onClick={() => { this.context.onHandleDeCreaseCart(item.product.id) }}>-</button>
                                            <i className='mx-3'>{item.quantity}</i>
                                            <button className='btn btn-info' onClick={() => { this.context.onHandleInCreaseCart(item.product.id) }}>+</button>
                                        </td>
                                        <td>{item.product.price}</td>
                                        <td>{item.product.price * item.quantity * 1}</td>

                                        <td><button className='btn btn-danger' onClick={() => { this.context.onHandleDeleteCart(item.product.id) }}>Delete</button></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={7}>
                                    <h4 className="text-end">
                                        {this.context.cartList.reduce((total, item) => {
                                            return (total += item.product.price * item.quantity)
                                        }, 0)}
                                    </h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        onClick={this.context.onHandlePayMent}
                        className="btn btn-info" 
                    >
                        Thanh toán
                    </button>
                </div>
            </div>
        )
    }
}
