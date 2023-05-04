<template>
  <div class="h1000 subject-main" style="min-height: 387px">
    <div
      id="zjtrain-calc"
      class="metia-min-height subject-main"
      style="min-height: 387px"
    >
      <div class="crumbs content-box font-light">
        <a href="http://www.vgxf.com/" class="link L-Affiliate-Tagged">首页</a>
        &gt;
        <a href="/zice" class="txt L-Affiliate-Tagged"
          >上海市积分落户自动评测系统</a
        >
      </div>
      <!---->
      <div id="section-step" class="calculation-box content-box" style="">
        <div class="calculation-warp calculation-warp-show">
          <div class="progress-box clearfix">
            <div class="progress-step fl progress-step-show" style="width: 10%">
              <p class="line"></p>
              <div class="progress-num">
                <p class="zjtrain-iconfont iconfont icon-jisuanqitimu"></p>
                <div class="progress-num-bd"><em class="num">01</em>/10</div>
              </div>
            </div>
          </div>
          <div class="calculation-warp-bd clearfix">
            <div class="calc-border fl"></div>
            <div class="step step1 step-show">
              <p class="subject-tit tc">是否持有有效期内《上海市居住证》？</p>
              <div class="radio-list">
                <label
                  ><strong class="radio-strong"><input type="radio" /></strong>
                  是<em style="padding-left: 40px">持有</em
                  ><input type="text" class="input" />年
                </label>
              </div>
              <div class="radio-list">
                <label
                  ><strong class="radio-strong"><input type="radio" /></strong
                  >否</label
                >
              </div>
              <p class="button button-sm button-danger">下一题</p>
            </div>
            <div class="step step2">
              <p class="subject-tit tc">持证期间是否按规缴纳上海社保？</p>
              <div class="radio-list">
                <label
                  ><strong class="radio-strong"><input type="radio" /></strong>
                  是<em style="padding-left: 40px">累计缴纳</em
                  ><input type="text" class="input" />年
                </label>
              </div>
              <div class="radio-list">
                <label
                  ><strong class="radio-strong"><input type="radio" /></strong
                  >否</label
                >
              </div>
              <div class="btn-main">
                <p class="button button-sm button-danger">上一题</p>
                <p class="button button-sm button-danger">下一题</p>
              </div>
            </div>
            <div class="step step3">
              <p class="subject-tit tc">最近连续3年社保缴纳是否超过2倍基数？</p>
              <div class="radio-list">
                <label
                  ><strong class="radio-strong"><input type="radio" /></strong
                  >是</label
                >
              </div>
              <div class="radio-list">
                <label
                  ><strong class="radio-strong"><input type="radio" /></strong
                  >否</label
                >
              </div>
              <div class="btn-main">
                <p class="button button-sm button-danger">上一题</p>
                <p class="button button-sm button-danger">下一题</p>
              </div>
            </div>
            <div class="step step4 step-two-col">
              <p class="subject-tit tc">持证期间依法缴纳个人所得税</p>
              <div class="clearfix center-padding">
                <div class="radio-list selete-radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >对应社保缴费基数比例</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >高于社保缴费基数比例</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >低于社保缴费基数比例</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >未正常缴纳个税（包括申报0个税）</label
                  >
                </div>
              </div>
              <p
                class="step-trip clearfix"
                style="position: relative; z-index: 1"
              >
                <em
                  class="zjtrain-iconfont iconfont icon-jisuanqitimutixing fl"
                ></em
                >个税计算公式：个税金额=（应发工资-社保个人部分-5000）×税率-速算扣除率
              </p>
              <div class="btn-main">
                <p class="button button-sm button-danger">上一题</p>
                <p class="button button-sm button-danger">下一题</p>
              </div>
            </div>
            <div class="step step5 step-two-col">
              <p class="subject-tit tc">专业技术职称和技能等级</p>
              <div class="clearfix center-padding">
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >持有二级技能等级证书</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >持有中级技术职称证书</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >持有一级技能等级证书</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >持有高级技术职称证书</label
                  >
                </div>
                <div class="radio-list selete-radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >以上皆无/我不清楚</label
                  >
                </div>
              </div>
              <div class="btn-main">
                <p class="button button-sm button-danger">上一题</p>
                <p class="button button-sm button-danger">下一题</p>
              </div>
            </div>
            <div class="step step6 step-two-col-long">
              <p class="subject-tit tc">是否有违反以下情况的记录？</p>
              <div class="clearfix center-padding">
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >未婚先育、超生等违反计划生育情况</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >有行政处罚、违法犯罪记录</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >有未撤销的高等教育院校处分、党纪处分记录</label
                  >
                </div>
                <div class="radio-list selete-radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >以上皆无/我不清楚</label
                  >
                </div>
              </div>
              <div class="btn-main">
                <p class="button button-sm button-danger">上一题</p>
                <p class="button button-sm button-danger">下一题</p>
              </div>
            </div>
            <div class="step step7 step-two-col">
              <p class="subject-tit tc">就职单位机构性质及资质</p>
              <div class="clearfix center-padding">
                <div class="radio-list selete-radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >普通民营企业</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >国有企业</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >外资企业</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >以上皆无/我不清楚</label
                  >
                </div>
              </div>
              <div class="record-box">
                <div class="record-box-bd clearfix">
                  <p class="record-text fl">是否具备以下资质</p>
                  <div class="selete-box fl">
                    <div class="selete-box-hd">
                      <em class="selete-text">请选择</em>
                      <p class="text fr">
                        <em
                          class="
                            zjtrain-iconfont
                            iconfont
                            icon-jisuanqitimuxialacaidan
                          "
                        ></em>
                      </p>
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
              <div class="btn-main">
                <p class="button button-sm button-danger">上一题</p>
                <p class="button button-sm button-danger">下一题</p>
              </div>
            </div>
            <div class="step step8 step-two-col">
              <p class="subject-tit tc">是否符合以下条件？</p>
              <div class="clearfix center-padding">
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >获重大贡献奖励</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >在远郊地区教育岗位工作满5年</label
                  >
                </div>
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >在远郊地区卫生岗位工作满5年</label
                  >
                </div>
                <div class="radio-list selete-radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >以上皆无/我不清楚</label
                  >
                </div>
              </div>
              <div class="btn-main">
                <p class="button button-sm button-danger">上一题</p>
                <p class="button button-sm button-danger">下一题</p>
              </div>
            </div>
            <div class="step step9">
              <p class="subject-tit tc">
                是否最近3年计税薪酬收入高于上年同行业中级技术、技能或者管理岗位<br />年均薪酬收入水平的技术管理和关键岗位人员的收入？
              </p>
              <div class="clearfix">
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >是</label
                  >
                </div>
                <div class="radio-list selete-radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >否</label
                  >
                </div>
              </div>
              <div class="btn-main">
                <p class="button button-sm button-danger">上一题</p>
                <p class="button button-sm button-danger">下一题</p>
              </div>
            </div>
            <div class="step step10">
              <p class="subject-tit tc">
                企业主在本市直接投资（或者投资份额），最近连续3个纳税年度累计缴纳<br />总额及每年最低缴纳额是否达到本市规定标准，或者连续3年聘用上海市员<br />工人数达到规定标准？
              </p>
              <div class="clearfix">
                <div class="radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >是</label
                  >
                </div>
                <div class="radio-list selete-radio-list">
                  <label
                    ><strong class="radio-strong"><input type="radio" /></strong
                    >否</label
                  >
                </div>
              </div>
              <div class="btn-main">
                <p class="button button-sm button-danger">上一题</p>
                <p id="submitForm" class="button button-sm button-danger">
                  提交
                </p>
              </div>
            </div>
            <div class="calc-border fr"></div>
          </div>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>
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

