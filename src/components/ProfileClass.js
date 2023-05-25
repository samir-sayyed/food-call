import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "samir",
        location: "India",
        avtar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Profile class</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h1>Name: {this.state.userInfo.name}</h1>
        <h2>Location : {this.state.userInfo.name}</h2>
      </div>
    );
  }
}

export default ProfileClass;
