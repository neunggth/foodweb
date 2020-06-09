import React, { Component } from "react";
import { connect } from "react-redux";
import {productCreate, productUpdate, productFetch} from "../../actions"
import Header from "../../components/Header";
import ProductForm from "../../components/product/ProductForm";
import Footer from "../../components/Footer";


class ProductEdit extends Component {

componentDidMount(){
  if(this.props.match.params.id){
        this.props.productFetch(this.props.match.params.id);
  }
}

render() {
    const {  formValues, match, productCreate, productUpdate, products } = this.props;
          return (
            <div>
              <Header />
              <div className="container col-md-5">
                
                {match.path.indexOf("add") > 0 && (
                  <div className="alert alert-secondary" role="alert">
                    <h2>Add</h2>
                    {products.saved && <div className="alert alert-secondary title " role="alert">
								{products.msg}
							</div>}
                    <ProductForm onProductSubmit={()=> productCreate(formValues)}/>
                  </div>
                )}

              {match.path.indexOf("edit") > 0 && (
                <div>
                  <h2>Edit</h2>
                  {products.saved && <div className="alert alert-secondary title " role="alert">
								{products.msg}
							</div>}
                  <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)}/>
                </div>
              )}
              
              
              </div>
              <Footer />
            </div>
          );
  }
}
function mapStateToProps({ form, products }){
  return{ formValues: form.productForm ? form.productForm.values: null,products}
}

export default connect(mapStateToProps, { productCreate, productUpdate, productFetch})(ProductEdit);
