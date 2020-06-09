import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";

class ProductForm extends Component {
  renderFields() {
    const formFields = [
      {
        label: "Product Name ",
        name: "productName",
        type: "text",
        required: "true",
      },
      {
        label: "Unit Price",
        name: "unitPrice",
        type: "number",
        required: "true",
      },
      { label: "Thumbnail", name: "thumbnail", type: "text", required: "true" },
    ];
    return formFields.map(({ label, name, type, required }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          required={required}
          component={formFields}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form>
          {this.renderFields()}
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
