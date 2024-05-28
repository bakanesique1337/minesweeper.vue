<script setup>
import {ref, watch, toRef, computed} from "vue";

const props = defineProps({
  isTimerRunning: Boolean,
  isResetHappened: Boolean,
});

const intervalId = ref(null);
const dateStart = ref(null);
const dateEnd = ref(null);
const time = ref(0);

const seconds = computed(() => Math.floor((time.value % 60000) / 1000));
const minutes = computed(() => Math.floor(time.value / 60000));

const stopTimer = () => {
  console.log('stopTimer begins');
  console.log('isResetHappened: ', props.isResetHappened);

  if (props.isResetHappened) {
    resetTimer();
  } else {
    console.log('stopTimer else block');
    dateEnd.value = Date.now();
  }

  if (!intervalId.value) return;

  clearInterval(intervalId.value);
  intervalId.value = null;

}

const resetTimer = () => {
  console.log('resetTimer begins');
  time.value = 0;
  dateStart.value = null;
  dateEnd.value = null;
};

const startTimer = () => {
  dateStart.value = Date.now();
  dateEnd.value = null;
  time.value = 0;

  if (intervalId.value) clearInterval(intervalId.value);

  intervalId.value = setInterval(() => {
    time.value = (dateEnd.value ?? Date.now()) - dateStart.value;
  }, 100);
}

watch(toRef(props, 'isTimerRunning'), value => {
  if (value) startTimer()
  else stopTimer()
}, {immediate: true})

// Watching isResetHappened to reset the timer
watch(toRef(props, 'isResetHappened'), (newVal) => {
  if (newVal === true) {
    console.log('watch isResetHappened = true');
    resetTimer();
  }
}, {immediate: true});

</script>

<template>
  <div class="timer">
    <span id="minutes">{{ minutes.toString().padStart(2, "0") }}</span>
    :
    <span id="seconds">{{ seconds.toString().padStart(2, "0") }}</span>
  </div>
</template>
