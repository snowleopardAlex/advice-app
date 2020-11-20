import React from "react";
import axios from "axios";
import './App.css';
import { Card, Button } from "react-bootstrap";

class App extends React.Component {
  state = {
    advice: ''
  };

  componentDidMount() {
    // we need to call function fetchAdvice inside componentdidmount
    this.fetchAdvice();

  }
  // we need separated class method
  // we need const - method that belongs to the class
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
       .then((response) => {
         // destructuring data
         const { advice } = response.data.slip;
         //console.log(response.data.slip.advice);
         // destructuring data
         this.setState({
             advice
         });
         // this.setState({
         //  advice: advice
         // })
       })
       .catch((error) => {
         console.log(error);
       });
  }

  render() {
  
    const { advice } = this.state;
  
    return (
      <div className="app">
        <Card className="mt-4 ml-4 mr-4 mb-4">
          <Card.Body>
            <Card.Text>
              {advice}
            </Card.Text>
            <Button className="mt-2" onClick={this.fetchAdvice} variant="secondary">Next</Button>
          </Card.Body>
        </Card>
      </div>
      /*<h1>{this.state.advice}</h1> */
    );
  }
}

export default App;


