<script setup>
import { computed } from 'vue'

const props = defineProps({
  time: String,
  status: String,
  currentDateTime: String,
});

const currentLiStyle = computed(() => {
  if (props.status === 'win') {
    return 'win-record-style';
  } else {
    return 'lose-record-style';
  }
})

</script>

<template>
  <div class="record-element">
    <span>{{ props.currentDateTime }}</span>
    <span :class="currentLiStyle">{{ props.time }}</span>
    <span v-if="props.status === 'win'" class="status-icon">🏆</span>
    <span v-else class="status-icon">☠️</span>
  </div>

</template>

<style scoped>

.status-icon {
}

.record-element {
  display: grid;
  grid-template-columns: 3fr 1fr 0.5fr;
  gap: 1.5rem;
}

.record-element:hover {
  background-color: var(--vt-c-divider-dark-1);
}

.win-record-style {
  color: #02b80a;
}

.lose-record-style {
  color: #fd005a;
}

</style>
