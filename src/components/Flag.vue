<template>
  <div class="content_wrapper">
    <img class="flag_img" :src="code.img" alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Flag',
  props: {
    code: Object,
    default () {
      return {}
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      flags: ({ flags }) => flags,
    })
  }
};
</script>

<style lang="scss" scoped>
.content_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 12rem;
  }
}


// Basic Mobile Setting
@media only screen and (min-width: 320px) and (max-width: 479px) {
  .content_wrapper {
    i {
      font-size: 9rem;
    }
  }
}
// For mobile (landscape)
@media only screen and (min-width: 480px) and (max-width: 767px) {
  .content_wrapper {
    i {
      font-size: 9rem;
    }
  }
}

.flag_img {
  width: 150px;
}
</style>
