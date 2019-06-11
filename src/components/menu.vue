<template>
  <nav class="bar-tab">
    <a class="tab-item" href="collected" external>
      <span class="icon icon-star-full"></span>
      <span class="tab-label">已收藏</span>
      <span class="badge">{{collectednum}}</span>
    </a>
    <a class="tab-item" href="grow" external>
      <span class="icon icon-cart"></span>
      <span class="tab-label">购物车</span>
      <span class="badge">2</span>
    </a>
    <a class="tab-item" href="#" external>
      <span class="icon icon-cart"></span>
      <span class="tab-label">已评价</span>
    </a>
    <a class="tab-item" href="#" external>
      <span class="icon icon-cart"></span>
      <span class="tab-label">待发货</span>
    </a>
    <a class="tab-item" href="#" external>
      <span class="icon icon-cart"></span>
      <span class="tab-label">待收货</span>
    </a>
  </nav>

</template>
<script>
  export default {
  data(){
    return {
      collectednum:'',
      name: 'admin'
    }
  },
  mounted:function(){
    if(!window.localStorage) {
      $.alert("浏览器不支持localstorage");
      return false;
    } else {
      let storage = window.localStorage;
      this.collectednum=JSON.parse(storage.getItem("collected")).length;
    }
  },
  methods: {
    active: function (a) {
      this.cur = a;
      alert(this.cur)
    }
  }
  }
</script>
<style lang="scss" scoped type="text/css">
  .bar-tab {
    background: #efefef;
    margin: 0 .5rem;
    width:calc(100% - 1rem);
    padding: .5rem;
    height: auto;
    border-radius: .5rem;
  }
</style>
