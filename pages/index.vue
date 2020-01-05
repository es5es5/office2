<template>
	<div id="index">
		<div class="welcome_wrap">
			<div class="welcome">
				<h1>Hello! Welcome to FCWorld ERP Preview.</h1>
				<nuxt-link tag="a" class="link" to="/office/workspace">Enter</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Index'
}
</script>

<style lang="scss" scoped>
.welcome_wrap {
	position: relative;
	min-height: 1000px;
	background-image: url('../assets/img/home_bg.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
}

.welcome {
	position: absolute;
	text-align: center;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	line-height: 2;
	font-size: 1.5rem;
}

.link {
	display: block;
	transition: all 1s;
	&:hover {
		text-decoration: underline;
		transform: translate(0, -.5rem);
		transition: all .75s;
	}
}
</style>
