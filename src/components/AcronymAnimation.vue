<!-- ********************************** HTML ********************************************* -->
<template>
	<div class="img-container">
		<img
			src="/jaydepi-free.svg"
			alt="the acronym jay de pi, with pink small squares under that forms a straigt line."
			width="300"
			height="200"
		/>
	</div>
</template>

<!-- ********************************** script ********************************************* -->

<script lang="ts">
	export default {
		name: "AcronymAnimation",
	};
</script>

<!-- ********************************** Styles ********************************************* -->

<style scoped>
	.img-container {
		position: relative;
		margin-inline: auto;
	}

	img {
		width: 70vw;
		height: auto;
	}
</style>
