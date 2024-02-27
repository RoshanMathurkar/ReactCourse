import { useState } from "react";

const User = (props)=>{
    const {name,location} = props;

    let [count,setCount] = useState(0);
    //console.log(count);
    
    return (
        <div className="user-card">
            <h1>Increment using functional component.</h1>
            <button onClick={()=>{setCount(count+1)}}>
                Count:{count}
            </button>
            <h1>Name : {name}</h1>
            <h3>Location : {location}</h3>
            <h3>Contact : +91-7987900629</h3>
        </div>
    )
}

export default User;