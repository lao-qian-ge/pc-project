<template>
    <div class="banner">
        <div class="content-box">
            <div class="area-1 clearfix">
                <span class="item" v-for="item in menuTab" :key="item.id" @click="handleChange(item.typeSort)">
                    {{ item.typeName }}
                </span>
            </div>
            <div class="area-2 clearfix search">
                <div class="clearfix fl">
                    <p class="iconfont icon-sousuo fl"></p>
                    <input class="fl font-light" v-model="searchData" type="text" placeholder="请输入关键词" />
                </div>
                <button class="fr" type="submit" @click="search">立即搜索</button>
            </div>
            <div class="area-3 clearfix">
                <div class="fl tit">热搜：</div>
                <div class="fl floor clearfix">
                    <router-link to="/zice" class="item">落户条件自测</router-link>
                    <router-link to="/detail" class="item">居转户</router-link>
                    <router-link to="/detail" class="item">人才引进</router-link>
                    <router-link to="/detail" class="item">最新落户政策</router-link>
                    <router-link to="/detail" class="item">留学生落户</router-link>
                    <router-link to="/detail" class="item">应届生落户</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, onMounted, toRefs } from 'vue'
import { getNewsType } from '@/service/api/index'

const state: {
    menuTab: Array<any>,
    searchData: string
} = reactive({
    menuTab: [],
    searchData: ''
})
const { menuTab, searchData } = toRefs(state)

onMounted(() => {
    getTabsListFn()
})

//搜索
function search() {
    const data = {
        infoContent: state.searchData,
        infoType: '',
        pageSize: 10,
        pageNo: 1,
    }
}

//获取menu
async function getTabsListFn() {
    const res = await getNewsType()
    if (res.code == 200) {
        state.menuTab = res.result
    }
}

//切换menu
function handleChange(id) {
    this.$router.push({
        path: '/infolist/' + id
    })
}
</script>
<style scoped>
.banner {
    height: 300px;
    background: url('@/assets/images/banner.jpg') no-repeat top #d5e7fb;
    background-size: 1920px;
    overflow: hidden
}

.banner .content-box {
    padding: 0 130px
}

.banner .area-1 {
    padding: 55px 0 40px
}

.banner .area-1 .item {
    display: block;
    float: left;
    width: 140px;
    height: 60px;
    background: url('@/assets/images/bg2.jpg') no-repeat top;
    background-size: cover;
    border-radius: 8px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 16px;
    margin-right: 20px;
    -webkit-transition: background .3s ease;
    transition: background .3s ease;
    cursor: pointer;
}

.banner .area-1 .item:last-child {
    margin: 0
}

.banner .area-1 .item:hover {
    opacity: .8
}

.banner .area-2 {
    width: 940px;
    height: 50px;
    line-height: 48px;
    background: #fff;
    border-radius: 25px;
    border: 1px solid #e2e2e2;
    position: relative
}

.banner .area-2 p {
    font-size: 22px;
    color: #bbb;
    margin: 0 20px 0 15px
}

.banner .area-2 input {
    border: none;
    font-size: 16px;
    width: 700px;
    color: #333;
    height: 48px;
    margin-left: 20px;
}

.banner .area-2 button {
    position: absolute;
    top: 3px;
    right: 4px;
    width: 140px;
    height: 42px;
    line-height: 42px;
    background: #2a65b2;
    border: none;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    border-radius: 25px
}

.banner .area-2 button:hover {
    background: #fa6400
}

.banner .area-3 {
    padding-top: 16px
}

.banner .area-3 .tit {
    width: 60px;
    line-height: 24px;
    font-size: 14px;
    color: #333
}

.banner .area-3 .floor {
    width: 880px;
    height: 60px;
    overflow: hidden
}

.banner .area-3 .floor .item {
    float: left;
    display: block;
    margin: 0 10px 10px 0;
    padding: 0 14px;
    line-height: 24px;
    height: 24px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    font-size: 14px;
    color: #333;
    background: rgba(205, 211, 218, .5);
    border-radius: 12px;
    -webkit-transition: background .3s ease;
    transition: background .3s ease
}

.banner .area-3 .floor .item:hover {
    background: #fa6400;
    color: #fff
}
</style>