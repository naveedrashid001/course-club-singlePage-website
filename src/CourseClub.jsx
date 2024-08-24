import React from "react";

class CourseClub extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem("cyclopedia")) || {
            instructor: null, // Initialize as null
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
            inputName: "",
            inputFeedback: "",
        };
    }

    componentDidMount = async () => {
        console.log("component Did Mount");
        // if (!JSON.parse(localStorage.getItem("cyclopedia"))) {
        //     const response = await getRandom();
        //     console.log(response);
        //     this.setState({
        //         instructor: {
        //             name: response.data.first_name + " " + response.data.last_name,
        //             email: response.data.email,
        //             phone: response.data.phone_number,
        //         },
        //     });
        // }
    };

    componentDidUpdate = async (prevprops, prevstate) => {
        console.log("component Did Update");
        // localStorage.setItem("cyclopedia", JSON.stringify(this.state));
        // console.log("old state ", prevstate.studentCount);
        // console.log("new state ", this.state.studentCount);

        // if (prevstate.studentCount < this.state.studentCount) {
        //     const response = await getRandom();
        //     this.setState((prevstate) => ({
        //         studentList: [
        //             ...prevstate.studentList,
        //             {
        //                 name: response.data.first_name + " " + response.data.last_name,
        //             },
        //         ],
        //     }));
        // } else if (prevstate.studentCount > this.state.studentCount) {
        //     this.setState({
        //         studentList: [],
        //     });
        // }
    };

    componentWillUnmount = () => {
        console.log("component Did UnMount");
    };

   

    render() {
        console.log("Render component");
        return (
            <div>
                <div className="p-3">
                 </div>
                
               
            </div>
        );
    }
}

export default CourseClub;
