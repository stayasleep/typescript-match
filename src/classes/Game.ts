// import ScoreModule = require("./ScoreBoard");

import {ScoreBoard} from "./ScoreBoard";
// import ScoreBoard from "./ScoreBoard";
// import Cards from "./Cards";
import {Cards} from "./Cards";
// import Cards = require("./Cards");


class Game {
    board: HTMLDivElement;
    mode: number;
    constructor(difficulty: number){
        this.board = document.createElement('div');
        this.mode = difficulty
    }

    init(){
        //make board
        this.createGameBoard();
        //instantiate cards
        const cards: Cards = new Cards(this.board); //object with all cards
        const score: ScoreBoard = new ScoreBoard(0); //object for scoreboard
        //get the cards to do a thing
        cards.init();
        score.init();
        //make cards(ref to board)
    }

    createGameBoard(): void {
        this.board.setAttribute("class", "game-container");
        this.board.style.border ="3px solid black";
        this.board.style.height = "500px";
        //attach that to parent
        document.getElementsByClassName("game-root")[0].appendChild(this.board);
    }

}
const x = new Game(2);
x.init();