<template>
  <div class="list-pr">
    <div class="content-box subject-main" style="min-height: 720px">
      <div class="crumbs font-light">
        <a href="/">首页</a> &gt;

        <a href="/news">资讯动态</a> &gt;

        <a href="/news/5041.html">2023上海五年一户政策迎来大变化！上海家长必看！</a>
      </div>
      <div class="pb50">
        <div class="area-fl">
          <div class="detail">
            <h1 class="detail-tit font-weight">
              2023上海五年一户政策迎来大变化！上海家长必看！
            </h1>
            <div class="single-info">
              <p class="person">
                <em class="iconfont icon-shouye"></em>
                <span class="font-light">来源：<a href="/">上海落户网</a></span>
              </p>
              <p class="time">
                <em class="iconfont icon-a-shijian"></em>
                <span class="font-light">2023-04-20</span>
              </p>
              <p class="read">
                <em class="iconfont icon-liulan"></em>
                <span class="font-light">59 浏览</span>
              </p>
            </div>
            <div class="detail-content">hello</div>
            <!-- 详情页按钮 -->
            <div class="seo-btn-box seo-btn-box-one">
              <div class="seo-btn-item">
                <a href="/zice" class="seo-btn-item-bd seo-btn-item-first" target="_blank">我已了解，申请上海落户</a>
              </div>
              <div class="seo-btn-item">
                <div class="
                    seo-btn-item-bd seo-btn-item-second
                    clickTalk
                    clickLine
                  ">
                  还不清楚，在线咨询
                </div>
              </div>
            </div>
            <div class="copyright">
              <p>版权声明</p>
              <h4 class="font-light">本文仅代表作者观点，不代表本站立场</h4>
              <h4 class="font-light">本文系作者授权发表，未经许可，不得转载</h4>
              <h4 class="font-light">来源：名企—上海落户通</h4>
            </div>
          </div>
          <div class="floor">
            <div class="tit">资讯动态相关推荐</div>
            <div class="content font-light clearfix">
              <div class="link">
                <a href="/luohu/4542.html" class="news-tit ellipsis fl">上海落户新政策2022重大调整，社保补缴政策再出新规！（官方原文）</a>
                <p class="time fr">11-07</p>
              </div>
              <div class="link">
                <a href="/news/4525.html" class="news-tit ellipsis fl">上海中级职称落户社保基数要求，2022上海落户职称目录（最新版）</a>
                <p class="time fr">11-02</p>
              </div>
            </div>
          </div>
        </div>
        <right-item></right-item>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RightItem from '@/components/right/Index.vue'
