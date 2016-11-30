import React from "react";
import {Field, reduxForm} from "redux-form";

class SimpleForm extends React.Component {

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field name="firstName" component={renderField} type="text" placeholder="First Name"
                       label="First Name"/>
                <Field name="lastName" component={renderField} type="text" placeholder="Last Name" label="Last Name"/>
                <Field name="email" component={renderField} type="email" placeholder="Email" label="Email"/>
                <div>
                    <label>Sex</label>
                    <div>
                        <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
                        <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
                    </div>
                </div>
                <Field name="favoriteColor" component={renderField} label="Favorite Color">
                    <option></option>
                    <option value="ff0000">Red</option>
                    <option value="00ff00">Green</option>
                    <option value="0000ff">Blue</option>
                </Field>
                <div>
                    <label htmlFor="employed">Employed</label>
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                </div>
                <div>
                    <label>Notes</label>
                    <div>
                        <Field name="notes" component="textarea"/>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        )
    }
}

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be 2 characters or more'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
};

const warn = values => {
    const warnings = {};
    if (!values.favoriteColor) {
        warnings.favoriteColor = 'Hmm, you don\'t select favorite color'
    }
    return warnings
};

export default reduxForm({
    form: 'simple',  // a unique identifier for this form
    validate,
    warn
})(SimpleForm)