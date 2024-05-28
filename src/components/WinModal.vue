<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">Default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <p>-- : --</p>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >OK</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 500px;
  max-height: 70%;
  margin: auto;
  padding: 20px 30px;
  background-color: #282c34;
  border-radius: 6px;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow:
      0 10px 200px hsla(335, 49%, 26%, .15),
      0 3px 60px hsla(335, 49%, 26%, .10),
      0 -1px 0 hsl(337, 49%, 50%),
      0 1px 0 hsl(335, 90%, 20%);
  border: 0.0625rem solid #9A0241;
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  font-size: x-large;
  color: #ffffff;
  text-shadow: #9A0241 1px 1px 1px;
}

.modal-body {
  margin: 20px 0;
  overflow: auto;
  scroll-behavior: smooth;
}

.modal-default-button {
  cursor: pointer;
  background-color: #9A0241;
  color: #ffffff;
  transition: 350ms ease-in-out;
  padding: 6px 12px;
  border: 1px solid rgba(84, 84, 84, 0.65);
  border-radius: 8px;
  font-size: .9em;
  font-weight: 600;
  margin-top: 0.9rem;
}

.modal-default-button:hover {
  transform: scale(1.1);
}

.modal-default-button:active {
 transform: scale(0.8);
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
