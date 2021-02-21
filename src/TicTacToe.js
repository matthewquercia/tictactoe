import React from 'react';
import './Styles.css'

class TicTacToe extends React.Component {
    state = {
        playersTurn: 'X',
        board: [["","",""],["","",""],["","",""]],
        turn: 1,
        gameOver: false,
        winner: ''
    }

    populateBoard = (row,col) => {
        if(this.state.gameOver === false){
            let current = this.state.board;

            if(this.state.playersTurn === 'X'){
                if(!current[row][col]){
                    current[row][col] = 'X'
                    this.setState({board: current, playersTurn: 'O', turn: this.state.turn+1})
                }
            } else {
                if(!current[row][col]){
                    current[row][col] = 'O'
                    this.setState({board: current, playersTurn: 'X', turn: this.state.turn+1})
                }
            }
    
            if(this.state.turn > 4){
                this.validateWinner(row,col, this.state.playersTurn);
            } 
        }
    }

    validateWinner = (row,col, player) => {
        const checkRow = this.state.board[row].every(val => val === this.state.board[row][0]);
        const checkColumn = this.state.board.every(val => val[col] === this.state.board[row][col])
        const checkDiag1 = this.state.board.every((val, idx) => val[idx] === this.state.board[row][col]);
        const checkDiag2 = this.state.board.every((val, idx, arr) => val[arr.length - (1 + idx)] === this.state.board[row][col])

        if(checkRow === true || checkColumn === true || checkDiag1 === true || checkDiag2 === true){
            this.endGame(player);
        }
        else if(this.state.turn === 9){
            this.setState({gameOver: true, winner: 'Draw!'})
        }
    }

    endGame = (player) => {
        this.setState({gameOver: true, winner: player + ' Wins!'})
    }

    resetGame = () => {
        this.setState({playersTurn: 'X', board: [["","",""],["","",""],["","",""]], turn: 1, gameOver: false, winner: ''});
    }

    render() {
        return (
            <div className="center-div">
                <table className="center-table">
                    <thead>
                        <tr>
                            <td onClick={() => this.populateBoard(0, 0)}>{this.state.board[0][0]}</td>
                            <td onClick={() => this.populateBoard(0, 1)}>{this.state.board[0][1]}</td>
                            <td onClick={() => this.populateBoard(0, 2)}>{this.state.board[0][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => this.populateBoard(1, 0)}>{this.state.board[1][0]}</td>
                            <td onClick={() => this.populateBoard(1, 1)}>{this.state.board[1][1]}</td>
                            <td onClick={() => this.populateBoard(1, 2)}>{this.state.board[1][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => this.populateBoard(2, 0)}>{this.state.board[2][0]}</td>
                            <td onClick={() => this.populateBoard(2, 1)}>{this.state.board[2][1]}</td>
                            <td onClick={() => this.populateBoard(2, 2)}>{this.state.board[2][2]}</td>
                        </tr>
                    </thead>
                </table>
                <h1>{this.state.winner}</h1>
                <button onClick={() => this.resetGame()}>Reset board</button>
            </div>
        )
    }
};

export default TicTacToe;
