<template>
  <div class="hello">
    <router-link to="/page/">分頁一</router-link>
    <router-link to="/page/child2">分頁二</router-link>
    <router-link to="/page/child3">分頁三</router-link>
      <router-view></router-view>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
