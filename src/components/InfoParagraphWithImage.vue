<script setup>

</script>

<template>
  <div class="info-paragraph-with-image">
    <slot name="paragraph" class="text"></slot>

    <slot name="image" class="info-image"></slot>

  </div>

</template>

<style scoped>
.info-paragraph-with-image {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
}

.text {
  display: flex;
  flex-direction: column;
}

.info-image {
  display: flex;
  flex-direction: column;
}
</style>
