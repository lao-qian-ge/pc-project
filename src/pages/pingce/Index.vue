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
.all-tit {
  text-align: center;
  line-height: 45px;
}

.all-tit .left,
.all-tit .right {
  height: 45px;
  width: 43px;
  position: absolute;
  top: 0;
}

.all-tit .left {
  background: url(/images/tit-r.png?v=202002121656) no-repeat 0;
  background-size: 43px;
  left: -60px;
}

.all-tit-bd {
  display: inline-block;
  font-size: 32px;
  color: #333;
  position: relative;
  vertical-align: top;
}

.all-tit-bd span {
  color: #ff534c;
}

.all-tit .right {
  background: url(/images/tit-l.png?v=202002121656) no-repeat 0;
  background-size: 43px;
  right: -60px;
}

#zjtrain-calc {
  background: #f9f9fc;
}

#zjtrain-calc .all-tit {
  margin: 30px 0;
}

#zjtrain-calc .all-tit .all-tit-bd {
  font-weight: 400;
  font-family: PingFangSC-Regular, PingFang SC;
}

#zjtrain-calc .breadcrumbs {
  margin-top: 0;
}

#zjtrain-calc .check-list {
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  line-height: 43px;
  color: #333;
  font-size: 14px;
  margin: 12px 9px;
}

#zjtrain-calc .check-list label {
  display: block;
  padding: 0 14px;
  cursor: pointer;
}

#zjtrain-calc .check-list label .check-strong {
  vertical-align: middle;
  display: inline-block;
  margin-top: -2px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #dbdbdb;
  margin-right: 16px;
}

#zjtrain-calc .check-list label .check-strong input[type='checkbox'] {
  width: 18px;
  height: 18px;
  opacity: 0;
}

#zjtrain-calc .check-list.selete-check-list,
#zjtrain-calc .check-list:hover {
  border-color: #c01734;
}

#zjtrain-calc .check-list.selete-check-list label .check-strong,
#zjtrain-calc .check-list:hover label .check-strong {
  border-color: #c01734;
  position: relative;
}

#zjtrain-calc .check-list.selete-check-list label .check-strong:after,
#zjtrain-calc .check-list:hover label .check-strong:after {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #c01734;
  left: 3px;
  top: 3px;
}

#zjtrain-calc .check-list.disabled-check-list {
  background: #f5f5f5;
  color: #888;
}

#zjtrain-calc .check-list.disabled-check-list label .check-strong {
  background: #f5f5f5;
}

#zjtrain-calc .calculation-box {
  padding-bottom: 30px;
}

#zjtrain-calc .calculation-box .section1 .img img {
  display: block;
  width: 600px;
  height: 375px;
}

#zjtrain-calc .calculation-box .section1 .area {
  width: 451px;
  padding-top: 100px;
}

#zjtrain-calc .calculation-box .section1 .area .info {
  font-size: 16px;
  line-height: 30px;
  color: #333;
}

#zjtrain-calc .calculation-box .section1 .area .section-btn {
  margin: 40px 0 0 30px;
}

#zjtrain-calc .calculation-box .section1 .area .section-btn .button {
  width: 180px;
}

#zjtrain-calc .calculation-box .section1 .area .section-btn .button:last-child {
  margin-left: 25px;
}

#zjtrain-calc .calculation-box .section1 .trip {
  width: 100%;
  text-align: center;
  padding-top: 30px;
  font-size: 14px;
  line-height: 30px;
  color: #888;
  background: #f9f9fc;
}

#zjtrain-calc .calculation-box .section1 .trip a {
  color: #ff534f;
  display: inline-block;
}

#zjtrain-calc .calculation-box .section1 .trip a:hover {
  color: #c01734;
}

#zjtrain-calc .calculation-box .section1.calc-back {
  background: #fff;
  position: relative;
}

#zjtrain-calc .calculation-box .section1.calc-back .code-img-box {
  position: absolute;
  width: 160px;
  height: 160px;
  top: 113px;
  left: 220px;
  border-radius: 50%;
  overflow: hidden;
  padding: 8px;
}

#zjtrain-calc .calculation-box .section1.calc-back .code-img {
  width: 100%;
  height: 100%;
}

#zjtrain-calc .calculation-box .section1.calc-back .area {
  padding-top: 0;
  margin-right: 75px;
}

