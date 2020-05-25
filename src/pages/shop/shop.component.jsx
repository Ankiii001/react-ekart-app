import React from 'react'

import { connect } from 'react-redux'

import { getProduct } from '../../redux/product/product.actions'
import CollectionItem from '../../components/collection-item/collection-item.component'

import './shop.styles.scss'

class ShopPage extends React.Component {

    state = {
        product: [],
        isLoading: false,
        searchField: "",
        filteredProduct: [],
        sortBY: ""
    }

    componentDidMount() {
        this.props.getProduct()
        // this.setState({product: this.props.product})
        console.log("++++++++++++++++++++++", this.props.product)
        this.setState({ filteredProduct: this.props.product })
    }

    sortedBY = e => {
        this.setState({ sortBY: e.target.value })
        console.log(e.target.value)
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value })
        console.log(this.state.searchField)
    }

    render() {
        this.state.filteredProduct = this.props.product
        const { filteredProduct, searchField, sortBY } = this.state
        let useProduct = filteredProduct.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        })
        switch (sortBY) {
            case 'byEdited':
                console.log("yes")
                useProduct = useProduct.sort((note1, note2) => {
                    if (note1.price > note2.price) {
                        return -1
                    } else if (note1.price < note2.price) {
                        return +1
                    } else {
                        return 0
                    }
                })
                break
                case 'byCreated':
                    useProduct = useProduct.sort((note1, note2) => {
                        if (note1.price < note2.price) {
                            return -1
                        } else if (note1.price > note2.price) {
                            return +1
                        } else {
                            return 0
                        }
                    })
                    break
                default:
                    break
        }
        return (
            <div className="preview">
                <div className="actions">
                    <div className="actions__container">
                        <input type="text" placeholder="Filter mobiles" className="shop-input" onChange={this.handleChange} />
                        <label>Sort By...</label>
                        <select className="shop-dropdown" onChange={this.sortedBY}>
                            <option value="" disabled defaultValue>-----Sort By Price-----</option>
                            <option value="byEdited">High to Low</option>
                            <option value="byCreated">Low to High</option>
                        </select>
                    </div>
                </div>
                <div className='card-list'>
                    {
                        useProduct.map((item) => <CollectionItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(".....................", state)
    return ({
        product: state.product.currentProduct,
        isLoading: state.product.isLoading
    })
}

const mapDispatchToProps = dispatch => ({
    getProduct: () => dispatch(getProduct())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)