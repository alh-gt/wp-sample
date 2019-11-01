<template>
  <div class="lambda">
    Lambda request test
    <div>
        <span class="errors" v-show="errorFlg">
            <b-alert show variant="danger" v-if="responseStatus != 200" >response status is not 200<br>{{resultText}}</b-alert>
        </span>
        <button class="btn btn-default" @click="lambdaRequest()">実行</button>
        <div>{{resultText}}</div>
    </div>
  </div>
</template>

<script>
  import axiosHundler from '../../mixins/axios'
  export default {
    data: function() {
      return {
          responseStatus : 200,
          errorFlg : false,
          resultText : '',
      }
    },
    methods: {
        lambdaRequest: function(){
            axiosHundler.post(this.jsonPlaceholder, {})
            this.responseStatus = axiosHundler.data.responseStatus
            this.resultText = axiosHundler.responseData
        }
    }
  }
</script>
