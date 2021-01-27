import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/* Private Instance Methods - Which Currently Do not work :( */
// Fisher-Yates Shuffle Algorithm
function shuffle(array) {
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

// // Function to generate names
function generateNames(n) {
    let possibleNames = Array.from(Array(n/2).keys()); // make array with nums 1 through n/2
    console.log(possibleNames)
    let names = [...possibleNames, ...possibleNames]; // making paired names by concatenating possibleNames with itself
    // console.log([...possibleNames, ...possibleNames]);dd
    console.log(names)
    shuffle(names); // Randomizing order of names 
    return names; // returning names   
}

function Card(props) {
    let buttonState = props.hideVal ? "on-button" : "off-button";
    return (
        <button className={buttonState} onClick={props.onClick}>
            {props.name}            
        </button>
    );
}

class Board extends React.Component {


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
    // setNumCards(n) {
    //     this.numCards = n;
    //     this.setState({
    //         shown: Array(n).fill(false),
    //         names: generateNames(n),
    //         flipped: "",
    //     });
    // }

    handleCardClick(i) {
        let shownBtn = this.state.shown.slice();
        shownBtn[i] = this.state.shown[i] ? false: true;
        console.log(this.state.names[i])
        this.setState({
            shown: shownBtn,
        });
    }

    /* Render Methods */
    renderCards() {
        const cardArray = Array.from(Array(this.numCards).keys());
        return cardArray.map((i) => {
            return (
                <Card 
                    hideVal={this.state.shown[i]}
                    name={this.state.names[i]}
                    onClick={() => this.handleCardClick(i)}
                    key={i}
                />
            );
        });
    }
    
    render() {
        return (
            <div className="board">
                <b> MATCHING GAME </b>
                {/* {console.log("here?")} */}
                <div className="cards">
                    {this.renderCards()}
                </div>
            </div>
        );        
    }
}

ReactDOM.render(<Board/>, document.getElementById('root'));