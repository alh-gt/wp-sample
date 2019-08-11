<template>
  <div class="lp">
    こちらはLPページです。
    情報をお求めの方は、下記よりメールアドレスをご登録ください。
    <div>
        <span class="errors" v-show="!validation.email">
            <b-alert show variant="danger">メールアドレスの形式が不正です。</b-alert>
        </span>
        メールアドレス:<input placeholder="email@email.com" v-model="email">
        <input type="submit" value="登録">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        'email': ''
      }
    },
    computed:{
        validation(){
            return{
                email: this.email === '' || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)
            }
        }
    }
  }
</script>