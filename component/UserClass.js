import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor');
        
        this.state = {
          count : 0,  
        };
    }

    componentDidMount(){
        //this.timer = setInterval(()=>{
            console.log("Component Did Mount");
        //},1000)
    } 

    componentWillUnmount(){
        console.log('component will unmount.');
        clearInterval(this.timer)
    }

    render(){
        console.log('render');
        
        const {name,location} = this.props;

        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>Increment using class component.</h1>

                <button onClick={()=>{
                    this.setState({
                        count : count+1,
                    })
                }}
                >Count :{count}</button>
                <h1>Name : {name} from Class based component</h1>
                <h3>Location : {location}</h3>
                <h3>Contact : +91-7987900629</h3>
            </div>
        )
    }
}

export default UserClass;