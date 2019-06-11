<template>
  <div class="box">
    <header class="bar bar-nav">
      <h1 class="title">已收藏</h1>
      <a class="button button-link button-nav pull-right" @click="exit">
        <span class="icon icon-exit"></span>退出
      </a>
    </header>

    <app-nav me-cur="active"></app-nav>
    <div class="content">
      <div class="list-block media-list">
      <ul>
        <li>
          <label class="label-checkbox item-content">
            <input type="radio" name="my-radio">
            <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title">222</div>
                <div class="item-after">17:14</div>
              </div>
              <div class="item-subtitle">New messages from John Doe</div>
              <div class="item-text">Lorem ipsum dolor sit amet...</div>
            </div>
          </label>
        </li>
      </ul>
</div>



    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data()
  {
    return {
      name: 'admin',
      collected: []
    }
  },
  mounted: function () {
    this.load();
  },
  computed: {
    isShow()
    {
      return this.$store.getters.isShow;
    }
  },
  methods: {
    load:function () {
      let storage = window.localStorage;
      if (storage.getItem("name") === this.name) {
        this.collected = storage.getItem("collected");

      } else {
        window.location.href = "me";
      }
    },
    exit:function () {
      localStorage.removeItem("name");
      $.alert('已退出', function () {
        window.location.href = "me";
      })
    }
  }
  }
</script>

<style lang="scss" scoped type="text/css">
  $bg:#fff;
  .content {
    background-color: $bg;  }
</style>
