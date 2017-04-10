<template>
  <main class="wrap">
      <article class="block">
        <div class="title">{{user.name}}</div>
      </article>
  </main>
</template>
<script>
  import {mapState}   from 'vuex'

  export default{
    created(){
      this.fetchData()
    },
    methods: {
      fetchData(){
        this.$store.dispatch('getUser', '58cfc53b385e5503f6238e2b')
      }
    },
    computed: mapState({
      user: state => {
        return state.user
      }
    }),
    watch: {
      '$route': ['fetchData']
    }
  }
</script>
