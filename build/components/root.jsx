import React from "react";
import SimpleForm from "./simpleForm";

export default class Root extends React.Component {

    handleSubmit = (values) => {
        console.log(values);
    };

    render() {
        return (
            <div id="container">
                <h1>Hello World</h1>
                <SimpleForm onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}