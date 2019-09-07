<template>
  <nav class="bar bar-tab">
    <div>
      <label class="label-checkbox item-content"  >
         <input type="checkbox" name="my-radio" :checked="this.$store.state.allcollect">
        <div class="item-media" @click="checkall"><i class="icon icon-form-checkbox"></i></div>
        <button @click="deleteitem">删除</button>
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
      if(this.$store.state.allcollect==1){
        this.$store.state.allcollect=0
        this.$emit("collectallaction","nocheck");
      }else{
        this.$store.state.allcollect=1
        this.$emit("collectallaction","checked");
      }
    },
    deleteitem:function(){
      this.$emit("deletechecked",1);
      this.$store.state.allcollect=0;
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
