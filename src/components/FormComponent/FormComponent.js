import React from "react";
import T from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { Field, Form } from 'formik';
import * as Yup from 'yup';
import FormRow from "./../FormRow";
import FormikbBase from "./../FormikBase";


const styles = (theme) => ({});

/**
 * Allowed field types
 */
export const FORM_FIELD_TYPES = {
  // form fields
  button: "button",
  number: "number",
  string: "string", // text field
  select: "select", // select
};

const SignupSchema = Yup.object().shape({
  id: Yup.string()
    .required('Required'),
  key: Yup.string()
    .required('Required'),
  hostname: Yup.string()
    .required('Required'),
});

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: [],
    };
  }

  static propTypes = {
    pageData: T.array.isRequired,
  };

  renderForm = (pageData, formikProps) => {
    console.log('>>>>>>>>.........', formikProps);
    return pageData.map((item) => this._renderFormRow(item.fields, formikProps));
  };

  _renderFormRow = (rows, {errors, touched}) => {
    
    return (
      <FormRow
        // header={field.header}
        // {...field.customProps}
        // classes={{}}
        gridSpacing={2}
      >
        {rows.map((item) => { 
          return (
            <Grid item>
              {this.renderSectionItems(item)}
              {this.renderErrorMessage(errors, touched, item.name)}
            </Grid>
          );
        })}
      </FormRow>
    );
  };

  renderErrorMessage = (errors, touched, fieldName) => {

    return (
      errors[fieldName]  ? (
        <div>{errors[fieldName]}</div>
      ) : null
    )
  }

  renderSectionItems = (field) => {
    const { type, name } = field;

    switch (type) {
      case FORM_FIELD_TYPES.string:
        return <Field name={name} placeholder={name} component={this.renderTextField} />
      case FORM_FIELD_TYPES.number:
        return <Field name={name} placeholder={name} component={this.renderNumberField} />
      default:
        return false
    }
  };

  handleOnChange = (fieldName, event) => {

    const newState = Object.assign({}, this.state);
    newState[fieldName] = event.target.value;
    this.setState(newState);
    this.updateValidators(fieldName, event.target.value);
  }

  renderTextField = ({ field, form, ...props }) => {
    return <TextField type="text"  {...field} {...props} />;
  };

  renderNumberField = ({ field, form, ...props }) => {

    return <TextField shrink type="number" {...field} {...props} />;
  };

  findInitialValues = () => {
    const {pageData} = this.props;
    console.log('>>>>>', pageData);
  }

  render() {
    const { submitHandler, formInitialValues } = this.props;
    // const formInitialValues = this.findInitialValues();
    return (
      <React.Fragment>
        {/* {this.renderForm(this.props.pageData)} */}

        <FormikbBase
          formInitialValues={formInitialValues}
          submitHandler={submitHandler}
          validationSchema={SignupSchema}
        >
          {(formikProps) => (
            <Form>
              {this.renderForm(this.props.pageData, formikProps)}
              <button type="submit">Submit</button>
            </Form>
          )}
        </FormikbBase>
      </React.Fragment>
    );
  }

  componentDidCatch(error, info) {
    console.error(">>>>>>>>>>>>..", error, info);
  }
}

export default withStyles(styles)(FormComponent);
