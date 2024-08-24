import React from "react";

class Instructor extends React.Component {
    componentDidUpdate() {
        console.log("component - update");
    }

    componentDidMount() {
        console.log("component - Mount");
    }

    componentWillUnmount() {
        console.log("component - UnMount");
    }

    render() {
        console.log("render - Instructor");
        const { instructor } = this.props;

        if (!instructor) {
            return null; // Return nothing if instructor is not available
        }

        return (
            <div>
                Name: {instructor.name} <br />
                Email: {instructor.email}
                <br />
                Phone: {instructor.phone}
            </div>
        );
    }
}

export default Instructor;
