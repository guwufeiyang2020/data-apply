<template>
	<div class="login-wrapper">
		<div class="login-header">
			<h1 class="logo">数据应用</h1>
			<!-- <img src="../assets/images/logo.png" class="logo" /> -->
		</div>
		<div class="login-content">
			<div class="width1000">
				<div class="login-box">
          <h2>登录</h2>
					<div class="login-body">
						<el-form
							autocomplete="off"
							:model="loginForm"
							:rules="loginRules"
							ref="loginForm"
							label-position="left"
							label-width="0px"
							class="card-box login-form"
						>
							<el-form-item prop="username">
								<svg-icon icon-class="user" class="icon-svg" />
								<el-input placeholder="请输入邮箱" type="text" v-model="loginForm.username" />
							</el-form-item>
							<el-form-item prop="password">
								<svg-icon icon-class="password" class="icon-svg" />
								<el-input placeholder="请输入密码" type="password" v-model="loginForm.password" />
							</el-form-item>
							<el-button type="primary" :loading="loading" style="width:100%;" @click="handleLogin">登录</el-button>
						</el-form>
					</div>
				</div>
			</div>
		</div>
		<div class="login-bottom">
			<p>技术支持：中博信息技术研究院有限公司</p>
			<p class="copyright"><i class="icon-copyright"></i>苏ICP备2020033851号</p>
		</div>
	</div>
</template>

<script>
import crypto from '../utils/crypto.js';
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loading: false,
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '账号不能为空' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          const loginParams = {
            loginUserId: this.loginForm.username,
            password: crypto.encrypt(this.loginForm.password),
          };
          this.$http.post('/user/login', loginParams).then((res) => {
            this.loading = false;
            if (res.data.code === 20000) {
              this.$store.commit('setToken', res.data.data.token);
							this.$store.commit('setUserName', res.data.data.userName);
              this.$router.push({ path: '/' });
            } else {
              this.$message.error(res.data.message);
            }
          }).catch((error) => {
            this.$message.error(error);
          });
        } else {
          return false;
        }
      });
    },
    keyDown(e) {
      // 如果是回车则执行登录方法
      if (e.keyCode === 13) {
        this.handleLogin();
      }
    }
  },
  mounted() {
		// 绑定事件
    window.addEventListener('keydown', this.keyDown);
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyDown, false);
  }
};
</script>

<style lang="scss" scoped>
.login-header {
	width: 12rem;
	height: 1.2rem;
	padding-top: .6rem;
	margin: 0 auto;
	.logo {
		font-weight: bold;
		font-size: .3rem;
	}
}
.login-content {
	width: 100%;
	height: 6.18rem;
	background: url('../assets/images/logo-bg.jpg') no-repeat;
	background-size: 100%;
	.width1000 {
		display: flex;
		height: 6.18rem;
		flex-direction: row-reverse;
		align-items: center;
	}
}
.login-box {
	width: 4.6rem;
	padding: .3rem;
	background: rgba(255, 255, 255, 0.6);
	border: 1px solid #fff;
	border-radius: .03rem;
	h2 {
		font-size: .22rem;
    padding-left: .24rem;
	}
}

.login-body {
	padding: .22rem .26rem 0 .26rem;
}
.el-form-item {
	position: relative;
	.icon-svg {
		position: absolute;
		left: .09rem;
		top: .12rem;
		width: .25rem;
		height: .25rem;
		z-index: 10;
	}
	/deep/ .el-input__inner {
		padding-left: .42rem;
		height: .5rem;
		line-height: .5rem;
	}
}

/deep/ .el-button--primary {
	background: #004986;
	font-size: .16rem;
	outline: none;
  line-height: .3rem;
	border: 0 none;
}
.login-footer {
	margin: .1rem 0 .2rem 0;
	color: #333;
	cursor: pointer;
}

.login-bottom {
	padding-top: .12rem;
	text-align: center;
	color: #626467;
	line-height: .26rem;
	font-size: .14rem;
	.main-company {
		margin-right: .1rem;
	}
	.copyright {
		width: 2.4rem;
		height: .3rem;
		display: flex;
		align-items: center;
		margin: 0 auto;
	}
	.icon-copyright {
		display: block;
		width: .2rem;
		height: .2rem;
		background: url('../assets/images/badge.png') no-repeat left center;
		background-size: 100%;
		margin-right: .1rem
	}
}
</style>
