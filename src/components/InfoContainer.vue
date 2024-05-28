<script setup>
import InfoParagraph from "@/components/InfoParagraph.vue";
import InfoParagraphWithImage from "@/components/InfoParagraphWithImage.vue";
import SecondaryHeader from "@/components/SecondaryHeader.vue";
import CellItem from "@/components/CellItem.vue";
import {ref} from "vue";

const flagTheCell = ref(false);

</script>

<template>
  <div class="info-container">
    <InfoParagraph>
      Welcome to Minesweeper! Here's a quick guide to get you started:
    </InfoParagraph>
    <SecondaryHeader>🗿 Objective 🗿</SecondaryHeader>
    <InfoParagraph>Reveal all non-mine squares and flag all mines without triggering any of them.</InfoParagraph>
    <SecondaryHeader>📋 Game Rules 📋</SecondaryHeader>
    <InfoParagraph>
      <span class="bold">☞ Starting the game:</span>
       Click on any square to start. The first square you open will never contain a mine.
    </InfoParagraph>
    <InfoParagraphWithImage>
      <template #paragraph>
        <div class="first-column">
          <div class="inline">
            <span class="bold">☞ Numbers on squares:</span>
            A revealed square may contain a number indicating how many mines are adjacent to it (including diagonally).
          </div>
          <img class="arrow" src="../assets/arrow.svg" alt="arrow" />
        </div>
      </template>
      <template #image>
        <img src="../assets/adjust-numbers.png" alt="Number of the adjacent mines in action">
      </template>
    </InfoParagraphWithImage>
    <InfoParagraphWithImage>
      <template #image>
        <div class="demo-column">
          <CellItem
              :id="1"
              :hint-number="0"
              :is-flagged="flagTheCell"
              :is-opened="false"
              :is-trapped="true" @click.right.prevent="flagTheCell = !flagTheCell">
          </CellItem>
          <p class="action-text">Flag me!</p>
        </div>

      </template>
      <template #paragraph>
        <div class="right-aligned">
          <span class="bold">☞ Flagging mines:</span>
          Right-click on a square to flag it as a mine.
        </div>
      </template>
    </InfoParagraphWithImage>
    <SecondaryHeader>🔎 Tips and Tricks 🔎</SecondaryHeader>
    <InfoParagraph>
      <span class="bold">☆ Start from the corners:</span>
      Opening corners can often reveal large areas quickly and give you more information to work with.
    </InfoParagraph>
    <InfoParagraph>
      <span class="bold">☆ Flag suspected mines:</span>
      Right-click to flag squares you suspect contain mines. This helps you keep track of dangerous areas.
    </InfoParagraph>
    <InfoParagraphWithImage>
      <template #paragraph>
        <div class="inline">
          <span class="bold">☆ Look for patterns:</span>
          Common patterns, such as a
          <span class="action-text">1 — 2 — 1</span> or
          <span class="action-text">1 — 1 — 1</span> sequence, can help you identify safe squares and mines.
        </div>
      </template>
      <template #image>
        <img src="../assets/corner-mine-explained.png" alt="Easy corner mine pattern">
      </template>
    </InfoParagraphWithImage>
    <InfoParagraph>
      <span class="bold">☆ Chain reactions:</span>
      Revealing a square with no adjacent mines will automatically reveal surrounding squares. Use this to clear large areas quickly.
    </InfoParagraph>
    <InfoParagraphWithImage>
      <template #paragraph>
        <div class="inline">
          <span class="bold">☆ Logical deduction:</span>
          Use logic to deduce the location of mines rather than guessing. For example, if a <span class="action-text">3</span> is next to three unopened squares, all three must be mines.
        </div>
      </template>
      <template #image>
        <img src="../assets/trapped-for-sure.png" alt="Deduction cell tactics">
      </template>
    </InfoParagraphWithImage>
    <SecondaryHeader>⏺ Records ⏺</SecondaryHeader>
    <InfoParagraph>
      Your win and loss times are recorded and stored locally, so you can track your progress and try to improve your skills.
    </InfoParagraph>
    <InfoParagraph class="action-text centered-text">
      Good luck, and enjoy the game!
    </InfoParagraph>
  </div>

</template>

<style scoped>
.info-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.bold {
  font-weight: bold;
}

img {
  width: 14rem;
  height: 14rem;
}

.inline {
  display: inline;
}

.arrow {
  width: 7.5rem;
  height: 7.5rem;
  align-self: center;
}

.first-column {
  display: flex;
  flex-direction: column;
}

.demo-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: dotted 2px #e03131;
  height: max-content;
  width: max-content;
  padding: 0.5rem;
  border-radius: 6px;
  margin-left: 2rem;
}

.action-text {
  font-weight: bold;
  color: #e07070;
}

.centered-text {
  text-align: center;
  font-size: large;
}
</style>
