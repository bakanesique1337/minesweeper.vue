<script setup>

</script>

<template>
  <div>
    <slot>
    </slot>
  </div>

</template>

<style scoped>

div {
  max-height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: 0.0625rem solid #3E4450;
  overflow-y: scroll;
}

</style>
