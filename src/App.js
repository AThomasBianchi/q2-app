import React from 'react';



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.changeDisplay = this.changeDisplay.bind(this);
        this.incrementIndex = this.incrementIndex.bind(this);
        this.decrementIndex = this.decrementIndex.bind(this);
        this.state = {
            cards: [
                {
                    country: "England",
                    capital: "London",
                },
                {
                    country: 'Canada',
                    capital: 'Ottawa'
                }
            ],
            showCountry: false,
            index: 1,
        }
    }

    changeDisplay() {
        this.setState({
            showCountry: !this.state.showCountry,
        })
    }

    incrementIndex() {
        if (this.state.index === this.state.cards.length - 1) {
            return;
        }
        let newindex = this.state.index + 1;
        this.setState({
            index: newindex,
        });
    }

    decrementIndex() {
        if (this.state.index === 0) return;
        let newindex = this.state.index - 1;
        this.setState({
            index: newindex,
        });
    }

    render() {
        const index = this.state.index;
        const display = this.state.showCountry ? this.state.cards[index].country : this.state.cards[index].capital;
        return (
            <div className="card-container">
                <div className="left-arrow" onClick={this.decrementIndex}>Previous card</div>
                <div className="card" onClick={this.changeDisplay}> {display}</ div>
                <div className="right-arrow" onClick={this.incrementIndex}>Next card</div>
            </div>
        );
    }
}