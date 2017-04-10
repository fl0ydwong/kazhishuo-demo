<template>
  <main class="wrap" >
    <m-nav></m-nav>
    <div class="page-center" style="">
        <m-write-board></m-write-board>
    </div>
  </main>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import mNav   from './nav.vue'
  import mWriteBoard   from './writeBoard.vue'

  export default{
   created(){
    },
    computed: {

    },
    methods: {},
    components: {mNav,mWriteBoard}

  }
</script>
<style>

    .wrap{

        min-height:100%;
    }


</style>