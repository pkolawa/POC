import React from "react";
import T from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import FormRow from "./../FormRow";
import { TextField } from "@material-ui/core";

const styles = (theme) => ({

});


/**
 * Allowed field types
 */
export const FORM_FIELD_TYPES = {
	// form fields
    button: 'button',
    number: 'number',
	string: 'string', // text field
	select: 'select', // select
};

class FormComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formFields: []
        }
    }

    static propTypes = {
        pageData: T.array.isRequired,
    };


    renderForm = pageData => {
        return pageData.map( item => this._renderFormRow(item.fields) )
    }

    _renderFormRow = rows => {

        return (
            <FormRow
            // header={field.header}
            // {...field.customProps}
            // classes={{}}
            >
                {rows.map(item => this.renderSectionItems(item) )}
            </FormRow>
        );
    }


    renderSectionItems = (field) => {
        const {type, name, value} = field;
        
        switch (type) {
			case FORM_FIELD_TYPES.string:
                return this.renderTextField(name, value);
            case FORM_FIELD_TYPES.number:
                return this.renderNumberField(name, value);
            default:
                return false
            
        }
    }

    renderTextField = (name, value) => {
        return <TextField label={name} value={value} />

    }

    renderNumberField = (name, value) => {
        return <TextField shrink type="number" label={name} value={value} />

    }

    render() {
        return this.renderForm(this.props.pageData)
    }

    componentDidCatch(error, info) {
        console.error('>>>>>>>>>>>>..', error, info);
    }
}

export default withStyles(styles)(FormComponent);
