<script setup>

</script>

<template>
  <button class="default-button">
    <slot></slot>
  </button>
</template>

<style scoped>

.default-button {
  cursor: pointer;
  background-color: #262c33;
  color: rgba(255, 255, 255, 0.5);
  transition: 350ms ease-in-out;
  padding: 6px 12px;
  border: 1px solid rgba(84, 84, 84, 0.65);
  border-radius: 8px;
  font-size: .9em;
  font-weight: 600;
  align-self: end;
}

.default-button:hover {
  transform: scale(1.1);
}

.default-button:active {
  transform: scale(0.8);
}

</style>
