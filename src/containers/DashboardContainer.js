import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Field, Form, Formik, FieldArray, FormikProps} from 'formik';
import DashboardCardList from "../components/DashboardCardList";

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

class DashboardContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <div className={classes.toolbar} />
        <DashboardCardList />
        <Example />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DashboardContainer));


const MyInput = ({field, form, ...props}) => {
  return <input {...field} {...props} />;
};

const Example = () => (
  <div>
      <h1>My Form</h1>
      <Formik
          initialValues={{email: {value: '', type: 'text'}, color: {value: 'red', type: 'text'}, firstName: {value: 'Puneet', type: 'text'}, lastName: {value: '', type: 'text'}}}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}>{(props) => (
          // <Form>
          //     <Field type="email" name="email" placeholder="Email"/>
          //     <Field as="select" name="color">
          //         <option value="red">Red</option>
          //         <option value="green">Green</option>
          //         <option value="blue">Blue</option>
          //     </Field>

          //     <Field name="lastName">
          //         {({
          //               field, // { name, value, onChange, onBlur }
          //               form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          //               meta,
          //           }) => (
          //             <div>
          //                 <input type="text" placeholder="Email" {...field} />
          //                 {meta.touched && meta.error && (
          //                     <div className="error">{meta.error}</div>
          //                 )}
          //             </div>
          //         )}
          //     </Field>
          //     <Field name="firstName" placeholder="Doe" component={MyInput}/>
          //     <button type="submit">Submit</button>
          // </Form>

          <FieldArray 
            name="test"
            render={ arrayHelpers => {
              const fieldNames = Object.keys(props.values)
              
              return(
                <Form>
                  {fieldNames.map((field) => (
                    <Field name={field} value={props.values[field].value} type={props.values[field].type} placeholder={field} />
                  ))}
                </Form>
              )}
            }
          />
      )}
      </Formik>
  </div>
);

