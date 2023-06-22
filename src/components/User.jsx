import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() { //it will run whenever the component is removed(UnMounted) from the UI
    console.log("User will UnMount");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
