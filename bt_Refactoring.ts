
export class TennisGames {
    player1 : string;
    player2 : string;
    playerPoints1 : number;
    playerPoints2 : number;
    score: string = '';
    constructor(player1 : string,player2 : string,points1 : number,points2 : number ) {
        this.player1 = player1;
        this.player2 = player2;
        this.playerPoints1 = points1;
        this.playerPoints2 = points2;

    }

    startGame() {
        let equalPoints = this.playerPoints1 == this.playerPoints2;
        let comparePoints = this.playerPoints1 >= 4 || this.playerPoints2 >= 4;
        if (equalPoints) {
            this.player1Scores();
        }
        else if (comparePoints) {
            this.takePlaceGame()
        }
        else {
            this.continue()
        }
    }

    player1Scores() {
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
    }



    takePlaceGame() {
            let minusResult = this.playerPoints1 - this.playerPoints2;
            if (minusResult == 1) this.score = "Advantage player1";
            else if (minusResult == -1) this.score = "Advantage player2";
            else if (minusResult >= 2) this.score = "Win for player1";
            else this.score = "Win for player2";
    }

    continue() {
        for (let i = 1; i < 3; i++) {
            let tempScore = 0;
            if (i == 1) tempScore = this.playerPoints1;
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
    }
}