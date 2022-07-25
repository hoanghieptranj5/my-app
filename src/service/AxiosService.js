import { Component } from "react";
import logo from "../logo.svg";

export default class AxiosService extends Component {
  WAIT_TIME = 3000;
  URL = "https://zn3bygyjy5.execute-api.us-west-1.amazonaws.com/Prod/api/Values";
  LOCAL = "https://localhost:5001/api/Values";

  state = {
    persons: [],
    loaded: false
  }

  componentDidMount() {
    fetch(this.URL)
      .then(res => res.json())
      .then(res => {
        const persons = res;
        this.setState({
          persons,
          loaded: true
        })
      }, error => {
        console.error(error);
      });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <img src={logo} className="App-logo" alt="logo"/>
      )
    } else {
      return (<ul>
        {this.state.persons.map(p => <li>{p}</li>)}
      </ul>);
    }
  }
}