<template>
  <div class="layout">
    <header class="header">
      <h1 class="header__title">Anastasia Filipchenkova BPZ1801</h1>
    </header>
    <div class="container">
      <div class="left">
        <slot name="sidebar" />
      </div>
      <div class="right">
        <slot name="rightBoard" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style scoped>
.header {
  text-transform: uppercase;
  color: var(--gray);
  padding: 15px;
  background: var(--ultramarine_80);
}

.header__title {
  margin: 0;
}

.layout {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-height: 100vh;
  overflow: hidden;
}

.container {
  width: 100%;
  flex: 1;
  display: flex;
  overflow: hidden;
}

.left {
  width: 300px;
}

.right {
  width: 100%;
}
</style>
