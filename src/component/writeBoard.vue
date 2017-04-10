<template>
    <div class="write-board">
        <div class="write-board-container">
            <div class="write-board-top">
                <div class="post-write-img">
                    <i>上传图片</i>
                    <input type="file" style="width:100%;height:100%;border:0;opacity:0;" class="upload-img">
                </div>
                <div class="write-toolbar-top">
                    <div class="tomato-clock-tool"></div>
                    <div class="meditation-music-tool"></div>
                </div>
            </div>
            <div class="write-board-bottom">
                <div class="editable-board">
                    <div class="write-title">
                        <input type="text" v-model="title" class="input-card-title" >
                    </div>
                    <div class="write-content">
                        <textarea  v-model="content" class="input-card-content" style="width:100%;height:100%;border:0px;background-color:#f2f2f2;outline:none;"/>
                    </div>
                    <input type="button" @click="save" value="创建">
                </div>
                <div class="write-toolbar-bottom">
                    <div class="write-toolbar tags"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import $ from 'jquery'

  export default{
      data(){
        return {

        }
      },
    created(){
    },
    methods: {
        save(){
            this.saveCard()
              .then(() => this.$router.push({name: 'home'}))
              .catch(err => console.log(err))
        },
        ...mapActions(['saveCard'])
    },
    computed: {
       content: {
        get(){
          return this.$store.state.card.content
        },
        set(value){
          this.$store.commit('UPDATE_CONTENT', value)
        }
      },
      title: {
        get(){
          return this.$store.state.card.title
        },
        set(value){
          this.$store.commit('UPDATE_TITLE', value)
        }
      }
    },
    components: {}
  }
</script>
<style >
    .write-board {
        margin-top:2%;
        background-color:#f2f2f2;
        height:600px;
        overflow:hidden;
    }

    .write-board-container {
        margin:10% 10%;
        width:570px;
        height:380px;
        border:1px solid #ffffff;


    }
    div {
        font-size: 6pt;
        color: black;
    }
    .write-board-top {
        border:1px solid #ffffff;
        height:40%;

        width:100%;
    }
    .post-write-img {
        border-right:1px solid #ffffff;
        width:60%;
        height:100%;
        float:left;
    }
    .write-board-bottom {
        height:60%;
    }
    .editable-board {
        background-color:#ffffff;
        border-right:1px solid #ffffff;
        width:60%;
        height:100%;
        padding:0;
        overflow:hidden;
        overflow-y:scroll;
    }
    .write-title {
        margin:10px auto;
        background-color:#f2f2f2;
        width:78%;
        height:20%;
    }
    .write-content {
        margin:10px auto;
        background-color:#f2f2f2;
        width:78%;
        height:60%;

    }
    .write-toolbar-top {
        height:100%;
        width:40%;
        margin-left:60%;
    }
    .tomato-clock-tool {
        width:100%;
        height:66.7%;
        border-bottom:1px solid #ffffff;
    }
    .meditation-music-tool {

    }

    .input-card-title {
        width:100%;
        height:100%;
        line-height:30px;
        border:0px;
        background-color:#f2f2f2;
    }

    .input-card-title ,.input-card-content{
        width:100%;
        height:100%;
        line-height:30px;
        border:0px;
        background-color:#f2f2f2;
        outline:none;
    }
</style>
