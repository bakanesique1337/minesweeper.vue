<template>
  <svg class="dead-skelly-icon" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M71 35.5C71 53.988 55.7913 69 37 69C18.2087 69 3 53.988 3 35.5C3 17.012 18.2087 2 37 2C55.7913 2 71 17.012 71 35.5Z" fill="#FFCC00" stroke="#1E1E1E" stroke-width="2"/>
    <circle cx="37" cy="36" r="26" fill="#B8024E" stroke="#1E1E1E" stroke-width="2"/>
    <path d="M13.5 46C10.5 20.5 24.5 7 50 14" stroke="#B8024E" stroke-width="3" stroke-linecap="round" style="mix-blend-mode:color-burn"/>
    <path d="M27 49.5C27.6318 50.0157 29.0927 51.9915 29.5 52C29.8463 52.0072 32.5836 51.1361 33.9353 51.6113C34.33 51.7501 34.7666 51.9198 35.1726 51.8187C36.4538 51.4998 37.3629 51.4633 38.7275 51.9072C38.9061 51.9652 39.0977 51.9777 39.2815 51.9395C40.9946 51.5836 42.1422 51.58 43.9636 51.9003C44.2982 51.9592 44.6419 51.8507 44.8795 51.6079C46.309 50.1461 47.2548 49.4055 49.7176 48.7077C50.1712 48.5792 50.4862 48.1626 50.4884 47.6911C50.5137 42.2947 52.5688 37.834 53 34.5" stroke="#B8024E" stroke-width="2" stroke-linecap="round" style="mix-blend-mode:plus-darker"/>
    <path d="M28.4957 22.8788C20.5003 26.9612 18.9012 35.6363 23.6985 43.2908C22.9637 47.4433 23.7033 48.735 27.9627 48.3938C29.141 51.3038 30.2426 51.4688 32.76 49.9247C34.4253 51.393 35.3589 51.3234 37.0242 49.9247C39.0374 51.1652 39.9173 50.9735 41.2885 49.9247C43.9565 51.3254 45.1355 51.3139 46.0858 48.3938C50.1662 48.7195 51.2771 47.7724 50.35 43.2908C54.8238 32.9055 54.115 27.4522 44.4867 22.8788C39.6894 20.6001 33.8261 20.1572 28.4957 22.8788Z" fill="#D9D9D9" stroke="black" stroke-width="2"/>
    <path d="M46.1115 45.8408C46.4716 45.8408 47.091 45.5815 47.4094 45.4364C47.5375 45.378 47.6856 45.3779 47.8115 45.4408C48.1411 45.6056 48.1411 46.076 47.8115 46.2408L47.7676 46.2628C47.6669 46.3132 47.5521 46.326 47.443 46.298C46.9719 46.1769 45.7016 45.8408 46.1115 45.8408Z" stroke="#B8024E"/>
    <path d="M28.0312 45.8408C27.6712 45.8408 27.0518 45.5815 26.7333 45.4364C26.6052 45.378 26.4572 45.3779 26.3313 45.4408C26.0016 45.6056 26.0016 46.076 26.3312 46.2408L26.3752 46.2628C26.4759 46.3132 26.5907 46.326 26.6997 46.298C27.1709 46.1769 28.4412 45.8408 28.0312 45.8408Z" stroke="#B8024E"/>
    <path d="M36.5313 46.3408C35.9921 46.4963 37.0313 45.3408 37.0313 45.3408C37.0313 45.3408 38.1154 46.6779 37.5313 46.3408H36.5313Z" stroke="black" stroke-width="2"/>
    <circle cx="44.0312" cy="42.3408" r="3" fill="#1E1E1E"/>
    <circle cx="30.0312" cy="42.3408" r="3" fill="#1E1E1E"/>
    <circle cx="26.5312" cy="45.8408" r="0.5" fill="white"/>
  </svg>
</template>

<script>
export default {
  name: 'DeadSkellyIcon',
}

</script>

<style scoped>

.dead-skelly-icon {
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  transition: .5s;
}

.dead-skelly-icon::before {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #9A0241;
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}

.dead-skelly-icon:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #9A0241;
}

.dead-skelly-icon:hover {
  cursor: pointer;
  color: #9A0241;
  box-shadow: 0 0 15px #c73471;
  text-shadow: 0 0 15px #fd005a;
}

.dead-skelly-icon:active {
  transform: scale(1.2);
  transition: .5s;
  box-shadow: 0 -2px 7px #fd005a, inset 0 -2px 7px #c73471, 2px 0 7px #9A0241;
  text-shadow: 0 0 15px white;
}

</style>
