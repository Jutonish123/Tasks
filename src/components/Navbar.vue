<template>
	<nav class="deep-purple darken-1">
			<div class="nav-wrapper">
				<router-link to="/" href="#" class="brand-logo">Tasks</router-link>
				<ul class="right hide-on-med-and-down">
					<router-link tag="li" to="/" exact active-class="active"><a href="#">Create</a></router-link>
					<router-link tag="li" to="/List" active-class="active"><a href="#">List</a></router-link>
				</ul>
			</div>
		</nav>
</template>
<script>
export default {
	
}
</script>

<style lang="scss" scope>
	nav {
		padding: 0 2rem;
	}
	ul {
		display: flex;
	}
	ul>a:hover {
		background-color:rgba(0,0,0,0.1)
	}
</style>