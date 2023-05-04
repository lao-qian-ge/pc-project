<template>
    <div class="header">
        <div class="content-box clearfix">
            <h1 class="area-1 fl">
                <a class="logo-link" href="/" target="_self">
                    <img src="@/assets/images/logo.png">
                </a>
            </h1>
            <a href="/" class="enter-jigou fl font-light">
                <p class="enter-img"></p>
                <p class="info">机构入驻</p>
            </a>
            <div class="area-2 fl clearfix">
                <router-link to="/" class="fl link active" target="_self">首页</router-link>
                <router-link to="/luohu" class="fl link " target="_self">上海落户</router-link>
                <router-link to="/zice" class="fl link " target="_self">上海落户自测</router-link>
                <router-link to="/juzhuanhu" class="fl link " target="_self">上海居转户</router-link>
                <router-link to="/liuxuesheng" class="fl link " target="_self">留学生落户</router-link>
                <router-link to="/rencai" class="fl link " target="_self">人才引进落户</router-link>
                <router-link to="/yingjiesheng" class="fl link " target="_self">应届生落户</router-link>
                <router-link to="/news" class="fl link " target="_self">资讯动态</router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.header {
    height: 90px;
    background: #fff
}

.header.border {
    border-bottom: 1px solid #e2e2e2
}

.header .area-1 {
    margin-top: 25px
}

.header .area-1 .logo-link,
.header .area-1 .logo-link img {
    display: block;
    height: 40px
}

.header .enter-jigou {
    height: 40px;
    text-align: center;
    background: #f9f9fc;
    border-radius: 10px;
    color: #888;
    margin: 21px 0 0 20px;
    font-size: 14px;
    padding: 0 2px 2px
}

.header .enter-jigou .enter-img {
    margin: 3px 0;
    height: 14px;
    background: url('@/assets/images/enter-img2.png') no-repeat top;
    background-size: 22px
}

.header .enter-jigou .info {
    width: 66px;
    line-height: 18px;
    background: #2a65b2;
    border-radius: 10px;
    color: #fff
}

.header .enter-jigou:hover {
    background: #fa6400
}

.header .enter-jigou:hover .enter-img {
    background: url('@/assets/images/enter-img3.png') no-repeat top;
    background-size: 22px
}

.header .enter-jigou:hover .info {
    color: #fa6400;
    background: #fff
}

.header .area-2 {
    padding: 18px 0 0 80px
}

.header .area-2 .link {
    display: block;
    line-height: 22px;
    padding: 25px 15px;
    color: #888;
    font-size: 16px;
    position: relative
}

.header .area-2 .link:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid transparent;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 13px
}

.header .area-2 .link.active,
.header .area-2 .link:hover {
    color: #2a65b2
}

.header .area-2 .link.active:after,
.header .area-2 .link:hover:after {
    border-bottom: 8px solid #2a65b2
}
</style>