<template>
    <div class="nav-container">
        <div class="nav-center">
            <div class="nav-home"><router-link :to="{name:'home'}" >home</router-link></div>
            <div class="nav-searcher">
                <input class="search-content" type="text" name="searchH" >
                <input class="search-btn" type="button" value="btn">
            </div>
            <div class="nav-func">
                <router-link :to="{name:'write'}" >写</router-link>
                <router-link :to="{name:'people'}" >我</router-link>
                <router-link :to="{name:''}" >写</router-link>
            </div>
        </div>
    </div>
</template>
<style>
    .nav-container{
        height:50px;
        width:100%;
        position: relative;
        background-color:#ffffff;
    }

    .nav-center {
        height:100%;
        margin:0px 15%;
    }
    .nav-center div {
        float:left;
    }
    .nav-searcher  {
        width:60%;
        height:38px;
        margin:5px 10px;
        padding:0px;
        border: 1px solid #cccccc;
        border-radius: 15px;
    }

    .nav-searcher .search-content {
        width:89%;
        height:36px;
        display:block;
        float:left;
        border: 0px;
        border-radius: 15px;
    }
    .nav-searcher .search-btn {
        width:10%;
        height:38px;
        display:block;
        border:0px;
        background-color:#ffffff;
        border-radius: 15px;
    }
    .nav-home {
        width: 40px;
        height:40px;
        margin:3px 0;
        border: 1px solid #cccccc;
        border-radius: 50%;
    }

    .nav-func {
        width:25%;
        height:38px;
        margin:4px 0px;
        margin-left:2%;
        border: 1px solid #cccccc;
    }
</style>