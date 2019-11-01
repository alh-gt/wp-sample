<template>
  <div class="fizzbuzz">
    Here is Fizz Buzz Page!
    <div>
        <span class="success" v-show="msg == 'fizzbuzz'">
            <p v-if="msg == 'fizzbuzz'">it's fizzbuzz!!</p>
        </span>
        <p>{{msg}}</p>
        <form class="form-inline">
            <div class="form-group">
                <div>
                    {{count}}
                </div>
            </div>
            <button class="btn btn-default" @click="increment()">+</button>
            <button class="btn btn-default" @click="decrement()">-</button>
        </form>
    </div>
  </div>
</template>

<script>
  const fizzbuzz = (num) => {
      var result
      if(num % 3 == 0 && num % 5 == 0){
          result = 'fizzbuzz'
      }else if(num % 3 == 0){
          result = 'fizz'
      }else if(num % 5 == 0){
          result = 'buzz'
      }else{
          result = num
      }
      return result
  }
  
  export default {
    data: function() {
      return {
        email: '',
        count : 0,
        msg : 'msg'
      }
    },
    methods:{
        increment: function(){
            this.count++
            this.msg = fizzbuzz(this.count)
        },
        decrement: function(){
            this.count--
            this.msg = fizzbuzz(this.count)
        }
    }
  }

</script>