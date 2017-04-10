<template>
        <div id="cardToDisplay" >
            <div class="card-flipper">
                <div class="card-front">
                    <div class="card-feature-display"><img >w</div>
                    <div class="card-about-display">
                        <p>{{card.title}}</p>
                        <p>{{card.author}}</p>
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-content">
                        <p>{{card.content}}</p>
                    </div>
                </div>
             </div>
        </div>
</template>
<script>
  import {mapState,mapGetters}   from 'vuex'

  export default{
    created(){
    },
    methods: {
      ...mapGetters(['displayOneCard'])
    },
    computed: mapState({
      card: state => {
        return state.card
      }
    }),
    components: {},
    watch: {
        '$store.state.msg': ['displayOneCard']
    }
  }
</script>

<style>

    #cardToDisplay {
        border-radius: 10px;
        width:33vw;
        height:22vw;
        display:none;
        position:absolute;
        background-color:white;
        left:35%;
        top:25%;
        z-index:9;
        perspective: 1000;
    }

    .card-feature-display {
        padding-left:80%;
    }

    .card-about-display {
        margin-top:40%;
        margin-left:70%;
    }


    #cardToDisplay:hover .card-flipper, #cardToDisplay.hover .card-flipper {
    	transform: rotateX(-180deg);
    }

     .card-front, .card-back {
    	width:33vw;
    	height:22vw;

    }


    .card-flipper {
    	transition: 0.8s;
    	transform-style: preserve-3d;
    	position: relative;
    	transform-origin: 100% 11vw;
    }

    /* hide back of pane during swap */
    .card-front, .card-back {
    	backface-visibility: hidden;
    	position: absolute;
    	top: 0;
    	left: 0;
    }

    /* front pane, placed above back */
    .card-front {
    	z-index: 2;
    	//background-color:yellow;
    }

    /* back, initially hidden pane */
    .card-back  {
    	transform: rotateX(180deg);
    	//background-color:blue;
    }

</style>