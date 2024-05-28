import {ref} from "vue";

export function useCellsArray(cellsArray) {
  const initialCellsArray = placeMinesInRandomCells(cellsArray);
  // rows for hint numbers and neighbours identification
  const rows = () => {
    const newRows = [];
    for (let i = 0; i < initialCellsArray.length; i += 8) { // Assuming each row has 9 cells
      newRows.push(initialCellsArray.slice(i, i + 8));
    }
    //console.log("newRows", newRows);
    return newRows;
  };
  const flattenCellsArrayAfterHinting = () => {
    let hintedRows = setHintNumbers(rows());
    return hintedRows.flat();
  }
  const arr = ref(flattenCellsArrayAfterHinting());

  return { arr }

}

// Choose random 10 cells as traps in cell object array
function placeMinesInRandomCells(cellsArray) {
  //let trappedCellsAmount = 0;
  let initialCellsArrayWithMines = [...cellsArray];
  let selected = [];

  for (let i = 0; i < 10; i++) {
    // Randomly select an index to remove
    let randomIndex = Math.floor(Math.random() * initialCellsArrayWithMines.length);

    // Splice out the element at the random index, remove 1 element
    let [selectedCell] = initialCellsArrayWithMines.splice(randomIndex, 1);
    selected.push(selectedCell);

    // Mark the removed element as trapped
    selectedCell.isTrapped = true;
    //trappedCellsAmount++;
  }

  //console.log("Selected cells: ", selected);
  //console.log('trappedCellsAmount in the end of the placeMinesInRandomCells', trappedCellsAmount);

  // Combine and sort the array based on the id to maintain the original order
  cellsArray = [...selected, ...initialCellsArrayWithMines].sort((a, b) => a.id - b.id);
  //console.log('cellsArray: ', cellsArray);

  return cellsArray;
}

// Set hint number in every cell of array of rows
function setHintNumbers(rows) {
  let currentRows = [...rows];
  // rows
  for (let i = 0; i < currentRows.length; i++) {
    // cells
    for (let j = 0; j < currentRows[i].length; j++) {
      let currentCell = currentRows[i][j];
      let hintNumber = 0;
      const cellId = currentRows[i][j].id;
      //console.log("current cellId: ", cellId);
      // if cell has a left neighbor (not the first cell in the row)
      if (j !== 0) {
        if (currentCell.adjacentCellsIds.indexOf(currentRows[i][j - 1].id) < 0) {
          currentCell.adjacentCellsIds.push(currentRows[i][j - 1].id);
        }
        // if left neighbor is a mine
        //console.log("cell has a left neighbor!");
        if (currentRows[i][j - 1].isTrapped) {
          hintNumber++;
          //console.log("current hintNumber: ", hintNumber);
        }
      }
      // if cell has a top left neighbor (not the first cell in the row & not in the first row)
      if (i !== 0 && j !== 0) {
        if (currentCell.adjacentCellsIds.indexOf(currentRows[i - 1][j - 1].id) < 0) {
          currentCell.adjacentCellsIds.push(currentRows[i - 1][j - 1].id);
        }
        // if top left neighbor is a mine
        //console.log("cell has a top left neighbor!");
        if (currentRows[i - 1][j - 1].isTrapped) {
          hintNumber++;
          //console.log("current hintNumber: ", hintNumber);
        }
      }
      // if cell has a top neighbor (not in the first row)
      if (i !== 0) {
        if (currentRows[i][j].adjacentCellsIds.indexOf(currentRows[i - 1][j].id) < 0) {
          currentRows[i][j].adjacentCellsIds.push(currentRows[i - 1][j].id);
        }
        // if top neighbor is a mine
        //console.log("cell has a top neighbor!");
        if (currentRows[i - 1][j].isTrapped) {
          hintNumber++;
          //console.log("current hintNumber: ", hintNumber);
        }
      }
      // if cell has a top right neighbor (not in the first row & not the last cell in row)
      if (i !== 0 && j !== 7) {
        if (currentRows[i][j].adjacentCellsIds.indexOf(currentRows[i - 1][j + 1].id) < 0) {
          currentRows[i][j].adjacentCellsIds.push(currentRows[i - 1][j + 1].id);
        }
        // if top right neighbor is a mine
        //console.log("cell has a top right neighbor!");
        if (currentRows[i - 1][j + 1].isTrapped) {
          hintNumber++;
          //console.log("current hintNumber: ", hintNumber);
        }
      }
      // if cell has right neighbor (not the last cell in row)
      if (j !== 7) {
        if (currentRows[i][j].adjacentCellsIds.indexOf(currentRows[i][j + 1].id) < 0) {
          currentRows[i][j].adjacentCellsIds.push(currentRows[i][j + 1].id);
        }
        // if right neighbor is a mine
        //console.log("cell has a right neighbor!");
        //console.log('right neighbor object: ', currentRows[i][j]);
        if (currentRows[i][j + 1].isTrapped) {
          hintNumber++;
          //console.log("current hintNumber: ", hintNumber);
        }
      }
      // if cell has bottom right neighbor (not the last cell in row & not in the last row)
      if (i !== 8 && j !== 7) {
        if (currentRows[i][j].adjacentCellsIds.indexOf(currentRows[i + 1][j + 1].id) < 0) {
          currentRows[i][j].adjacentCellsIds.push(currentRows[i + 1][j + 1].id);
        }
        // if bottom right neighbor is a mine
        //console.log("cell has a bottom right neighbor!");
        if (currentRows[i + 1][j + 1].isTrapped) {
          hintNumber++;
          //console.log("current hintNumber: ", hintNumber);
        }
      }
      // if cell has bottom neighbor (not in the last row)
      if (i !== 8) {
        if (currentRows[i][j].adjacentCellsIds.indexOf(currentRows[i + 1][j].id) < 0) {
          currentRows[i][j].adjacentCellsIds.push(currentRows[i + 1][j].id);
        }
        // if bottom neighbor is a mine
        //console.log("cell has a bottom neighbor!");
        if (currentRows[i + 1][j].isTrapped) {
          hintNumber++;
          //console.log("current hintNumber: ", hintNumber);
        }
      }
      // if cell has bottom left neighbor (not in the last row & not the first cell in the row)
      if (i !== 8 && j !== 0) {
        if (currentRows[i][j].adjacentCellsIds.indexOf(currentRows[i + 1][j - 1].id) < 0) {
          currentRows[i][j].adjacentCellsIds.push(currentRows[i + 1][j - 1].id);
        }
        // if bottom left neighbor is a mine
        //console.log("cell has a bottom left neighbor!");
        if (currentRows[i + 1][j - 1].isTrapped) {
          hintNumber++;
          //console.log("current hintNumber: ", hintNumber);
        }
      }
      currentRows[i][j].hintNumber = hintNumber;
      //console.log("current cell object after hinting: ", currentRows[i][j]);
    }
  }
  return currentRows;
}
