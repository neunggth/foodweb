import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import formField from "../common/FormField";
import { productFormField } from "./formFields";

class ProductForm extends Component {

  renderFields(formFields) {
    return formFields.map(({ label, name, type, required }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          required={required}
          component={formField}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form>
          {this.renderFields(productFormField)}
          <button className="btn btn-block btn-info title" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

ProductForm = reduxForm({ form: "productForm" })(ProductForm);

export default ProductForm;
