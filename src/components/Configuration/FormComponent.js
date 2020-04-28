import React from "react";
import T from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import FormRow from "./../FormRow";

const styles = (theme) => ({

});


/**
 * Allowed field types
 */
export const FORM_FIELD_TYPES = {
	// form fields
	string: 'string', // text field
	select: 'select', // select
	button: 'button'	
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
                <React.Fragment>
                    {rows.map(item => {
                        return this.renderSectionItems(item);
                    })}
                </React.Fragment>
            </FormRow>
        );
    }


    renderSectionItems = (field) => {
        const { type, name, value} = field;
        
        let Component = {};
        switch (type) {
			case FORM_FIELD_TYPES.string:
                
                Component = this.rendertextField(name, value);

                break;
            
        }

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', Component);

        return (
			<React.Fragment key={field.id}>
                
                {Component}
            </React.Fragment>
				
		);
    }

    rendertextField = (name, value) => {
        // console.log('>>>>>>>>>>>>>>>>>..', name, value);

        return <React.Fragment>{name}</React.Fragment>
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
