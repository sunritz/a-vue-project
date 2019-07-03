<template>
  <nav class="bar bar-tab">
    <div>
      <label class="label-checkbox item-content"  @click="checkall($event)">
         <input type="checkbox" name="my-radio" :checked="this.$store.state.allcheck">
        <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
        <div class="price">合计{{this.$store.state.totalprice}}</div>
        <button>结算</button>
      </label>
    </div>
  </nav>

</template>
<script>
  export default {
    data() {
    return {

       }
    },

  methods: {
    checkall: function() {
      if(this.$store.state.allcheck==1){
        this.$store.state.allcheck=0
        this.$emit("checkedallaction","nocheck");
      }else{
        this.$store.state.allcheck=1
        this.$emit("checkedallaction","checked");
      }
    },
    tome: function(){
      let storage = window.localStorage;
      if(storage.getItem("name") === this.name) {
        window.location.href = "logined";
      }else{
        window.location.href = "me";
      }
    }
  }
  }
</script>
<style lang="scss" scoped type="text/css">
  .bar-tab .tab-item.active,
  .bar-tab .tab-item:active {
    color: #9bcb67
  }
  .item-media{
    display: inline-block;
    margin:.5rem;
    &::after{
       content:'全选';
       margin-left: .5rem;
     }
  }
  .price{
    display: inline-block;
  }
  button {
    width:100px;
    height:2rem;
    color: #fff;
    background: #800;
    text-align: center;
    float: right;
    border-radius: 1rem;
    border:0;
    margin: .2rem .5rem;
  }
</style>
