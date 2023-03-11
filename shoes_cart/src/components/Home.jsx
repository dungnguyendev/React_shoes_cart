import { Component } from 'react'
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import Cart from './Cart'
import { DataConText } from './Context'




export default class Home extends Component {
    data = [
        {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        },
        {
            id: 2,
            name: "Adidas Prophere Black White",
            alias: "adidas-prophere-black-white",
            price: 450,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 990,
            image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
        },
        {
            id: 3,
            name: "Adidas Prophere Customize",
            alias: "adidas-prophere-customize",
            price: 375,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 415,
            image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
        },
        {
            id: 4,
            name: "Adidas Super Star Red",
            alias: "adidas-super-star-red",
            price: 465,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 542,
            image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
        },
        {
            id: 5,
            name: "Adidas Swift Run",
            alias: "adidas-swift-run",
            price: 550,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 674,
            image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
        },
        {
            id: 6,
            name: "Adidas Tenisky Super Star",
            alias: "adidas-tenisky-super-star",
            price: 250,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 456,
            image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
        },
        {
            id: 7,
            name: "Adidas Ultraboost 4",
            alias: "adidas-ultraboost-4",
            price: 450,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 854,
            image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
        },
        {
            id: 8,
            name: "Adidas Yeezy 350",
            alias: "adidas-yeezy-350",
            price: 750,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 524,
            image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
        },
        {
            id: 9,
            name: "Nike Adapt BB",
            alias: "nike-adapt-bb",
            price: 630,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 599,
            image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
        },
        {
            id: 10,
            name: "Nike Air Max 97",
            alias: "nike-air-max-97",
            price: 650,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 984,
            image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
        },
        {
            id: 11,
            name: "Nike Air Max 97 Blue",
            alias: "nike-air-max-97-blue",
            price: 450,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 875,
            image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
        },
        {
            id: 12,
            name: "Nike Air Max 270 React",
            alias: "nike-air-max-270-react",
            price: 750,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 445,
            image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
        },
    ];
    state = {
        showCart: false,
        selectedProduct: null,
        cart: [],
    }
    setSelectedProduct = (prod) => {
        this.setState({
            selectedProduct: prod,
        })
    }
    handleShowCart = () => {
        this.setState({
            showCart: true,
        })
    }
    handleHideProductDetail = () => {
        this.setState({
            selectedProduct: null,
        })
    }
    onHandleHideCart = () => {
        this.setState({
            showCart: false,
        })
    }
    handleAddToCart = (prod) => {
        const cartClone = [...this.state.cart]

        const foundedProduct = cartClone.find((item) => {
            return item.product.id === prod.id
        });

        if (!foundedProduct) {
            const cartItem = {
                product: prod,
                quantity: 1,
            };
            cartClone.push(cartItem);
        } else {
            foundedProduct.quantity += 1;
        }
        this.setState({
            cart: cartClone,
        }, () => { console.log(this.state.cart); })
    }
    handleIncreaseCart = (id) => {
        const cartClone = [...this.state.cart];

        const foundedProduct = cartClone.find((item) => {
            return item.product.id === id;
        })
        if (foundedProduct.quantity < foundedProduct.product.quantity) foundedProduct.quantity += 1

        this.setState({
            cart: cartClone,
        });
    }
    handleDecreaseCart = (id) => {
        const cartClone = [...this.state.cart];

        const foundedProduct = cartClone.find((item) => {
            return item.product.id === id;
        })
        if (foundedProduct.quantity === 1) {
            const foundedIndex = cartClone.findIndex((item) => {
                return item.product.id === id;
            })
            console.log(foundedIndex);
            if (foundedProduct !== -1) {
                cartClone.splice(foundedIndex, 1);
            }
        } else {
            foundedProduct.quantity -= 1;
        }

        this.setState({
            cart: cartClone,
        });
    }
    handleDeleteCart = (id) => {
        const cartClone = [...this.state.cart];

        const foundedIndex = cartClone.findIndex((item) => {
            return item.product.id === id;
        });
        if(foundedIndex !== -1 ){
            cartClone.splice(foundedIndex,1);
        }
        this.setState({
            cart: cartClone,
        });

    }
    handlePayMent = () => {
        this.setState({
            cart: [],
        });
    }

    render() {
        return (
            // Nó sẽ phân phối giá trị của nó tới các phần tử bên trong
            <DataConText.Provider value={{
                cartList: this.state.cart,
                onHandlePayMent: this.handlePayMent,
                onHandleDeleteCart: this.handleDeleteCart,
                onHandleInCreaseCart: this.handleIncreaseCart,
                onHandleDeCreaseCart: this.handleDecreaseCart,
                onHandleAddToCart: this.handleAddToCart,
                onHandleShowCart: this.onHandleHideCart,
                onHandleHideProductDetail: this.handleHideProductDetail,
            }}>
                <div>
                    <h1 className='display-3 text-center'>Shopping online</h1>
                    <div className='text-center'>
                        <button className='btn btn-success' onClick={this.handleShowCart}>Giỏ hàng ({this.state.cart.length})</button>
                    </div>
                    <ProductList data={this.data} setSelectedProduct={this.setSelectedProduct} />
                    {this.state.selectedProduct && (
                        <ProductDetail selectedProduct={this.state.selectedProduct} />
                    )}
                    {this.state.showCart && <Cart />}
                </div>
            </DataConText.Provider>
        )
    }
}
