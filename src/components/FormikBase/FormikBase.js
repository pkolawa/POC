import React from "react";
import T from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Formik } from 'formik';
import * as Yup from 'yup';



const styles = (theme) => ({});


class FormikbBase extends React.Component {

    static propTypes = {
        formInitialValues: T.object.isRequired,
        submitHandler: T.func.isRequired,
        validationSchema: T.object,
        children: T.func.isRequired
    };

    render() {
        const { formInitialValues, submitHandler, children, validationSchema } = this.props;
        return (
            <Formik
                initialValues={formInitialValues}
                onSubmit={(values, actions) => submitHandler(values, actions)}
                validationSchema={validationSchema}
            >
                {children}
            </Formik>
        );
    }

}


export default withStyles(styles)(FormikbBase);

const MyInput = ({ field, form, ...props }) => {
    return <input {...field} {...props} />;
};