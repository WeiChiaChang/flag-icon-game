<template>
  <md-table>
    <md-table-row>
      <md-table-head md-numeric>答對</md-table-head>
      <!-- <md-table-head md-numeric>正確題數</md-table-head> -->
      <md-table-head md-numeric>錯誤</md-table-head>
      <!-- <md-table-head md-numeric>答對率</md-table-head> -->
    </md-table-row>
    <md-table-row>
      <!-- <md-table-head md-numeric>{{score.total}}</md-table-head> -->
      <md-table-head md-numeric>{{score.success}}</md-table-head>
      <md-table-head md-numeric>{{score.failed}}</md-table-head>
      <!-- <md-table-head md-numeric>{{ratio}}%</md-table-head> -->
    </md-table-row>
  </md-table>
</template>

<script>
// State utils
import { mapState } from 'vuex';

export default {
  // Component name
  name: 'Score',

  // Computed methods & state
  computed: {
    ratio() {
      if (this.score.total > 0) {
        return (100 * this.score.success / this.score.total).toFixed(2);
      }
      return '0.00';
    },
    ...mapState({
      score: ({ score }) => score,
    }),
  },
};
</script>

<style lang="scss">
.md-table-head-container {
  text-align: center;
  height: auto;
  padding: 0;
}
.md-table-head-label {
  height: 32px !important;
  line-height: 32px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
}
.md-table-head {
  font-size: 1.5rem;
  font-family: monospace;
}
.md-table-content {
  background: transparent !important;
}
</style>
