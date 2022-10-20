"use strict";
// import {TennisGame} from "./bt_Refactoring";
//
// let game = new TennisGame();
// game.getScore('player1', 'player2', 6, 8);
// console.log(game.score)
exports.__esModule = true;
var bt_Refactoring_1 = require("./bt_Refactoring");
var playgame = new bt_Refactoring_1.TennisGames("gió", "bão", 6, 8);
playgame.startGame();
console.log(playgame.score);
