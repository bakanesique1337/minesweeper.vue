<script setup>
import MinesweeperLogoIcon from "@/components/icons/MinesweeperLogoIcon.vue";

</script>

<template>
  <div class="game-header">
    <h1>Minesweeper</h1>
    <MinesweeperLogoIcon></MinesweeperLogoIcon>
  </div>

</template>

<style scoped>

.game-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: calc(2.5vmin);
  color: white;
  letter-spacing: 0.05rem;
  text-shadow: #fff200 0 2px 10px, #990239 4px 0 10px;
}

</style>
