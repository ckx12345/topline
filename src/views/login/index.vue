<template>
  <div>
    <van-nav-bar title="标题" right-text="按钮" />
    <van-cell-group>
      <van-field required clearable label="手机" placeholder="请输入手机号" v-model="user.mobile" />

      <van-field label="验证码" placeholder="请输入验证码" required v-model="user.code" />
    </van-cell-group>
    <div class="login-btn">
      <van-button type="info" class="btn" @click="getdata">登录</van-button>
    </div>

  </div>
</template>

<script>
import { login } from '../../api/user'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }

    }
  },
  methods: {
    //   点击按钮c处理登陆
    async getdata () {
    // 返回promise类型的对象 使用try接收
      try {
        //   使用 async将异步并不是变成了同步类型的 而是使用了 await 会阻塞下面的操作所以变成了同步这样数据不会混乱
        const res = await login(this.user)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn{
   padding: 20px;
  .btn {
    width: 100%;
  }
}
</style>
