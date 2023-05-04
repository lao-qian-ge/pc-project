<template>
    <div class="footer font-light">
        <div class="area">
            <router-link to="/">首页&nbsp;
            </router-link>
            <p class="line">|</p>
            <router-link to="/luohu">上海落户&nbsp;
            </router-link>
            <p class="line">|</p>
            <router-link to="/zice">上海落户自测&nbsp;
            </router-link>
            <p class="line">|</p>
            <router-link to="/juzhuanhu">上海居转户&nbsp;
            </router-link>
            <p class="line">|</p>

            <router-link to="/liuxuesheng">留学生落户&nbsp;
            </router-link>

            <p class="line">|</p>
            <router-link to="/rencai">人才引进落户&nbsp;
            </router-link>
            <p class="line">|</p>
            <router-link to="/yingjiesheng">应届生落户&nbsp;
            </router-link>
            <p class="line">|</p>
            <router-link to="/news">资讯动态&nbsp;
            </router-link>
            <p class="line">|</p>
            <router-link to="/">隐私保护声明&nbsp;
            </router-link>
            <p class="line">|</p>
            <router-link to="/">机构入驻&nbsp;<em class="iconfont icon-guanzhu"></em>
            </router-link>
        </div>
        <div class="area">
            <p class="copy"><router-link class="item" to="/" target="_blank"> 沪ICP备2021026263号-3</router-link>
                上海落户网 上海沪邦邦人才服务有限公司</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer {
    height: 100px;
    width: 100%;
    background: #333;
    text-align: center;
    padding-top: 25px
}

.footer .area {
    font-size: 0;
    line-height: 20px;
    padding-bottom: 10px
}

.footer .area a,
.footer .area p {
    color: #aaa;
    display: inline-block;
    font-size: 14px;
    vertical-align: top
}

.footer .area .line {
    padding: 0 15px
}

.footer .area .item {
    padding-right: 20px
}

.footer .area a:hover {
    color: #fff
}

.footer .area .copy a {
    padding-right: 20px
}

.footer .area .iconfont {
    font-size: 12px
}
</style>