<template>
  <div class="sidebar">
    <SidebarRow
      v-for="(sport, index) in sports"
      :key="sport.id"
      :id="sport.id"
      :row-number="index + 1"
      :title="sport.shortName"
      @change-sport="$emit('change-sport', $event)"
    />
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarRow
  },
  props: {
    sports: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  height: 100%;
  background: var(--dark_100);
  border-right: 1px solid var(--ultramarine_80);
}
</style>
