import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting up this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    topscore: 0
  };

  gOver = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({topscore: this.state.score}, function() {
        console.log(this.state.topscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickC = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gOver();
        }
      }
    });
  }
//  renders cards
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} topscore={this.state.topscore}>Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickC={this.clickC}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
