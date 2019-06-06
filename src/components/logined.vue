<template>
  <div class="box">
    <header class="bar bar-nav">
      <h1 class="title">我</h1>
      <a class="button button-link button-nav pull-right" @click="exit">
        <span class="icon icon-exit"></span>退出
      </a>
    </header>
    <app-nav me-cur="active"></app-nav>
    <div class="content">
      <div class="userimg"><img :src="header"/></div>
      <div class="username">{{name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data()
  {
    return {
      name: 'admin',
      header: 'static/img/banner.a6f7adf.jpg'
    }
  }
  ,
  mounted: function () {
    this.load();//加载时判断是否登录
  },
  computed: {
    isShow()
    {
      return this.$store.getters.isShow;
    }
  },
  watch: {
    $route(to, from)
    {
      console.log(to)
      if (to.name === 'me') {
        this.$store.dispatch('showFooter')
      } else {
        this.$store.dispatch('hideFooter')
      }
    }
  }
  ,
  methods: {
    load:function(){
      let storage = window.localStorage;
      if(storage.getItem("name") === this.name) {
        return
      }else{
        window.location.href = "me";
      }
    },
    exit:function(){
      localStorage.removeItem("name");
      $.alert('已退出',function(){
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

    .userimg {
      width: 5rem;
      border-radius: 50%;
      height: 5rem;
      margin: 1rem auto;
      overflow: hidden;

      img {
        width: auto;
        height: 100%;
      }

    }
    .username {
      text-align: center;
    }

  }
</style>
