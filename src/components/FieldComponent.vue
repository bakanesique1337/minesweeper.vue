<script setup>
import Cell from './CellItem.vue'

const props = defineProps({
  cells: Array,
  isResetHappened: Boolean,
})

const emit = defineEmits([
  'openCell', 'flagCell',
]);

</script>

<template>
    <div class="field">
        <Cell
            v-for="cell in props.cells"
            :key="cell.id"
            :id="cell.id"
            :is-opened="cell.isOpened"
            :is-trapped="cell.isTrapped"
            :is-flagged="cell.isFlagged"
            :hint-number="cell.hintNumber"
            :is-reset-happened="props.isResetHappened"
            @click="emit('openCell', cell.id)"
            @click.right.prevent="emit('flagCell', cell.id)"/>
    </div>
</template>

<style scoped>
.field {
    display: grid;
    grid-template-columns: repeat(8, 2fr);
    gap: 0.5rem;
    color: white;
    border: 0.0625rem solid #3E4450;
    border-radius: 0.5rem;
    padding: 0.5rem;
}
</style>
