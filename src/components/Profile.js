import { useState } from "react";

const Profile = (props) => {
  [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile</h1>
      <h3>{props.name}</h3>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(1)}>Increament</button>
    </div>
  );
};

export default Profile;
