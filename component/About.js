import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div className="about">
            <h1>About Us</h1>
            <User name={"Ron Matt"} location={"Jabalpur(M.P.)"}/>

            <UserClass name={"Ron Matt"} location={"Jabalpur(M.P.)"} />
        </div>
    )
}

export default About;