#zjtrain-calc .calculation-box .section1.calc-back .area .info {
  padding-top: 78px;
}

#zjtrain-calc .calculation-box .section1.calc-back .wechat-text {
  width: 430px;
  height: 40px;
  background: #e4e8ff;
  border-radius: 30px;
  position: absolute;
  bottom: 30px;
  left: 85px;
  font-size: 16px;
  line-height: 40px;
  color: #333;
}

#zjtrain-calc .calculation-box .section1.calc-back .zjtrain-text {
  color: #fff;
  text-align: center;
  font-size: 20px;
  line-height: 45px;
}

#zjtrain-calc .calculation-box .section1.calc-back .zjtrain-text.mobile-text {
  position: absolute;
  width: 600px;
  top: 0;
  left: 0;
}

#zjtrain-calc .calculation-box .section1.calc-back .zjtrain-text.pc-text {
  width: 265px;
  height: 45px;
  background: url(../../images/calc-tit-bg.png) no-repeat 50%;
  background-size: cover;
  margin: 0 auto;
}

#zjtrain-calc .calculation-box .ren-box {
  width: 420px;
  height: 260px;
  border-radius: 10px;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -210px;
  margin-top: -130px;
  z-index: 100;
  padding: 30px 30px 0;
  text-align: center;
}

#zjtrain-calc .calculation-box .ren-box .icon-close {
  position: absolute;
  font-size: 24px;
  color: #888;
  line-height: 20px;
  right: 0;
  top: 0;
  padding: 10px 8px;
  cursor: pointer;
}

#zjtrain-calc .calculation-box .ren-box .icon-tijiaochenggong {
  color: #af2d39;
  font-size: 40px;
}

#zjtrain-calc .calculation-box .ren-box .info {
  color: #c01734;
  font-size: 18px;
  padding: 2px 0 18px;
}

#zjtrain-calc .calculation-box .ren-box .desc {
  border: 1px solid #feddd7;
  background: #fefbfb;
  border-radius: 5px;
  color: #666;
  font-size: 18px;
  line-height: 30px;
  padding: 12px 0;
}

#zjtrain-calc .calculation-box .calculation-warp {
  position: relative;
  opacity: 0;
}

#zjtrain-calc .calculation-box .calculation-warp.calculation-warp-show {
  opacity: 1;
  padding-top: 64px;
}

#zjtrain-calc .calculation-box .calculation-warp .progress-box {
  margin: 5px auto 20px;
  width: 792px;
  height: 6px;
  border-radius: 3px;
  background: #eff1f4;
}

