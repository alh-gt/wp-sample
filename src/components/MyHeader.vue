<template>
  <div id="MyHeader">
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">Hello Vue</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/LP">Go to LP</b-nav-item>
                <b-nav-item to="/FizzBuzz">Go to FizzBuzz</b-nav-item>
                <b-nav-item to="/Lambda">Go to Lambda</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>    
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>