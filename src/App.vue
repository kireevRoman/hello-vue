<template>
  <div>
    <h1>Простой кликер:</h1>
    <button type="button" v-on:click="addClick">Это кнопка</button>
    <h2>На кнопку кликнули {{ clicks }} раз</h2>
  </div>
</template>

<script>
export default {
  data() {
    return{
      clicks: 0
    }
  },

  methods: {
    addClick() {
      this.clicks += 1
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 12px 24px;
  border: 2px solid blueviolet;
  color: blueviolet;
  background: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
}
</style>