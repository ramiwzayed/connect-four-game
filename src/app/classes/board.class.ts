export class Board {
    board: {
        isFilled: boolean,
        playerId: number | null,
    }[][] = []

    numberOfRows: number = 7;
    numberOfColumns: number = 6;

    constructor() {
        this.reset()
        console.log(this.board)
    }

    reset(): void {
        // Rows
        // for (let i = 0; i < this.numberOfRows; i++) {
        //     this.grid[i] = [];
        //     for (let j = 0; j < this.numberOfColumns; j++) {
        //         this.grid[i][j] = {
        //             isFilled: i === 1 && j < 4,
        //             playerId: i === 1 && j < 4 ? 1 : null
        //         }
        //     }
        // }

        // Columns
        // for (let i = 0; i < this.numberOfRows; i++) {
        //     this.grid[i] = [];
        //     for (let j = 0; j < this.numberOfColumns; j++) {
        //         this.grid[i][j] = {
        //             isFilled: j === 6,
        //             playerId: j === 6 ? 1 : null
        //         }
        //     }
        // }

        // Diagonal
        // for (let i = 0; i < this.numberOfRows; i++) {
        //     this.grid[i] = [];
        //     for (let j = 0; j < this.numberOfColumns; j++) {
        //         this.grid[i][j] = {
        //             isFilled: i === j,
        //             playerId: i === j ? 1 : null
        //         }
        //     }
        // }
        // for (let i = 0; i < this.numberOfRows; i++) {
        //     this.grid[i] = [];
        //     for (let j = 0; j < this.numberOfColumns; j++) {
        //         this.grid[i][j] = {
        //             isFilled: i + j === this.numberOfColumns - 1,
        //             playerId: i + j === this.numberOfColumns - 1 ? 1 : null
        //         }
        //     }
        // }

        for (let i = 0; i < this.numberOfRows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.numberOfColumns; j++) {
                this.board[i][j] = {
                    isFilled: false,
                    playerId: null
                }
            }
        }
    }

    drop(row: number, column: number, playerId: number): void {
        this.board[row][column] = {
            isFilled: true,
            playerId: playerId
        }
    }

    winnerCheck(playerId: number): boolean {
        let counter = 0;

        // Rows
        for (let i = 0; i < this.numberOfRows; i++) {
            const row = this.board[i];

            for (let j = 0; j < row.length; j++) {
                const slot = row[0];
                if (slot.isFilled && slot.playerId === playerId) {
                    counter++
                } else {
                    counter = 0;
                }
                if (counter === 4) {
                    return true;
                }
            }
        }

        counter = 0

        // Columns
        for (let i = 0; i < this.numberOfColumns; i++) {
            for (let j = 0; j < this.numberOfRows; j++) {
                const slot = this.board[j][i];
                if (slot.isFilled && slot.playerId === playerId) {
                    counter++
                } else {
                    counter = 0;
                }
                if (counter === 4) {
                    return true;
                }
            }
        }

        counter = 0

        // Diagonal
        for (let i = 0; i < this.numberOfRows; i++) {
            for (let j = 0; j < this.numberOfColumns; j++) {
                const slot = this.board[i][j];
                if (i === j) {
                    if (slot.isFilled && slot.playerId === playerId) {
                        counter++;
                    } else {
                        counter = 0;
                    }
                    if (counter === 4) {
                        return true;
                    }
                }
            }
        }

        counter = 0

        for (let i = 0; i < this.numberOfRows; i++) {
            for (let j = 0; j < this.numberOfColumns; j++) {
                const slot = this.board[i][j];
                if (i + j === this.numberOfColumns - 1) {
                    if (slot.isFilled && slot.playerId === playerId) {
                        counter++;
                    } else {
                        counter = 0;
                    }
                    if (counter === 4) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}
