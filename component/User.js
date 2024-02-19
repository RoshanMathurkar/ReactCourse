const User = (props)=>{
    const {name,location} = props;
    return (
        <div className="user-card">
            <h1>Name : {name}</h1>
            <h3>Location : {location}</h3>
            <h3>Contact : +91-7987900629</h3>
        </div>
    )
}

export default User;