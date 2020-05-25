import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './shop.styles.scss'

    class ShopPage extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                collections: SHOP_DATA
            }
        }

        render() {
            const { collections } = this.state
            return (

                <div className='shop-page'>
                    <div className="actions">
                        <div className="actions__container">
                            <input id="search-text" type="text" placeholder="Filter mobiles" className="shop-input" />
                            <select id="filter-by" className="shop-dropdown">
                                <option value="" disabled defaultValue>-----Sort By Price-----</option>
                                <option value="byEdited">High to Low</option>
                                <option value="byCreated">Low to High</option>
                            </select>
                        </div>
                    </div>

                    {
                        collections.map(({ id, ...otherCollectionProps }) => (
                            <CollectionPreview key={id} {...otherCollectionProps} />
                        ))
                    }

                </div>
            )
        }
    }


export default ShopPage