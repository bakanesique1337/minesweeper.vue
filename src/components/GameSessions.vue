<script setup>

</script>

<template>

  <div class="sessions-container">
    <slot>
      <p>-- : --</p>
    </slot>
  </div>

</template>

<style scoped>

.sessions-container {
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  gap: 1rem;
}

</style>
