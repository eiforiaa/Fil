<template>
  <div class="right-board">
    <div v-if="!isSportEmpty">
      <div>Id: {{ sport.id }}</div>
      <div>Название: {{ sport.shortName }}</div>
      <div>Адрес: {{ sport.legalAddress }}</div>
      <div>Должность руководителя: {{ sport.chiefPosition }}</div>
      <div>Фио руководителя: {{ sport.chiefName }}</div>
      <div>Сайт: {{ sport.website }}</div>
      <div>Почта: {{ sport.email }}</div>
    </div>
    <div v-else class="right-board__no-selected">
      Выберите спортивное учреждение, чтобы посмотреть руководителя и сайт
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBoard",
  props: {
    sport: {
      type: Object,
      required: true
    }
  },
  computed: {
    isSportEmpty() {
      return Object.keys(this.sport).length === 0;
    }
  },
  methods: {
    yesNo(value) {
      if (value) {
        return "+";
      } else {
        return "-";
      }
    }
  }
};
</script>

<style scoped>
.right-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--dark_100);
}

.right-board .right-board__no-selected {
  font-size: 26px;
  text-align: center;
}
</style>
