<template>
    <div id="ground-container">
        <div class="card-list" v-for="card in cards" >
            <div class="card-container" v-bind:style="{backgroundImage:'url(' + card.bgurl + ')'}" @click="changeMsg($event)" :id=card._id>
                <div class="card-feature"><img >w</div>
                <div class="card-about">
                    <p>{{card.title}}</p>
                    <p>{{card.author}}</p>
                </div>
            </div>
        </div>
     <m-card :msg="msg"></m-card>
    </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import $ from 'jquery'
  import mCard from './card.vue'

  export default{

    created(){
      this.fetchData()
      //this.$store.state.msg = 'hahha'
    },
    updated(){
    },
    methods: {
      changeMsg:function(event){
        var card_id = $(event.currentTarget).attr('id');
        this.$store.state.msg = card_id
        $('#shade').css('display','block');
        $('#cardToDisplay').css('display','block');
        $('#shade').bind('click',function(){
            $('#shade').css('display','none');
            $('#cardToDisplay').css('display','none');
        })
      },
      fetchData(){
        this.$store.dispatch('getCards')
      },

    },
    computed: mapState({
      cards: state => {
        return state.cards
      },
      msg:state => {
        return state.msg
      }

    }),
    components: {mCard}
  }
</script>
<style >
    #ground-container{
        margin-top:2%;
    }
    div {
        font-size: 6pt;
        color: black;
    }

    .card-list {
        float:left;
        list-style:none;
        margin-left:30px;
        margin-top:30px;
    }
    .card-container {
        border: 1px solid black;
        border-radius: 10px;

        width:210px;
        height:140px;
    }
    .card-feature {
        padding-left:80%;
    }

    .card-about {
        margin-top:50px;
    }

    .card-about p{
        margin-left:40%;
    }


</style>
