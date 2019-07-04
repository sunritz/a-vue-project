<template>
  <div class="box">
    <header class="bar bar-nav">
      <a class="button button-link button-nav pull-left back" data-transition='slide-out'>
        <span class="icon icon-circle-left"></span>
      </a>
      <h1 class="title">购物车</h1>
      <a class="button button-link button-nav pull-right managecart" @click="manage">
        管理
      </a>
    </header>
    <app-navcart v-on:checkedallaction="showcheckedall" ></app-navcart>
    <app-navcartmanage v-on:checkedallaction="showcheckedall" v-if="cartmanage" v-on:deletechecked="deleteitems"></app-navcartmanage>
    <div class="content">
      <div class="list-block media-list">
        <ul>
          <li v-for="item in cart" @click="chose($event)" :data-price="item.proprice">
            <label class="label-checkbox item-content">
              <input type="checkbox" name="my-radio" class="item" :data-price="item.proprice">
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
  export default {
    data()
  {
    return {
      cartmanage:false,
      name: 'admin',
      cart: [],
      allche:0
    }
  }
  ,
  mounted: function () {
    this.load();
  }
  ,
  computed: {

  },
  methods: {
    load:function () {
      let storage = window.localStorage;
      if (storage.getItem("name") === this.name) {
        this.cart = JSON.parse(storage.getItem("cart"));
      } else {
        window.location.href = "me";
      }
    },
    deleteitems:function(data){
      if($(".checkeditem").length == 0 && data==1){
        $.toast('请勾选项目');
        return false;
      }else{
        if(!window.localStorage) {
          $.alert("浏览器不支持localstorage");
          return false;
        } else {
          let storage = window.localStorage;
          let c = JSON.parse(storage.getItem("cart"));
          for(let i=0;i<=$('.checkeditem').length-1;i++){
            for(let j=0;j<=c.length-1;j++){
              if(c[j].proprice==$('.checkeditem')[i].dataset.price){
                c.splice(j,1);
                localStorage.setItem("cart",JSON.stringify(c));
                this.load();
              }
            }
          }
        }
      }
    },
    showcheckedall:function(data){
      if(data=="checked") {
        var sum = 0;
        for(let i=0;i<=$('.item').length-1;i++){
          sum += parseFloat($('.item')[i].dataset.price);
          $('.item')[i].checked=true;
        }
        this.$store.state.totalprice=sum;
        $("ul li").addClass("checkeditem")
      }else{
        for(let i=0;i<=$('.item').length-1;i++){
          $('.item')[i].checked=false;
        }
        this.$store.state.totalprice=0;
        $("ul li").removeClass("checkeditem")
      }
    },
    chose:function(){
      var thischose = $(event.currentTarget).find("input").prop("checked");
      if(thischose==true){
        this.$store.state.totalprice=this.$store.state.totalprice-$(event.currentTarget).data('price');
        $(event.currentTarget).removeClass('checkeditem')
      }else{
        this.$store.state.totalprice=this.$store.state.totalprice+$(event.currentTarget).data('price');
        $(event.currentTarget).addClass('checkeditem')
      }
      if($('.item').length==$('.checkeditem').length){
        this.$store.state.allcheck=1
      }else{
        this.$store.state.allcheck=0
      }
    },
    manage:function () {
      if($(".managecart").text()=="管理"){
        $(".managecart").text("完成");
        this.cartmanage=true;
      }else{
        $(".managecart").text("管理");
        this.cartmanage=false;
      }
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
