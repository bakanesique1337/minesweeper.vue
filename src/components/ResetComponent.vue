<script setup>
import HeartButtonIcon from './icons/HeartButtonIcon.vue'
import DeadSkellyIcon from './icons/DeadSkellyIcon.vue'
import GoldenHeartButtonIcon from './icons/GoldenHeartButtonIcon.vue'
import { ref, toRef, watch } from 'vue'

const props = defineProps({
  isPlayerAliveOrDead: Boolean,
  isGameWon: Boolean,
  isResetHappened: Boolean,
});

const currentIconType = ref(0);

// Watching isResetHappened to reset the timer
watch(toRef(props, 'isPlayerAliveOrDead'), (newVal) => {
  if (newVal === false) {
    console.log('watch isPlayerAliveOrDead = false');
    currentIconType.value = 1;
  }
}, {immediate: true});

watch(toRef(props, 'isGameWon'), (newVal) => {
  if (newVal === true) {
    currentIconType.value = 2;
  }
}, {immediate: true});

watch(toRef(props, 'isResetHappened'), (newVal) => {
  if (newVal === true) {
    currentIconType.value = 0;
  }
}, {immediate: true});

</script>

<template>
    <div class="reset">
      <Transition name="slide-up" mode="out-in">
        <HeartButtonIcon v-if="currentIconType === 0"></HeartButtonIcon>
        <DeadSkellyIcon  v-else-if="currentIconType === 1"></DeadSkellyIcon>
        <GoldenHeartButtonIcon v-else />
      </Transition>

    </div>
</template>

<style scoped>

.reset {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: inset #02B80A 0 0 6px, #02B80A 0 0 6px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-in;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(5px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
