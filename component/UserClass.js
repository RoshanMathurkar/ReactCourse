import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {name,location} = this.props;
        return (
            <div className="user-card">
                <h1>Name : {name} from Class based component</h1>
                <h3>Location : {location}</h3>
                <h3>Contact : +91-7987900629</h3>
            </div>
        )
    }
}

export default UserClass;