<template>
  <div class="box">
    <header class="bar bar-nav">
      <a class="button button-link button-nav pull-left back" data-transition='slide-out'>
        <span class="icon icon-circle-left"></span>
      </a>
      <h1 class="title">购物车</h1>
      <a class="button button-link button-nav pull-right" @click="exit">
        <span class="icon icon-exit"></span>退出
      </a>
    </header>

    <app-nav me-cur="active"></app-nav>
    <div class="content">
      <div class="list-block media-list">
        <ul>
          <li v-for="item in cart">
            <label class="label-checkbox item-content">
              <input type="checkbox" name="my-radio">
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-media"><img :src="item.userimg[0].img" style='width: 4rem;margin-left: .5rem;'></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{item.protitle}}</div>
                  <div class="item-after">￥{{item.proprice}}</div>
                </div>
                <div class="item-subtitle">产地：{{item.province}}{{item.city}}</div>
                <div class="item-text">已售：{{item.salednum}}件</div>
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
      cart: []
    }
  }
  ,
  mounted: function () {
    this.load();
  }
  ,
  computed: {

  }
  ,
  methods: {
    load:function () {
      let storage = window.localStorage;
      if (storage.getItem("name") === this.name) {
        this.cart = JSON.parse(storage.getItem("cart"));
//        console.log(storage.getItem("cart"))
      } else {
        window.location.href = "me";
      }
    }
  ,
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
    background-color: $bg;
  }
  .list-block{
  .item-after{
    color:#f00;
  }
  }
  .list-block{
    margin: 0;
  }
</style>
