<script setup>
import FlagCounter from './FlagCounter.vue';
import Reset from './ResetComponent.vue';
import Timer from './TimerComponent.vue';
import GameSessions from './GameSessions.vue'
import StatisticsHeader from './StatisticsHeader.vue'
import SessionRecordsList from './SessionRecordsList.vue'
import TimeRecordLiElem from './TimeRecordLiElem.vue'
import DefaultButton from './DefaultButton.vue'
import StatisticsModalButton from './StatisticsModalButton.vue';
import WinModal from "./WinModal.vue";
import InfoButton from "@/components/InfoButton.vue";
import PlaceholderParagraphContainer from "@/components/PlaceholderParagraphContainer.vue";
import {useStorage} from '@vueuse/core'
import {useTimeFromDOM} from "@/useTimeFromDOM.js";
import {ref, toRef, watch} from "vue";
import InfoContainer from "@/components/InfoContainer.vue";

const props = defineProps({
  remainingMinesCount: Number,
  isTimerRunning: Boolean,
  isPlayerAliveOrDead: Boolean,
  isResetHappened: Boolean,
  isGameWon: Boolean,
});

const emit = defineEmits(['resetGame']);
const showInfoModal = ref(false);
const showStatisticsModal = ref(false);
const playerSessionRecords = useStorage('playerSessionRecordsStore',
    null,
    undefined,
    {
      serializer: {
        read: (v) => v ? JSON.parse(v) : null,
        write: (v) => JSON.stringify(v),
      },
    },
);

const createCurrentDateTime = () => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const time  = currentDate.toLocaleTimeString();
  return `${date} ${time}`;
}

// Watching isPlayerAliveOrDead to record failure to the local storage
watch(toRef(props, 'isPlayerAliveOrDead'), (newVal) => {
  if (newVal === false) {
    addRecordToLocalStorage();
  }
}, {immediate: true});

const addRecordToLocalStorage = () => {
  if (!playerSessionRecords.value) {
    playerSessionRecords.value = [];
    playerSessionRecords.value.push(useTimeFromDOM(props.isGameWon, createCurrentDateTime()));
  } else {
    playerSessionRecords.value.push(useTimeFromDOM(props.isGameWon, createCurrentDateTime()));
  }
}

// Watching isGameWon to record win to the local storage
watch(toRef(props, 'isGameWon'), (newVal) => {
  if (newVal === true) {
    addRecordToLocalStorage();
  }
}, {immediate: true});

const showStatisticsModalOnClick = () => {
  showStatisticsModal.value = !showStatisticsModal.value;
}

const clearSessionRecords = () => {
  playerSessionRecords.value = null;
};

const showInfoModalOnClick = () => {
  showInfoModal.value = !showInfoModal.value;
}

</script>

<template>
    <div class="control-panel">
      <StatisticsModalButton @click="showStatisticsModalOnClick">
      </StatisticsModalButton>
      <Teleport to="body">
        <win-modal :show="showStatisticsModal" @close="showStatisticsModal = false">
          <template #header>
            <StatisticsHeader>Personal Best Time</StatisticsHeader>
          </template>
          <template #body>
            <GameSessions v-if="playerSessionRecords">
              <SessionRecordsList>
                <TimeRecordLiElem v-for="record in playerSessionRecords"
                                  :key="record.id"
                                  :time="record.time"
                                  :status="record.status"
                                  :current-date-time="record.currentDateTime" />
              </SessionRecordsList>
              <DefaultButton @click="clearSessionRecords">Clear History</DefaultButton>
            </GameSessions>
            <PlaceholderParagraphContainer v-else>
            </PlaceholderParagraphContainer>
          </template>
          <template #footer>
          </template>
        </win-modal>
      </Teleport>
      <FlagCounter
            :flagged-trapped-cells-count="props.remainingMinesCount"></FlagCounter>
      <Reset
          :is-player-alive-or-dead="isPlayerAliveOrDead"
          :is-game-won="isGameWon"
          :is-reset-happened="isResetHappened"
          @click="emit('resetGame')"></Reset>
      <Timer :is-timer-running="props.isTimerRunning"
               :is-reset-happened="props.isResetHappened">
      </Timer>
      <InfoButton @click="showInfoModalOnClick"></InfoButton>
      <Teleport to="body">
        <win-modal :show="showInfoModal" @close="showInfoModal = false">
          <template #header>
            <StatisticsHeader>How to play Minesweeper</StatisticsHeader>
          </template>
          <template #body>
            <InfoContainer></InfoContainer>
          </template>
          <template #footer>
          </template>
        </win-modal>
      </Teleport>
    </div>
</template>

<style scoped>
.control-panel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    color: white;
    gap: 3rem;
}
</style>
