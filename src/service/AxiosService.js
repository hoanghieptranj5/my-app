import { Component } from "react";
import logo from "../logo.svg";
import { getEndpoint } from "../url/backendServices";

export default class AxiosService extends Component {
  WAIT_TIME = 3000;
  GET_VALUE_URL = 'Values';

  state = {
    persons: [],
    loaded: false
  }

  componentDidMount() {
    fetch(getEndpoint(this.GET_VALUE_URL))
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