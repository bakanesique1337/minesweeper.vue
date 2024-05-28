<template>
  <svg class="heart-button-icon" width="74" height="70" viewBox="0 0 74 70" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M71 35.5C71 53.988 55.7913 69 37 69C18.2087 69 3 53.988 3 35.5C3 17.012 18.2087 2 37 2C55.7913 2 71 17.012 71 35.5Z"
      fill="#02D584" stroke="#1E1E1E" stroke-width="2" />
    <circle cx="37" cy="36" r="26" fill="#B8024E" stroke="#1E1E1E" stroke-width="2" />
    <path
      d="M49.5 27C54 33.5 47.7651 40.4467 37 49C36.595 48.6626 36.1948 48.3294 35.7999 48C25.808 39.6664 19.2094 33.8355 24.5 27C29.9997 19.8943 37.4887 27.4881 37 27C36.5113 26.5118 45 20.5 49.5 27Z"
      fill="#02B80A" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
    <path d="M36 47.5C47.9969 38.3713 53.5 30.5 43.5 24.5" stroke="#02B80A" stroke-width="3" stroke-linecap="round"
      style="mix-blend-mode:multiply" />
    <circle cx="30.5" cy="31.5" r="4.5" fill="#02B80A" style="mix-blend-mode:screen" />
    <circle cx="28" cy="29" r="2" fill="#02B80A" style="mix-blend-mode:plus-lighter" />
    <path d="M13.5 46C10.5 20.5 24.5 7 50 14" stroke="#B8024E" stroke-width="3" stroke-linecap="round"
      style="mix-blend-mode:color-burn" />
  </svg>
</template>

<script>
export default {
  name: 'HeartButtonIcon',
}
</script>

<style scoped>
.heart-button-icon {
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  transition: .5s;
}

.heart-button-icon::before {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #02B80A;
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}

.heart-button-icon:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #02B80A;
}

.heart-button-icon:hover {
  cursor: pointer;
  color: #02B80A;
  box-shadow: 0 0 15px #02D584;
  text-shadow: 0 0 15px #02D584;
}

.heart-button-icon:active {
  transform: scale(0.8);
  transition: .5s;
  box-shadow: 0 -2px 7px #02A10A, inset 0 -2px 7px #02A10A, 2px 0 7px #002718;
  text-shadow: 0 0 15px white;
}

</style>
