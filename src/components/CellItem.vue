<script setup>
import {ref} from "vue";

defineProps({
  id: Number,
  isOpened: Boolean,
  isTrapped: Boolean,
  isFlagged: Boolean,
  hintNumber: Number,
  isResetHappened: Boolean,
});


const closedClass = ref('closed');
const trappedClass = ref('trapped');
const emptyClass = ref('empty');
const flaggedClass = ref('flagged');
const animationResetClass = ref('scale-animation');

</script>

<template>
    <div class="cell" :class="[isResetHappened ?
    animationResetClass : isOpened
    ? (isTrapped ? trappedClass : emptyClass)
    : (isFlagged ? flaggedClass : closedClass)]">
      <div class="hint-number" v-if="isOpened && hintNumber > 0">{{ hintNumber }}</div>
    </div>
</template>

<style scoped>

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  transition: box-shadow ease-in-out 350ms, background ease-in 125ms;
}

.cell:hover {
  cursor: pointer;
  box-shadow:
    inset 0 0 0.5px 1px hsl(123, 98%, 36%),
    0 0 0 1px hsla(230, 13%, 9%, 0.075),
    0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),
    0 0.9px 1.5px hsla(230, 13%, 9%, 0.045),
    0 3.5px 6px hsla(230, 13%, 9%, 0.09);
}

.closed {
  background-color: #3E4450;
  box-shadow:
      inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.1),
      0 0 0 1px hsla(230, 13%, 9%, 0.075),
      0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),
      0 0.9px 1.5px hsla(230, 13%, 9%, 0.045),
      0 3.5px 6px hsla(230, 13%, 9%, 0.09);
}

.trapped {
    background: center / 80% no-repeat url("https://techtheist.ru/bakasources/bakaicons/fired.svg") #9A0241;
    box-shadow: inset 0 0 6px 2px #63223D;
}

.empty {
    background: #697489;
    box-shadow: 0 0 6px 2px #63223D;
}

.flagged {
    background: center / 80% no-repeat url("https://techtheist.ru/bakasources/bakaicons/target.svg");
    box-shadow: inset 2px 0px 6px 2px #1C1E24, 0 0 6px 2px #63223D;
}

.hint-number {
    text-align: center;
    color: white;
    text-shadow: #FC0 1px 0 10px;
}

@keyframes scaleRotate {
   0% { transform: scale(1); }
   50% { transform: scale(0.5); }
   100% { transform: scale(1); }
 }

.scale-animation {
  animation: scaleRotate 1s ease-in-out;
}
</style>
