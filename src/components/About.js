import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div>
        <h1>This is about page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="font-bold text-lg">
              {user.name} - {user.email}
            </h1>
          )}
        </UserContext.Consumer>
        <ProfileClass name={"samir"} />
      </div>
    );
  }
}

export default About;