#zjtrain-calc #section-step .progress-step {
  -webkit-transition: width 0.3s ease;
  transition: width 0.3s ease;
}

#zjtrain-calc #section-step .calculation-warp-bd {
  min-height: 420px;
  overflow: visible;
}

#zjtrain-calc #section-step .calculation-warp .error.error-show {
  z-index: 13;
}

#zjtrain-calc #section-step .calculation-warp .error.fade-enter,
#zjtrain-calc #section-step .calculation-warp .error.fade-leave-to {
  opacity: 0;
}

#zjtrain-calc #section-step .calculation-warp .error.fade-enter-active,
#zjtrain-calc #section-step .calculation-warp .error.fade-leave-active {
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}

#zjtrain-calc #section-step .step {
  opacity: 0;
  z-index: 11;
}

#zjtrain-calc #section-step .step .record-box {
  border-top: 1px dashed #d2d2d2;
  margin: 0 46px;
}

#zjtrain-calc #section-step .step .record-box-bd {
  margin: 22px auto 0;
}

#zjtrain-calc #section-step .step .record-box-bd .record-text {
  color: #333;
  font-size: 16px;
  margin-right: 18px;
  line-height: 45px;
  padding-left: 156px;
}

#zjtrain-calc #section-step .step .record-box .selete-box {
  width: 220px;
}

#zjtrain-calc #section-step .step.step-show {
  opacity: 1;
}

#zjtrain-calc #section-step .step.step-hide {
  opacity: 0;
}

#zjtrain-calc #section-step .step1 .radio-list,
#zjtrain-calc #section-step .step2 .radio-list,
#zjtrain-calc #section-step .step3 .radio-list,
#zjtrain-calc #section-step .step9 .radio-list,
#zjtrain-calc #section-step .step10 .radio-list {
  display: block;
  margin: 26px auto 0;
  width: 290px;
}

#zjtrain-calc #section-step .step-two-col .center-padding {
  padding-left: 86px;
}

#zjtrain-calc #section-step .step-two-col .radio-list {
  float: left;
  width: 290px;
}

#zjtrain-calc #section-step .step-two-col-long .center-padding {
  padding-left: 30px;
}

#zjtrain-calc #section-step .step-two-col-long .radio-list {
  float: left;
  width: 344px;
}

#zjtrain-calc #section-step .step4 .radio-list {
  float: left;
  width: 290px;
}

#zjtrain-calc #section-step .step4 .step-trip {
  width: 600px;
  padding-left: 35px;
}

#zjtrain-calc #section-step .step4 .btn-main {
  padding-top: 22px;
}
</style>
