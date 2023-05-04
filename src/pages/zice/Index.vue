<template>
  <div class="h1000 subject-main" style="min-height: 127px">
    <div
      id="zjtrain-calc"
      class="metia-min-height subject-main"
      style="min-height: 127px"
    >
      <div class="crumbs content-box font-light">
        <a href="/" class="link">首页</a> &gt;
        <a href="/zice" class="txt">上海市积分落户自动评测系统</a>
      </div>
      <div class="section0">
        <div class="content-box clearfix">
          <p class="img fl"><img src="@/assets/images/zice-img.jpg" /></p>
          <div class="item-info fl">
            <p class="titt tc">落户条件自测</p>
            <p class="text">
              本套自测系统基于上海市居转户政策研发，旨在帮助用户快速判断自己是否符合居转户申请条件，请根据问题和自身实际情况认真答题。
            </p>
            <div class="operator">
              <router-link class="button button-danger button-sm" to="/jifen"
                >积分计算</router-link
              >
              <router-link
                class="button button-sm button-warning clickLine"
                to="/pingce"
                >落户评测</router-link
              >
            </div>
          </div>
          <div class="trip font-light fl">
            此上海积分落户计算工具，符合本站
            <a target="_blank" rel="”nofollow”" href="/privacy.html"
              >《隐私保护声明》</a
            >
            协议，仅在目的必需的期间和法律法规要求的时限内保留您的信息。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
#zjtrain-calc {
  padding-bottom: 30px;
}

#zjtrain-calc .section0 {
  padding-top: 60px;
}

#zjtrain-calc .section0 .content-box {
  background: #fff;
}

#zjtrain-calc .section0 .content-box .img img {
  display: block;
  width: 600px;
  height: 375px;
}

#zjtrain-calc .section0 .content-box .item-info {
  width: 600px;
  padding: 76px 75px 0;
}

#zjtrain-calc .section0 .content-box .item-info .titt {
  font-size: 20px;
  color: #c01734;
  line-height: 28px;
}

#zjtrain-calc .section0 .content-box .item-info .text {
  padding-top: 20px;
  font-size: 16px;
  color: #333;
  line-height: 30px;
}

#zjtrain-calc .section0 .content-box .item-info .operator {
  padding-top: 40px;
  text-align: center;
}

#zjtrain-calc .section0 .content-box .item-info .button {
  width: 180px;
  margin: 0 12px;
}

#zjtrain-calc .section0 .content-box .trip {
  width: 100%;
  text-align: center;
  padding-top: 30px;
  font-size: 14px;
  line-height: 30px;
  color: #888;
  background: #f9f9fc;
}

#zjtrain-calc .section0 .content-box .trip a {
  color: #ff534f;
  display: inline-block;
}

#zjtrain-calc .section0 .content-box .trip a:hover {
  color: #c01734;
}
</style>