#zjtrain-calc .calculation-box .calculation-warp .progress-box .progress-step {
  width: 72px;
  position: relative;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp
  .progress-box
  .progress-step
  .progress-num {
  font-family: ArialMT;
  position: absolute;
  width: 54px;
  right: -26px;
  bottom: 12px;
  display: none;
  overflow: hidden;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp
  .progress-box
  .progress-step
  .progress-num
  .iconfont {
  color: #ff843d;
  font-size: 54px;
  line-height: 30px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp
  .progress-box
  .progress-step
  .progress-num-bd {
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  padding: 2px 0;
  left: 0;
  top: 0;
  color: #fff;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp
  .progress-box
  .progress-step
  .progress-num-bd
  .num {
  font-size: 16px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp
  .progress-box
  .progress-step
  .line {
  width: 100%;
  height: 6px;
  background: #ff843d;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp
  .progress-box
  .progress-step-show
  .progress-num {
  display: block;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp
  .progress-box
  .progress-step:first-child
  .line {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp
  .progress-box
  .progress-step:last-child
  .line {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd {
  position: relative;
  overflow: hidden;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .calc-border {
  width: 150px;
  height: 380px;
  position: absolute;
  z-index: 2;
  top: 50%;
  margin-top: -190px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .calc-border.fl {
  left: 0;
  background: url(../../images/calc-bg-l.png) no-repeat 0;
  background-size: 150px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .calc-border.fr {
  right: 0;
  background: url(../../images/calc-bg-r.png) no-repeat 0;
  background-size: 150px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step {
  width: 792px;
  min-height: 420px;
  border: 1px solid #ffd2c9;
  background: #fefbfb;
  border-radius: 10px;
  padding: 50px 0 85px;
  position: absolute;
  top: 0;
  left: 1200px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  z-index: 4;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step-show {
  left: 204px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step-hide {
  left: -1200px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .subject-tit {
  font-size: 20px;
  color: #333;
  line-height: 28px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .subject-tit strong {
  color: #ff534f;
  font-weight: 400;
  font-family: PingFangSC-Regular, PingFang SC;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .step-trip {
  width: 540px;
  height: 60px;
  line-height: 60px;
  border-radius: 30px;
  background: #fef5f5;
  padding-left: 53px;
  font-size: 14px;
  color: #ff534f;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .step-trip .iconfont {
  font-size: 24px;
  margin-right: 10px;
  line-height: 24px;
  margin-top: 18px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .selete-box {
  height: 45px;
  position: relative;
  z-index: 1;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .selete-box-hd {
  background: #fff;
  border: 1px solid #dbdbdb;
  line-height: 43px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  padding: 0 12px 0 15px;
  border-radius: 5px;
  cursor: pointer;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .selete-box-hd
  .selete-text {
  color: #888;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .selete-box-hd .text {
  color: #333;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .selete-box-hd
  .text
  .iconfont {
  margin-left: 10px;
  font-size: 15px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .selete-box-bd {
  width: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  top: 55px;
  box-shadow: 0 0 5px 1px #f3f2f4;
  z-index: 2;
  border-radius: 5px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .selete-box-bd ul {
  max-height: 240px;
  overflow-y: auto;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .selete-box-bd
  ul::-webkit-scrollbar {
  width: 4px;
  border-radius: 2px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .selete-box-bd
  ul::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: #f2f2f2;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .selete-box-bd
  ul::-webkit-scrollbar-corner,
#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .selete-box-bd
  ul::-webkit-scrollbar-track {
  border-radius: 2px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .selete-box-bd ul li {
  line-height: 40px;
  padding: 0 15px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .selete-box-bd
  ul
  li.is-seleted,
#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .selete-box-bd
  ul
  li:hover {
  background: #ffefdc;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .input {
  width: 50px;
  border: 0;
  border-bottom: 1px solid #333;
  height: 18px;
  line-height: 18px;
  text-align: center;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .radio-list {
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  line-height: 43px;
  color: #333;
  font-size: 14px;
  margin: 12px 10px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .radio-list label {
  display: block;
  padding: 0 14px;
  cursor: pointer;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .radio-list
  label
  .radio-strong {
  vertical-align: middle;
  display: inline-block;
  margin-top: -2px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #dbdbdb;
  margin-right: 16px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .radio-list
  label
  .radio-strong
  input[type='radio'] {
  width: 18px;
  height: 18px;
  opacity: 0;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .radio-list.selete-radio-list,
#zjtrain-calc .calculation-box .calculation-warp-bd .step .radio-list:hover {
  border-color: #c01734;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .radio-list.selete-radio-list
  label
  .radio-strong,
#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .radio-list:hover
  label
  .radio-strong {
  border-color: #c01734;
  position: relative;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .radio-list.selete-radio-list
  label
  .radio-strong:after,
#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .radio-list:hover
  label
  .radio-strong:after {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #c01734;
  left: 3px;
  top: 3px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .button {
  width: 160px;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -80px;
  z-index: 0;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step .btn-main .button {
  margin-left: 0;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .btn-main
  .button:first-child {
  background: none;
  left: 226px;
  border: 1px solid #ff534f;
  color: #ff534f;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .btn-main
  .button:first-child:hover {
  background: #c01734;
  color: #fff;
  border-color: #c01734;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step
  .btn-main
  .button:last-child {
  right: 226px;
  left: auto;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step1 .age-main {
  text-align: center;
  padding-top: 15px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step1 .age-text {
  color: #333;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  line-height: 45px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step1 .age-box {
  vertical-align: middle;
  display: inline-block;
  width: 120px;
  margin: 0 8px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step1
  .age-box
  .selete-box-hd {
  padding: 0 8px 0 10px;
  text-align: left;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step1
  .age-box
  .selete-box-bd {
  padding-right: 4px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step1
  .age-box
  .selete-box-bd
  ul
  li {
  padding: 0 20px;
  text-align: left;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step1
  .age-box
  .selete-box-bd
  .text
  .iconfont {
  margin-left: 6px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step1
  .age-box.year-selete
  .year-selete-hide,
#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step1
  .age-box.year-selete
  .year-selete-show {
  display: block !important;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step1
  .age-box.year-selete
  .year-selete-show {
  height: auto;
  overflow: auto;
  z-index: 2;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step1
  .age-box.year-selete
  .year-selete-hide {
  height: 0;
  overflow: hidden;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step1 .step-trip {
  margin: 70px auto 0;
  width: 700px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step2 {
  padding-left: 36px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step2
  .education-box-bd {
  padding-bottom: 10px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step2
  .education-box-list {
  width: 220px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step2 .record-box {
  border-top: 1px dashed #d2d2d2;
  margin: 0 46px 0 0;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step2 .record-box-bd {
  margin: 22px auto 0;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step2
  .record-box-bd
  .record-text {
  color: #333;
  font-size: 16px;
  margin-right: 18px;
  line-height: 45px;
  padding-left: 156px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step2
  .record-box
  .selete-box {
  width: 220px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step3 .skills-box {
  padding-left: 86px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step3
  .skills-box-list {
  width: 290px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step3
  .professional-box {
  border: 1px dashed #ff534f;
  width: 598px;
  height: 80px;
  margin: 8px auto 20px;
  border-radius: 5px;
  padding: 5px 10px 0 18px;
  background: #fef5f5;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step3
  .professional-box-hd {
  font-size: 14px;
  line-height: 20px;
  color: #333;
  margin: 14px 10px 0 0;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step3
  .professional-box-hd
  strong {
  font-weight: 400;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #ff534f;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step3
  .professional-box-bd
  .radio-list {
  width: 100px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step4 .social-box {
  padding: 14px 0 6px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step4
  .social-box
  .radio-list {
  width: 290px;
  margin: 0 auto 24px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step4 .step-trip {
  margin: 0 auto;
  padding-left: 29px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step5
  .high-social-box {
  padding: 15px 0 6px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step5
  .high-social-box
  .radio-list {
  width: 418px;
  margin: 0 auto 8px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step6 .reward-box {
  padding-left: 56px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step6
  .reward-box
  .radio-list {
  width: 320px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step7
  .business-box-hd {
  padding-top: 12px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step7
  .business-box-hd
  .radio-list {
  width: 220px;
  margin: 0 auto;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step7
  .business-box-hd
  .radio-list:first-child {
  margin-bottom: 24px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step7
  .business-box-bd {
  width: 695px;
  border: 1px dotted #ff534f;
  border-radius: 5px;
  margin: 25px auto 0;
  font-size: 14px;
  color: #333;
  text-align: center;
  background: #fef5f5;
  line-height: 80px;
  position: relative;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step7
  .business-box-bd
  .input {
  background: #fef5f5;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step8 .interface-box {
  padding-top: 12px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step8
  .interface-box
  .radio-list {
  width: 550px;
  margin: 0 auto 24px;
}

#zjtrain-calc .calculation-box .calculation-warp-bd .step.step9 .needed-box-bd {
  padding-top: 12px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step9
  .needed-box
  .check-list {
  width: 340px;
  margin: 0 auto 24px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step9
  .needed-box
  .check-list:last-child {
  margin-bottom: 0;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step9
  .needed-box
  .step-trip {
  position: relative;
  padding: 8px 0 0 96px;
  margin: 20px auto 40px;
  line-height: 22px;
  width: 600px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step9
  .needed-box
  .step-trip
  .iconfont {
  position: absolute;
  left: 56px;
  top: 17px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step11
  .violation-box {
  padding-top: 12px;
}

#zjtrain-calc
  .calculation-box
  .calculation-warp-bd
  .step.step11
  .violation-box
  .check-list {
  width: 360px;
  margin: 0 auto 24px;
}

#zjtrain-calc .calculation-box .calculation-warp .error {
  position: absolute;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.8);
  width: 220px;
  height: 80px;
  line-height: 80px;
  top: 50%;
  left: 50%;
  margin-left: -110px;
  margin-top: -50px;
  font-size: 16px;
  text-align: center;
  opacity: 1;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

#zjtrain-calc .calculation-box .calculation-warp .error .info {
  color: #fff;
}

#zjtrain-calc .calculation-box .calculation-warp .error.error-show {
  z-index: 10;
}

#zjtrain-calc .calculation-box .calculation-warp .error.error-hide {
  opacity: 0;
  z-index: -1;
}
</style>
