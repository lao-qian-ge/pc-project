<template>
  <div class="list-pr">
    <div class="content-box subject-main" style="min-height: 720px">
      <div class="crumbs font-light">
        <a href="/">首页</a> &gt;
        <a href="/liuxuesheng">留学生</a>
      </div>
      <div class="pb50">
        <div class="news-left">
          <div class="news-list">
            <div class="item clearfix">
              <a href="/liuxuesheng/4065.html" class="imgs fl">
                <img
                  src="http://img.vgxf.com/cmsfiles/2022/06/17/16554305691101655430569110.png?x-oss-process=image%2Fformat%2Cwebp%2Fwatermark%2Ctext_d3d3LnZneGYuY29t%2Cfill_1%2Crotate_315%2Corder_0%2Ct_10%2Cy_1%2Csize_22%2Ctype_ZmFuZ3poZW5naGVpdGk"
                  alt="官方认定了！上海留学生落户前50、前100大学名单出炉，有你学校吗？"
                />
              </a>
              <div class="content fr">
                <a href="/liuxuesheng/4065.html" class="tit ellipsis">
                  <span class="hot-icon">HOT</span
                  >官方认定了！上海留学生落户前50、前100大学名单出炉，有你学校吗？
                </a>
                <div class="describe ellipsis font-light">
                  上海最近发布的留学生落户新政，最利好的是对境外前100院校毕业的留学生。最近更新后的留学生落户所参考的世界500强高校名单在哪里可以查询？上海人社局官方认定世界前50、前100名可以直接落户上海的名单出炉~赶紧跟我一起看看！
                </div>
                <div class="info font-light clearfix">
                  <p><i class="iconfont icon-a-shijian"></i>2022-06-17</p>
                  <p><i class="iconfont icon-liulan"></i>5066浏览</p>
                </div>
              </div>
            </div>
          </div>
          <div class="list-pages">
            <div class="pagesnew clearfix">
              <div class="pre"><a class="disabled">&lt;</a></div>
              <div class="pageItem active"><a class="">1</a></div>
              <div class="pageItem">
                <a class="" href="/liuxuesheng?page=2" title="2">2</a>
              </div>
              <div class="next">
                <a class="" href="/liuxuesheng?page=2" title="">&gt;</a>
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
</script>
<style scoped lang="scss">
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

.list-pages .pagesnew > div {
  display: inline-block;
  text-align: center;
  overflow: hidden;
  vertical-align: top;
  margin: 0 4px;
  cursor: pointer;
}

.list-pages .pagesnew > div .zjtrain-iconfont {
  font-size: 10px;
}

.list-pages .pagesnew > div a,
.list-pages .pagesnew > div span {
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

.list-pages .pagesnew > div.active a,
.list-pages .pagesnew > div.active span,
.list-pages .pagesnew > div:hover a {
  border-color: #fa6400;
  background: #fa6400;
  color: #fff;
}

.list-pages .pagesnew > div a.disabled,
.list-pages .pagesnew > div span.disabled {
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