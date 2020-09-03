<template>
  <div class="container">
    <Tabs value="applicationform">
        <TabPane label="申请表单" name="applicationform" class="ivu-tabs-tabpane">
          <div class="head">
            <Icon type="ios-list-box-outline" class="icon" />
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
            <span class="label-text">状态</span>
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
      <Button shape="circle" class="button">更多</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PassTwoDimensionalCode',
  data () {
    return {
      name: '老席',
      id: 52150911
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
        return `${year}-${month}-${day} ${hour}:${minite}:${second}`
      }
    }
  }
}
</script>

<style lang="css" scoped>
.container {

}
.ivu-tabs-tabpane {
  background-color: #eeeeee;
}
.head {
  margin: 15px 15px 0 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
}
.icon {
  font-size: 15px;
  color: blue;
}
.icon-text {
  font-weight: 600;
  margin-left: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.label {
  padding: 15px;
}
.label-text {

}
.content {
  padding: 15px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-text {
}
.picture {

}
.state-text {
  color: rgb(4, 146, 23);
  font-size: 16px;
  font-weight: 600;
}
.more {
  padding: 10px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  width: 100%;
}
.button {
  border-color: blue;
}
.button>span {
  color: blue;
}
</style>
