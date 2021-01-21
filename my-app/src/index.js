import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


function Card(props) {
    let buttonState = props.hideVal ? "on-button" : "off-button";
    return (
        <button className={buttonState} onClick={props.onClick}>
            {props.name}
        </button>
    );
}

class Board extends React.Component {

    /* Private Instance Methods */

    // Fisher-Yates Shuffle Algorithm
    #shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // while elements remain to shuffle
        while (0 !== currentIndex) {
            // pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // Swap 
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    }

    // Function to generate names
    #generateNames(n) {
        possibleNames = Array.from(Array(n/2).keys()); // make array with nums 1 through n/2
        names = possibleNames.concat(possibleNames); // making paired names by concatenating possibleNames with itself
        shuffle(names); // Randomizing order of names 
        return names; // returning names 
    }

    /* constructor  and Public Field*/
    numCards = 16;

    constructor(props) {
        super(props);
        this.state = {
            shown: Array(this.numCards).fill(false),
            names: generateNames(this.numCards),
            flipped: "",
        };
    }

    /* Public methods */ 
    // setter to change number of cards on board potentially
    setNumCards(n) {
        this.numCards = n;
        this.setState({
            shown: Array(n).fill(false),
            names: generateNames(n),
            flipped: "",
        });
    }

    handleCardClick(i) {
        let showBtn = this.state.shown.slice();
        shownBtn[i] = true;
        this.setState({
            shown: shownBtn,
        });
    }

    /* Render Methods */
    renderCard(i) {
        return (
            <Card 
                hideVal={this.state.shown[i]}
                name={this.state.names[i]}
                onClick={() => this.handleCardClick(i)}
            />
        );
    }
    render() {
        return (
            null
        );        
    }
}

ReactDOM.render(<Board/>, document.getElementById('root'));