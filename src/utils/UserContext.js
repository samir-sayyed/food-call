import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy name",
    email: "dummyemail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