import { reactive, toRefs, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { queryById } from '@/service/api/index'
const route = useRoute()
const userData = ref()

let state: { detail: object } = reactive({ // 响应式数据
  detail: {}
})
const { detail } = toRefs(state);

watch(
  () => route.params.id,
  async newId => {
    userData.value = await fetchUser(newId)
  }
)

function getDetail(id: number) {
  queryById({
    id: id,
  }).then(res => {
    if (res.code == 200) {
      state.detail = res.result
    }
  })
}

</script>
<style>
.font-light {
  font-family: PingFangSC-Light;
  font-weight: 300;
}

.font-weight {
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
}

.font-bold {
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
}

.list-pr {
  position: relative;
}

.pb50 {
  padding-bottom: 50px;
}

.calc-code {
  display: none;
  position: absolute;
  top: 70px;
  width: 320px;
  height: 600px;
  background: url(../../images/right.jpg?v=202111300219) no-repeat top;
  background-size: cover;
}

.calc-code .tit {
  color: #fff;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  padding: 18px 0 154px;
}

.calc-code .code {
  width: 160px;
  height: 160px;
  background: #fff;
  border-radius: 80px;
  border: 1px solid #ffcaad;
  padding: 10px;
  margin: 0 auto;
}

.calc-code .code img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.calc-code .txt1 {
  text-align: center;
  color: #e02020;
  font-size: 16px;
  line-height: 26px;
  padding: 20px 0 22px;
}

.calc-code .txt2 {
  color: #333;
  font-size: 14px;
  line-height: 24px;
  padding: 0 27px;
  text-align: justify;
}

.calc-code.calc-code-fixed {
  position: fixed;
}

.news-left {
  width: 850px;
}

.news-list {
  border: 1px solid #e2e2e2;
}

.news-list .item {
  display: block;
  border-top: 1px solid #f0f0f0;
  padding: 25px 29px;
}

.news-list .item:first-child {
  border: none;
}

.news-list .item .imgs {
  width: 180px;
  height: 122px;
  overflow: hidden;
  display: block;
}

.news-list .item .imgs img {
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.news-list .item .imgs:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.news-list .item .content {
  width: 610px;
  height: 122px;
  color: #888;
  padding-left: 20px;
}

.news-list .item .content .tit {
  font-size: 18px;
  line-height: 24px;
  color: #333;
  padding-bottom: 10px;
  display: block;
}

.news-list .item .content .tit span {
  display: inline-block;
  width: 36px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  background: #e02020;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 12px;
  margin-top: 2px;
  vertical-align: text-top;
}

.news-list .item .content .tit:hover {
  color: #fa6400;
}

.news-list .item .content .describe {
  font-size: 14px;
  line-height: 20px;
  height: 20px;
}

.news-list .item .content .info {
  padding-top: 30px;
  line-height: 20px;
}

.news-list .item .content .info p {
  float: left;
  font-size: 14px;
  padding-right: 30px;
}

.news-list .item .content .info p:nth-child(2) i {
  font-size: 12px;
}

.news-list .item .content .info i {
  padding-right: 10px;
  font-size: 14px;
  color: #c8c8c8;
  vertical-align: text-top;
}

.news-list .item:hover .content {
  background: #f9f9f9;
}

.list-pages {
  text-align: center;
}

.list-pages .pagesnew {
  margin-top: 30px;
  font-size: 0;
}

.list-pages .pagesnew>div {
  display: inline-block;
  text-align: center;
  overflow: hidden;
  vertical-align: top;
  margin: 0 4px;
  cursor: pointer;
}

.list-pages .pagesnew>div .zjtrain-iconfont {
  font-size: 10px;
}

.list-pages .pagesnew>div a,
.list-pages .pagesnew>div span {
  border: 1px solid #e2e2e2;
  color: #333;
  font-size: 14px;
  display: block;
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 2px;
  line-height: 30px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.list-pages .pagesnew>div.active a,
.list-pages .pagesnew>div.active span,
.list-pages .pagesnew>div:hover a {
  border-color: #fa6400;
  background: #fa6400;
  color: #fff;
}

.list-pages .pagesnew>div a.disabled,
.list-pages .pagesnew>div span.disabled {
  background: #fff;
  border: 1px solid #e2e2e2;
  color: #999;
  cursor: default;
}

.area-fl {
  width: 850px;
}

.area-fl .floor {
  height: 234px;
  border: 1px solid #e2e2e2;
}

.area-fl .floor .tit {
  height: 50px;
  line-height: 50px;
  background: #f9f9f9;
  padding-left: 37px;
  font-size: 18px;
  color: #2a65b2;
  position: relative;
}

.area-fl .floor .tit:after {
  content: '';
  position: absolute;
  width: 4px;
  height: 18px;
  background: #2a65b2;
  left: 25px;
  top: 16px;
}

.area-fl .floor .content {
  padding: 12px 25px 0;
}

.area-fl .floor .content .link {
  width: 380px;
  line-height: 30px;
  font-size: 14px;
  position: relative;
  padding-left: 14px;
}

.area-fl .floor .content .link .news-tit {
  width: 300px;
  color: #333;
  display: block;
}

.area-fl .floor .content .link .news-tit:hover {
  color: #fa6400;
}

.area-fl .floor .content .link .time {
  color: #888;
}

.area-fl .floor .content .link:after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background: #d8d8d8;
  border-radius: 50%;
  left: 0;
  top: 12px;
}

.area-fl .floor .content .link:nth-child(odd) {
  float: left;
}

.area-fl .floor .content .link:nth-child(2n) {
  float: right;
}

.detail {
  border: 1px solid #e3e6e9;
  margin-bottom: 38px;
}

.detail .detail-tit {
  text-align: center;
  padding: 40px 35px 14px;
  font-size: 24px;
  line-height: 33px;
  color: #333;
}

.detail .single-info {
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 2px solid #e3e6e9;
}

.detail .single-info p {
  display: inline-block;
  vertical-align: top;
  line-height: 20px;
  color: #888;
  font-size: 0;
}

.detail .single-info p:nth-child(2) {
  padding: 0 30px 0 42px;
}

.detail .single-info p:nth-child(3) em {
  font-size: 12px;
}

.detail .single-info em,
.detail .single-info span {
  display: inline-block;
  vertical-align: top;
}

.detail .single-info em {
  color: #c8c8c8;
  margin-right: 8px;
  font-size: 14px;
}

.detail .single-info span {
  font-size: 14px;
}

.detail .single-info a {
  color: #888;
}

.detail .single-info a:hover {
  color: #fa6400;
}

.detail .detail-content {
  padding: 40px 35px 0;
  word-break: break-all;
  font-size: 16px;
  color: #333;
  line-height: 28px;
  font-family: PingFangSC-Light;
  font-weight: 300;
}

.detail .detail-content em {
  font-style: italic;
}

.detail .detail-content b,
.detail .detail-content strong {
  font-weight: 700;
}

.detail .detail-content b em,
.detail .detail-content b p,
.detail .detail-content b span,
.detail .detail-content strong em,
.detail .detail-content strong p,
.detail .detail-content strong span {
  font-family: PingFangSC-Regular;
  font-weight: 700;
}

.detail .detail-content a {
  cursor: pointer;
  color: #07aef0;
}

.detail .detail-content a em,
.detail .detail-content a p,
.detail .detail-content a span {
  color: #07aef0 !important;
}

.detail .detail-content a:hover {
  color: #fa6400;
  text-decoration: underline;
}

.detail .detail-content a:hover em,
.detail .detail-content a:hover p,
.detail .detail-content a:hover span {
  color: #fa6400;
}

.detail .detail-content div,
.detail .detail-content p,
.detail .detail-content span {
  font-size: 16px;
  color: #333;
  line-height: 28px;
  font-family: PingFangSC-Light;
  font-weight: 300;
}

.detail .detail-content p {
  padding-bottom: 20px;
}

.detail .detail-content h3 {
  background: #f9f9f9;
  font-size: 18px;
  color: #333;
  line-height: 28px;
  padding: 6px 12px 6px 42px;
  position: relative;
  margin-bottom: 20px;
  font-family: PingFang SC;
  font-weight: 400;
}

.detail .detail-content h3:after {
  position: absolute;
  content: '';
  width: 30px;
  height: 18px;
  background: #2a65b2;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.detail .detail-content h3 span {
  font-size: 18px;
  font-family: PingFangSC-Regular;
}

.detail .detail-content img {
  margin: 10px auto;
  display: block;
  max-width: 100%;
  height: auto !important;
}

.detail .detail-content table {
  margin: 0 0 30px !important;
  width: 100% !important;
  font-weight: 300;
}

.detail .detail-content table tr td {
  padding: 10px;
  border: 1px solid #d5d5d5;
  font-size: 16px;
  color: #333;
  line-height: 28px;
  white-space: normal;
  vertical-align: top;
}

.detail .detail-content table tr td p {
  padding-bottom: 0;
}

.detail .detail-content table tr td strong {
  font-family: PingFangSC-Light;
  font-weight: 300;
}

.detail .detail-content table tr td em {
  font-style: normal;
}

.detail .copyright {
  border-top: 1px dashed #e3e6e9;
  margin: 0 35px;
  text-align: right;
  padding: 9px 0 20px;
  margin-top: 30px;
}

.detail .copyright p {
  color: #333;
  font-size: 16px;
  line-height: 28px;
}

.detail .copyright h4 {
  font-size: 14px;
  line-height: 24px;
  color: #888;
}

.no-data {
  width: 850px;
  height: 600px;
  border: 1px solid #e3e6e9;
  text-align: center;
  padding-top: 40px;
}

.no-data img {
  width: 258px;
}

.no-data p {
  font-size: 18px;
  line-height: 24px;
  color: #888;
  padding-top: 20px;
}

.apply-form {
  width: 780px;
  margin: 30px auto 50px;
  padding: 0 35px;
}

.apply-form .apply-btn {
  background: #ff8033;
}

.apply-form .apply-btn:hover {
  background: #fa6400;
}

.apply-form .info a:hover,
.select-box .select-con li.active,
.select-box .select-con li:hover {
  color: #fa6400;
}
</style>