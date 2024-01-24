export class Board {
    grid: {
        isFilled: boolean,
        playerId: number | null,
    }[][] = []

    private numberOfRows: number = 7;
    private numberOfColumns: number = 6;

    constructor() {
        this.reset()
        console.log(this.grid)
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
            this.grid[i] = [];
            for (let j = 0; j < this.numberOfColumns; j++) {
                this.grid[i][j] = {
                    isFilled: false,
                    playerId: null
                }
            }
        }
    }

    drop(row: number, column: number, playerId: number): void {
        this.grid[row][column] = {
            isFilled: true,
            playerId: playerId
        }
    }

    winnerCheck(playerId: number): boolean {
        let counter = 0;

        // Rows
        for (let i = 0; i < this.numberOfRows; i++) {
            const row = this.grid[i];

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
                const slot = this.grid[j][i];
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
                const slot = this.grid[i][j];
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
                const slot = this.grid[i][j];
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
