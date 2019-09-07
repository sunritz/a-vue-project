<template>
  <div class="box">
    <header class="bar bar-nav">
      <a class="button button-link button-nav pull-left back" data-transition='slide-out'>
        <span class="icon icon-circle-left"></span>
      </a>
      <h1 class="title">已收藏</h1>
      <a class="button button-link button-nav pull-right managecollect" @click="manage">
        管理
      </a>
    </header>

    <app-nav me-cur="active"></app-nav>
    <app-navcollectmanage v-on:collectallaction="showcheckedall" v-if="collectmanage" v-on:deletechecked="deleteitems"></app-navcollectmanage>
    <div class="content">
      <div class="list-block media-list">
        <ul>
          <li v-for="item in collected" @click="chose($event)" :data-price="item.proprice">
            <label class="label-checkbox item-content">
              <input type="checkbox" name="my-radio" class="item">
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
      collectmanage:false,
      name: 'admin',
      collected: [],
      allche:0
    }
  }
  ,
  mounted: function () {
    this.load();
  }
  ,
  methods: {
    load:function () {
      let storage = window.localStorage;
      if (storage.getItem("name") === this.name) {
        this.collected = JSON.parse(storage.getItem("collected"));
      } else {
        window.location.href = "me";
      }
    },
    manage:function () {
      if($(".managecollect").text()=="管理"){
        $(".managecollect").text("完成");
        this.collectmanage=true;
      }else{
        $(".managecollect").text("管理");
        this.collectmanage=false;
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
          let c = JSON.parse(storage.getItem("collected"));
          for(let i=0;i<=$('.checkeditem').length-1;i++){
            for(let j=0;j<=c.length-1;j++){
              if(c[j].proprice==$('.checkeditem')[i].dataset.price){
                c.splice(j,1);
                localStorage.setItem("collected",JSON.stringify(c));
                this.load();
              }
            }
          }
        }
      }
    },
    showcheckedall:function(data){
      if(data=="checked") {
        for(let i=0;i<=$('.item').length-1;i++){
          $('.item')[i].checked=true;
        }
        $("ul li").addClass("checkeditem")
      }else{
        for(let i=0;i<=$('.item').length-1;i++){
          $('.item')[i].checked=false;
        }
        $("ul li").removeClass("checkeditem")
      }
    },
    chose:function(){
      var thischose = $(event.currentTarget).find("input").prop("checked");
      if(thischose==true){
        //this.$store.state.totalprice=this.$store.state.totalprice-$(event.currentTarget).data('price');
        $(event.currentTarget).removeClass('checkeditem')
      }else{
        //this.$store.state.totalprice=this.$store.state.totalprice+$(event.currentTarget).data('price');
        $(event.currentTarget).addClass('checkeditem')
      }
      if($('.item').length==$('.checkeditem').length){
        this.$store.state.allcollect=1

      }else{
        this.$store.state.allcollect=0
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
  * { touch-action: pan-y; }
  .list-block{
  .item-after{
    color:#f00;
  }
  }
  .list-block{
    margin: 0;
  }
</style>
