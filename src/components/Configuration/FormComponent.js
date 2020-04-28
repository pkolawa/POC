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

        return pageData.map(item => {
            const { fields } = item;

            return this._renderFormRow(fields);
        })
    }

    _renderFormRow = rows => {

        return (
            <FormRow
            // header={field.header}
            // {...field.customProps}
            // classes={{}}
            >
                {rows.map(item => {
                    return this.renderSectionItems(item);
                })}
            </FormRow>
        );
    }


    renderSectionItems = (field) => {
        const { type, name, value} = field;
        
        let component;
        switch (type) {
			case FORM_FIELD_TYPES.string:
                component = this.renderTextField(name, value);
                break;
            case FORM_FIELD_TYPES.number:
                component = this.renderNumberField(name, value);
                break;
            default:
                return false
            
        }

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', component);

        return (
			<React.Fragment key={field.name}>
                {component}
            </React.Fragment>
				
		);
    }

    renderTextField = (name, value) => {
        return <TextField type="text" label={name} value={value} />

    }

    renderNumberField = (name, value) => {
        return <TextField shrink type="number" label={name} value={value} />

    }





    render() {
        const { pageData } = this.props;

        return this.renderForm(pageData);

    }

    componentDidCatch(error, info) {
        console.log('>>>>>>>>>>>>..', error, info);
    }
}

export default withStyles(styles)(FormComponent);
