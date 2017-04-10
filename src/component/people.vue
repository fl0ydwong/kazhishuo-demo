<template>
  <main class="wrap" style="">
  <m-nav></m-nav>
    <div class="page-center" >
        people
    </div>
  </main>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import mNav   from './nav.vue'

  export default{
   created(){
    },
    computed: {

    },
    methods: {},
    components: {mNav}

  }
</script>
<style>

    .wrap{
        background-color:#eeeeee;
        min-height:100%;
    }
    .page-center {
        background-color:#FFFFFF;
        margin:0px 15%;
        height:600px;
    }
    #shade
    {
        width: 100%;
        height: 100%;
        opacity:0.8;
        filter:alpha(opacity=80);
        display: none;
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        background: silver;
    }
</style>