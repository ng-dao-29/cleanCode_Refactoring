"use strict";
// export class TennisGame {
//     score: string = '';
//
//     getScore(player1Name: string,
//              player2Name: string,
//              m_score1: number,
//              m_score2: number) {
//         let tempScore = 0;
//
//         if (m_score1 == m_score2) {
//             switch (m_score1) {
//                 case 0:
//                     this.score = "Love-All";
//                     break;
//                 case 1:
//                     this.score = "Fifteen-All";
//                     break;
//                 case 2:
//                     this.score = "Thirty-All";
//                     break;
//                 case 3:
//                     this.score = "Forty-All";
//                     break;
//                 default:
//                     this.score = "Deuce";
//                     break;
//
//             }
//         } else if (m_score1 >= 4 || m_score2 >= 4) {
//             let minusResult = m_score1 - m_score2;
//             if (minusResult == 1) this.score = "Advantage player1";
//             else if (minusResult == -1) this.score = "Advantage player2";
//             else if (minusResult >= 2) this.score = "Win for player1";
//             else this.score = "Win for player2";
//         } else {
//             for (let i = 1; i < 3; i++) {
//                 if (i == 1) tempScore = m_score1;
//                 else {
//                     this.score += "-";
//                     tempScore = m_score2;
//                 }
//                 switch (tempScore) {
//                     case 0:
//                         this.score += "Love";
//                         break;
//                     case 1:
//                         this.score += "Fifteen";
//                         break;
//                     case 2:
//                         this.score += "Thirty";
//                         break;
//                     case 3:
//                         this.score += "Forty";
//                         break;
//                 }
//             }
//         }
//     }
// }
exports.__esModule = true;
exports.TennisGames = void 0;
var TennisGames = /** @class */ (function () {
    function TennisGames(player1, player2, points1, points2) {
        this.score = '';
        this.player1 = player1;
        this.player2 = player2;
        this.playerPoints1 = points1;
        this.playerPoints2 = points2;
    }
    TennisGames.prototype.startGame = function () {
        var equalPoints = this.playerPoints1 == this.playerPoints2;
        var comparePoints = this.playerPoints1 >= 4 || this.playerPoints2 >= 4;
        if (equalPoints) {
            this.player1Scores();
        }
        else if (comparePoints) {
            this.takePlaceGame();
        }
        else {
            this["continue"]();
        }
    };
    TennisGames.prototype.player1Scores = function () {
        switch (this.playerPoints1) {
            case 0:
                this.score = "Love-All";
                break;
            case 1:
                this.score = "Fifteen-All";
                break;
            case 2:
                this.score = "Thirty-All";
                break;
            case 3:
                this.score = "Forty-All";
                break;
            default:
                this.score = "Deuce";
                break;
        }
    };
    TennisGames.prototype.takePlaceGame = function () {
        var minusResult = this.playerPoints1 - this.playerPoints2;
        if (minusResult == 1)
            this.score = "Advantage player1";
        else if (minusResult == -1)
            this.score = "Advantage player2";
        else if (minusResult >= 2)
            this.score = "Win for player1";
        else
            this.score = "Win for player2";
    };
    TennisGames.prototype["continue"] = function () {
        for (var i = 1; i < 3; i++) {
            var tempScore = 0;
            if (i == 1)
                tempScore = this.playerPoints1;
            else {
                this.score += "-";
                tempScore = this.playerPoints2;
            }
            switch (tempScore) {
                case 0:
                    this.score += "Love";
                    break;
                case 1:
                    this.score += "Fifteen";
                    break;
                case 2:
                    this.score += "Thirty";
                    break;
                case 3:
                    this.score += "Forty";
                    break;
            }
        }
    };
    return TennisGames;
}());
exports.TennisGames = TennisGames;
