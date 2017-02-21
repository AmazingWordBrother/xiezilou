<style lang="stylus" scoped>
	$orange=#ff6932
	li
		position relative
		display block
		margin-top .25rem
		height 6.125rem
		padding-top .625rem
		padding-left 8.625rem
		background-color white
		background-position .625rem .625rem
		background-repeat no-repeat
		background-size 6.875rem 4.8125rem
		border-bottom 1px solid #eee
		.district
			display block
			width 4.875rem
			height 1.5625rem
			color #666
			line-height @height
			font-size .75rem
		.business
			display block
			width 4.375rem
			height 1.25rem
			line-height @height
			text-align center
			font-size .75rem
			color $orange
			border 1px solid $orange
			border-radius .2rem
		h1
			font-size 1rem
			color #333
		.minute
			.price
				font-size .875rem
				color $orange
				&:before
					content "¥"
					font-size .75rem
					color $orange
			em
				font-size .75rem
				color #666
		.deadline
			font-size .75rem
			color #666
		.icon
			position absolute
			top 1rem
			right 1.125rem
			width 1rem
			height 1rem
			color #bbb
			&.current
				color $orange
</style>
<template>
	<ul>
		<li v-for="item of data" :style="`background-image:url(${item.url})`" @click="showDetails(item.href)">
			<h1>{{item.title}}</h1>
			<span class="district">{{`${item.district}-${item.distr}`}}</span>
			<span class="business" v-text="item.type"></span>
			<span class="minute">
				<b class="price">{{item.price}}</b>
				<em>元／平米／天起</em>
			</span>
			<span class="deadline">{{`${item.commission}个月`}}</span>
			<svg class="icon" aria-hidden="true" @click.stop="addFavorite(item.id,$event)">
				<use xlink:href="#icon-favorites"></use>
			</svg>
		</li>
	</ul>
</template>
<script>
	export default {
		props: ["data"],
		methods: {
			async addFavorite(id, {target}){
				if(target.classList.contains("current")){
					if(!(await (await fetch(`/api/favorite/remove?id=${id}`)).json()).code){
						target.classList.remove("current");
					}
				}else{
					if(!(await (await fetch(`/api/favorite/add?id=${id}`)).json()).code){
						target.classList.add("current");
					}
				}
			},
			showDetails(href){
				this.$router.push(href);
			}
		}
	};
</script>