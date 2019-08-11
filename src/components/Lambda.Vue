<template>
  <div class="lambda">
    Lambda request test
    <div>
        <span class="errors" v-show="errorFlg">
            <b-alert show variant="danger" v-if="requestStatus != 200" >response status is not 200<br>{{resultText}}</b-alert>
        </span>
        <button class="btn btn-default" @click="lambdaRequest()">実行</button>
        <div>{{resultText}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
          requestStatus : 200,
          errorFlg : false,
          resultText : '',
      }
    },
    methods: {
        lambdaRequest: function(){
            this.$axios.post(this.helloMyFunction)
                .then(function(response){
                    responseStatus = response.status
                    resultText = response.data.body
                })
                .catch(function(error){
                    if(error.response){
                        resultText = error.response.data + '<br>'
                        resultText += error.response.status + '<br>'
                        resultText += error.response.headers 
                    }else if (error.request){
                        resultText = error.request
                    }else {
                        resultText = error.message
                    }
                })
        }
    }
  }
</script>
