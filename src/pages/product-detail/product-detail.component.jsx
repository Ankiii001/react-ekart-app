import React from 'react'
import { connect } from 'react-redux'

import './product-detail.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.actions'

class ProductDetails extends React.Component {

    state = {
        product: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        this.setState({
            product: this.props.currentProduct.find((item) => {
                // console.log(item.id)
                // console.log(id)
                return item.id === id
            })
        })
        console.log(this.props.currentProduct.find(item => item.id === id))
        console.log(this.props.currentProduct)
    }

    render() {
        const id = this.props.match.params.id
        const data = this.props.currentProduct.find(item => item.id == id)
        return (
            <div className="row mt-20">
                <div className=" col-sm-4">
                    <img src={data.imageUrl} style={{ float: 'left' }} alt="image" />
                </div>
                <div className="container-fluid col-sm-8">
                    <h3>{data.name}</h3>
                    <hr/>
                        <p>{data.summary}</p>
                        <h4>COST: ${data.price}</h4>
                 </div>

                 <CustomButton onClick={ ()=> this.props.addItem(data)} inverted >Add to cart</CustomButton>
                </div>
        )

    }
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

const mapStateToProps = ({ product}) => ({
                    currentProduct: product.currentProduct
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetails)
