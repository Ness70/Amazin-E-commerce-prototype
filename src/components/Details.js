import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                 const {id, name, company, image, description, price, inCart} = value.detailProduct;
                 return (
                     <div className="container py-5">
                         <div className="row">
                             <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{name}</h1>
                             </div>
                         </div>
                         <div className="row">
                            <div className="col-10 mxauto col-md-6 my-3">
                                <img src={image} className="img-fluid" alt="product"/>
                            </div>
                            <div className="col-10 mxauto col-md-6 my-3 text-capitalize">
                                <h3>Model : {name}</h3>
                                <h4 className="text-muted mt-3 mb-2">
                                    Made by : <span className="text-uppercase">{company}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        Price : <span>$</span>{price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3mb-0">Description: </p>
                                <p className="text-muted lead">{description}</p>
                                <div>
                                    <Link to='/'>
                                        <ButtonContainer>Back to Products</ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{ value.addToCart(id); value.openModal(id);}}>
                                        {inCart?"In Cart" : "Add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                         </div>
                     </div>
                 );
                }}
            </ProductConsumer>
        );
    }
}

export default Details;