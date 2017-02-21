<style lang="stylus" scoped>
	.width
		width 70%
		height 1.875rem
		text-indent .5rem
		margin 1.725rem 0 0 2rem
		float left
	label
		width 3rem
		height 1.875rem
		float left
		line-height @height
		font-size .75rem
		margin-top 1.7rem
		margin-left .375rem
	a
		display block
		width 5rem
		height 2rem
		float left
		color #FFF
		line-height 2rem
		text-align center
		border-radius .425rem
		background-color #ff4364
		margin 2rem 7rem 0
</style>
<template>
	<div>
		<my-header hasBack="1" title="注册" />
		<label>用户名：</label>
		<input class="width" v-model="user" placeholder="用户名" /><br/>
		<label>密码：</label>
		<input class="width" type="password" v-model="password" placeholder="密码" />
		<a @click="signUp">注册</a>
		<modal ref="modal" type="fixed" />
	</div>
</template>
<script>
	import MyHeader from "../../components/Header";
	import Modal from "../../components/Modal";
	export default {
		data(){
			return {
				user: "",
				password: ""
			};
		},
		methods: {
			async signUp(){
				const {modal} = this.$refs;
				if((await (await fetch("/api/sign_up", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `user=${this.user}&password=${this.password}`,
					credentials: "include"
				})).json()).code){
					modal.toast({
						message: "注册失败",
						duration: 800,
					});
				}else{
					modal.toast({
						message: "注册成功",
						duration: 800,
					});
				}
			}
		},
		components: {
			MyHeader,
			Modal
		},
		beforeCreate(){
			this.$parent.footer = 0;
		}
	};
</script>