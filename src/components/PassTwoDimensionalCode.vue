<template>
  <div class="container">
    <Tabs value="applicationform" class="tabs">
        <TabPane label="申请表单" name="applicationform" class="ivu-tabs-tabpane">
          <div class="head">
            <!-- <Icon type="ios-list-box-outline" class="icon" /> -->
            <!--画一个小图标先-->
            <div style="width: 14px; height: 15px; border: 1px solid #2d8cf0; border-radius: 2px; display: flex; flex-direction: column; justify-content: space-between; padding: 2px">
              <div style="width: 8px; height: 0px; border: 0.5px solid #2d8cf0; border-radius: 0.5px"/>
              <div style="width: 5px; height: 0px; border: 0.5px solid #2d8cf0; border-radius: 0.5px"/>
              <div style="width: 6px; height: 0px; border: 0.5px solid #2d8cf0; border-radius: 0.5px"/>
            </div>
            <span class="icon-text">请假外出、返校权限查询</span>
          </div>
          <div class="label">
            <span class="label-text">姓名</span>
          </div>
          <div class="content">
            <span class="content-text">{{ name }}</span>
          </div>
          <div class="label">
            <span class="label-text">学院</span>
          </div>
          <div class="content">
            <span class="content-text">信息与通信工程学院</span>
          </div>
          <div class="label">
            <span class="label-text">状态码</span>
          </div>
          <div class="content">
            <img src="../assets/two_dimensional_code.png" class="picture">
          </div>
          <div class="label">
            <span style="font-size: 20px">状态</span>
          </div>
          <div class="content">
            <span class="state-text">允许出校</span>
          </div>
          <div class="label">
            <span class="label-text">学工号</span>
          </div>
          <div class="content">
            <span class="content-text">{{ id }}</span>
          </div>
          <div class="label">
            <span class="label-text">出入校时间</span>
          </div>
          <div class="content">
            <span class="content-text">{{ time }}</span>
          </div>
        </TabPane>
    </Tabs>
    <div class="more">
      <Button shape="circle" class="button"><span style="color: #2d8cf0">更多</span></Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PassTwoDimensionalCode',
  data () {
    return {
      name: '席林晗',
      id: 2019140231
    }
  },
  computed: {
    time: {
      get: function () {
        const time = new Date()
        const year = time.getFullYear()
        const month = time.getMonth() + 1
        const day = time.getDay() - 1
        const hour = time.getHours()
        const minite = time.getMinutes()
        const second = time.getSeconds()
        return `${year}-${month > 9 ? month : `0${month}`}-${day > 9 ? day : `0${day}`} ${hour}:${minite > 9 ? minite : `0${minite}`}:${second > 9 ? second : `0${second}`}`
      }
    }
  }
}
</script>

<style lang="css" scoped>
.container {

}
.tabs {
}
.ivu-tabs-tabpane {
  background-color: #eeeeee;
  padding-bottom: 50px;
}
.nav-text ivu-tabs-nav {
  width: 50%;
}
.head {
  margin: 15px 15px 0 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
}
.icon {
  font-size: 16px;
  color: #2d8cf0;
}
.icon-text {
  font-size: 15px;
  font-weight: 700;
  margin-left: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.label {
  padding: 15px;
}
.label-text {
  font-size: 16px;
}
.content {
  padding: 15px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-text {
  font-size: 16px;
}
.picture {

}
.state-text {
  color: rgb(4, 146, 23);
  font-size: 20px;
  font-weight: 700;
}
.more {
  padding: 5px 10px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  width: 100%;
}
.button {
  border-color: #2d8cf0;
}
</style>
