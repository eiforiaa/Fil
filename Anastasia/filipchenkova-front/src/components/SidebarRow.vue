<template>
  <div class="sidebar-row" @click="handleClick">
    <div class="sidebar-row__inner">
      <div class="sidebar-row__number">
        {{ rowNumber }}
      </div>
      <div class="sidebar-row__title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarRow",
  props: {
    rowNumber: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit("change-sport", { id: this.id });
    }
  }
};
</script>

<style scoped>
.sidebar-row {
  display: flex;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid var(--ultramarine_80);
  background: var(--dark_100);
  cursor: pointer;
}

.sidebar-row .sidebar-row__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
}
</style>
