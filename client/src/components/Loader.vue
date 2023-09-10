<template>
  <div class="loader">
    <svg viewBox="0 0 50 50">
      <circle class="ring" cx="25" cy="25" r="20"></circle>
      <circle class="ball" cx="25" cy="5" r="3.5"></circle>
    </svg>

  </div>
</template>
  
<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

svg {
  width: 3.75em;
  animation: 1.5s spin ease infinite;
}

.ring {
  fill: none;
  stroke: #83F062;
  stroke-width: 2;
}

.ball {
  fill: #6CC551;
  stroke: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>
  