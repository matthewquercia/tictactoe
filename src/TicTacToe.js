import React from 'react';
import './Styles.css'

class TicTacToe extends React.Component {
    state = {
        playersTurn: 'O',
        board: [["","",""],["","",""],["","",""]],
        turn: 1
    }

    ConsoleLog = (row,col) => {
        let current = this.state.board;

        if(this.state.playersTurn === 'O'){
            if(!current[row][col]){
                current[row][col] = 'X'
                this.setState({board: current, playersTurn: 'X', turn: this.state.turn+1})
            }
        } else {
            if(!current[row][col]){
                current[row][col] = 'O'
                this.setState({board: current, playersTurn: 'O', turn: this.state.turn+1})
            }
        }
        this.validateWinner(row,col);
    }

    validateWinner = (row,col) => {
        const checkRow = this.state.board[row].every(val => val === this.state.board[row][0]);
        const checkColumn = this.state.board.every(val => val[col] === this.state.board[row][col])
        const checkDiag1 = this.state.board.every((val, idx) => val[idx] === this.state.board[row][col]);
        const checkDiag2 = this.state.board.every((val, idx, arr) => val[arr.length - (1 + idx)] === this.state.board[row][col])

        if(checkRow === true || checkColumn === true || checkDiag1 === true || checkDiag2 === true){
            console.log('Winner!!!!!!!!');
        } else {
            console.log('Game still in progress...');
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td onClick={() => this.ConsoleLog(0,0)}>{this.state.board[0][0]}</td>
                            <td onClick={() => this.ConsoleLog(0,1)}>{this.state.board[0][1]}</td>
                            <td onClick={() => this.ConsoleLog(0,2)}>{this.state.board[0][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => this.ConsoleLog(1,0)}>{this.state.board[1][0]}</td>
                            <td onClick={() => this.ConsoleLog(1,1)}>{this.state.board[1][1]}</td>
                            <td onClick={() => this.ConsoleLog(1,2)}>{this.state.board[1][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={() => this.ConsoleLog(2,0)}>{this.state.board[2][0]}</td>
                            <td onClick={() => this.ConsoleLog(2,1)}>{this.state.board[2][1]}</td>
                            <td onClick={() => this.ConsoleLog(2,2)}>{this.state.board[2][2]}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
};

export default TicTacToe;
