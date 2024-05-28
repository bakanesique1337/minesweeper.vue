<script setup>
import FlaggedBombIcon from './icons/FlaggedBombIcon.vue'

const props = defineProps({
  flaggedTrappedCellsCount: Number,
});

</script>

<template>
    <div class="flag-counter">
        <FlaggedBombIcon></FlaggedBombIcon>
        <p>{{ props.flaggedTrappedCellsCount }}</p>

    </div>
</template>

<style scoped>
.flag-counter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}
</style>
