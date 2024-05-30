<script setup>
import ControlPanel from './ControlPanel.vue'
import Field from './FieldComponent.vue'
import {ref, watch} from 'vue'
import { useCellsArray } from '@/useCellsArray.js'

const remainingMinesCount = ref(10);
const isTimerRunning = ref(false);
const isPlayerAliveOrDead = ref(true);
const isResetHappened = ref(false);
const isFirstCellClicked = ref(true);
const isGameWon = ref(false);

const emits = defineEmits([
  'showModalOnWin',]);

// Create initial array of cell objects with length of 72
const initialCells = () => {
  let initialCellsArray = [];
  for (let i = 0; i < 72; i++) {
    let cell = {
      id: i,
      isOpened: false,
      isTrapped: false,
      isFlagged: false,
      hintNumber: 0,
      adjacentCellsIds: [],
    }
    initialCellsArray.push(cell);
  }
  return initialCellsArray;
}

const { arr } = useCellsArray(initialCells());
const cells = ref(arr.value);

watch(isResetHappened, (newVal) => {
  if (newVal === true) {
    setTimeout(() => {
      changeIsResetHappened();
    }, 1000);
  }
}, {immediate: true});

const changeIsResetHappened = () => {
  isResetHappened.value = false;
}

function handleLeftClick(cellId) {

  // the first cell should never be trapped
  while (isFirstCellClicked.value) {
    if (cells.value[cellId].isTrapped) {
      resetCellsArray();
    } else {
      isFirstCellClicked.value = false;
    }
  }

  if (!cells.value[cellId].isOpened
    && !cells.value[cellId].isTrapped
    && isPlayerAliveOrDead.value && !isGameWon.value) {

    isTimerRunning.value = true;
    recursiveReveal(cellId);

  } else if (cells.value[cellId].isTrapped && isPlayerAliveOrDead.value && !isGameWon.value) {
    cells.value[cellId].isOpened = true;
    showMinesOnGameOver();
    isPlayerAliveOrDead.value = false; // kills the player
    isTimerRunning.value = false;
  }

}

function recursiveReveal(cellId) {
  if (!cells.value[cellId].isOpened) {
    cells.value[cellId].isFlagged = false;
    cells.value[cellId].isOpened = true;

    setupWinState();

    if (shouldReveal(cellId)) {
      const adjacentCells = cells.value[cellId].adjacentCellsIds;
      adjacentCells.forEach(adjCellId => {
        if (!cells.value[adjCellId].isOpened && !cells.value[adjCellId].isFlagged) {
          recursiveReveal(adjCellId);
        }
      });
    }
  }
}

function shouldReveal(cellId) {
  // Return true if the cell has no mines around it and isn't a mine itself
  return cells.value[cellId].hintNumber === 0
      && !cells.value[cellId].isTrapped
      && !cells.value[cellId].isFlagged;
}

function handleRightClick(cellId) {
  // if reset happened before, change to default state
  if (isResetHappened.value) {
    isResetHappened.value = false;
  }

  if (!cells.value[cellId].isOpened && isPlayerAliveOrDead.value && !isGameWon.value) {
    cells.value[cellId].isFlagged = !cells.value[cellId].isFlagged;
    if (cells.value[cellId].isTrapped) {
      // logic for the remaining mines count
      if (cells.value[cellId].isFlagged) {
        remainingMinesCount.value = remainingMinesCount.value - 1;
      } else {
        remainingMinesCount.value = remainingMinesCount.value + 1;
      }
    }
  }

  setupWinState();
}

const resetCellsArray = () => {
  const { arr } = useCellsArray(initialCells());
  cells.value = arr.value;
  remainingMinesCount.value = 10;
}

const resetTheGame = () => {
  console.log('resetTheGame begins');
  isResetHappened.value = true;
  remainingMinesCount.value = 10;
  isPlayerAliveOrDead.value = true;
  isTimerRunning.value = false;
  isFirstCellClicked.value = true;
  isGameWon.value = false;
  resetCellsArray();
}

const showMinesOnGameOver = () => {
  //const cellsArr = cells.value;
  for (let i = 0; i < cells.value.length; i++) {
    if (cells.value[i].isTrapped) {
      cells.value[i].isOpened = true;
    }
  }
}

const checkOpenedCellsWithoutFlag = () => {
  const expectedFlaggedMinesCount = 10;
  const expectedOpenedCells = cells.value.length - expectedFlaggedMinesCount;
  let openedCellsCount = 0;
  for (let i = 0; i < cells.value.length; i++) {
    if (cells.value[i].isOpened && !cells.value[i].isTrapped && !cells.value[i].isFlagged) {
      openedCellsCount++;
    }
  }
  return expectedOpenedCells === openedCellsCount;
}


const setupWinState = () => {
  if (remainingMinesCount.value === 0 && checkOpenedCellsWithoutFlag()) {
    isGameWon.value = true;
    isTimerRunning.value = false;
    emits('showModalOnWin');
  }
}

</script>

<template>
  <div class="minesweeper-wrapper">
    <ControlPanel
        :remaining-mines-count="remainingMinesCount"
        :is-timer-running="isTimerRunning"
        :is-player-alive-or-dead="isPlayerAliveOrDead"
        :is-reset-happened="isResetHappened"
        :is-game-won="isGameWon"
        @reset-game="resetTheGame"/>
    <Field
        :cells="cells"
        :is-reset-happened="isResetHappened"
        @open-cell="handleLeftClick"
        @flag-cell="handleRightClick" @click.prevent/>
  </div>
</template>

<style scoped>
.minesweeper-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: min-content;
  width: min-content;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  gap: 1rem;
}
</style>
