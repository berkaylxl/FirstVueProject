<template>
 <div class="container">
   <div class="row m-5">
     <div class="col-4 m-auto">
       <input class="form-control" id="textinput" name="msgtext" type="text" placeholder="hello world!" v-model ="tempMsg">
       <button @click=printToScreen class="btn btn-primary  pl-4 pr-4 mt-2">Show</button>
     </div>
   </div>
   <div class="row">
     <h2 class="text-center">{{msg}}</h2>
   </div>
 </div>
</template>
<script>
export default {
 data(){
   return{
      tempMsg:"",
      msg:""
      
   }
 },
 methods:{
   printToScreen()
   {
     this.msg=this.tempMsg
   }

 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  float: right;
}
</style>
