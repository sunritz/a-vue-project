<template>

  <div class="bar bar-tab">
    <ul class="icon-button">
      <li @click="listpage">
        <div class="icon icon-goodlist"></div>
        <p>列表</p></li>
      <li>
        <div class="icon icon-kefu"></div>
        <p>客服</p></li>
      <li @click="collect">
        <div class="icon icon-star-empty collect"></div>
        <p>收藏</p>
      </li>
    </ul>
    <div class="btn">
      <button>加入购物车</button>
      <button>立即购买</button>
    </div>
  </div>


</template>
<script>
  export default {
    data(){
      return {
        name:'admin'
      }
  },
  methods: {
    listpage: function () {
      window.location.href = "earthbuy";
    },
    collect:function(){
      let storage = window.localStorage;
      if(storage.getItem("name") === this.name) {
        if($(".collect").hasClass('icon-star-full')){
          this.$store.dispatch('uncollected');
          $.toast("取消收藏成功!")
          $(".collect").removeClass("icon-star-full")
          return false
        }else{
          this.$store.dispatch('collected');
          $.toast("收藏成功!");
          $(".collect").addClass("icon-star-full")
          return false
        }
      }else{
        $.confirm('你还未登录，现在去登录吗？',function(){
          window.location.href = "me";
        })
      }
    }
  }
  }
</script>
<style lang="scss" scoped type="text/css">
  .icon-button {
    margin: 0;
    padding: 0;
    margin:.2rem 0 0 .4rem;
    float:left;

  li {
    list-style: none;
    font-size: .6rem;
    display: inline-block;
    margin: 0;
    padding: 0;

  .icon{
    margin:0 .4rem;
    color:#999;
  }
  .icon-star-full{
    color:#880000;
  }

    p, div {
      color:#666;
      margin: 0;
      padding: 0;
      line-height: 1rem;
      text-align: center;
    }

    }
  }
  .btn {
    float:right;
    margin:.4rem .4rem 0 0;
    font-size:.7rem;
    button:first-child{
      border-radius: 1rem 0 0 1rem ;
      border:0;
      padding: .3rem 1rem;
      float: left;
      background: #ffc520;
      color: #fff;
    }
    button:last-child{
      border-radius: 0 1rem 1rem 0;
      border:0;
      padding: .3rem 1rem;
      background: #990000;
      color:#fff;
    }
  }
  .bar-tab .tab-item.active,
  .bar-tab .tab-item:active {
    color: #9bcb67
  }
</style>
