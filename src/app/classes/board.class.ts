export class Board {
  board: {
    isFilled: boolean,
    playerId: number | null,
  }[][] = []

  numberOfRows: number = 6;
  numberOfColumns: number = 7;

  constructor() {
    this.reset()
  }

  reset(): void {
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
      for (let j = 0; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j]
        if (slot.isFilled && slot.playerId === playerId) {
          counter++
        } else if (counter === 4) {
          return true;
        } else {
          counter = 0;
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
        } else if (counter === 4) {
          return true;
        } else {
          counter = 0;
        }
      }
    }
    counter = 0
    // Left Diagonal
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 0; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j];
        if (i === j) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 1; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j];
        if (i + 1 === j) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 1; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j];
        if (i + 2 === j) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 0; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j];
        if (i === j + 1) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    // Right Diagonal
    for (let i = 0; i < this.numberOfColumns; i++) {
      for (let j = 0; j < this.numberOfRows; j++) {
        const slot = this.board[j][i];
        if (i + j === this.numberOfRows - 1) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfColumns; i++) {
      for (let j = 0; j < this.numberOfRows; j++) {
        const slot = this.board[j][i];
        if (i + 1 + j === this.numberOfRows - 1) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfColumns; i++) {
      for (let j = 0; j < this.numberOfRows; j++) {
        const slot = this.board[j][i];
        if (i + j + 1 === this.numberOfRows + 1) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 0; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j];
        if (i + j === this.numberOfColumns - 1 ) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 0; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j];
        if (i + 1 + j === this.numberOfColumns - 1) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 0; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j];
        if (i + 2 + j === this.numberOfColumns - 1) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 0; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j];
        if (i + j + 1 === this.numberOfColumns + 1) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    counter = 0
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 0; j < this.numberOfColumns; j++) {
        const slot = this.board[i][j];
        if (i + j + 2 === this.numberOfColumns + 1) {
          if (slot.isFilled && slot.playerId === playerId) {
            counter++;
          } else if (counter === 4) {
            return true;
          } else {
            counter = 0;
          }
        }
      }
    }
    return false;
  }
}
