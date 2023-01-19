<!-- ********************************** HTML ********************************************* -->
<template>
	<div class="img-container">
		<SvgAcronym />
	</div>
</template>

<!-- ********************************** script ********************************************* -->

<script lang="ts">
	import { gsap } from "gsap";
	import SvgAcronym from "./SvgAcronym.vue";

	export default {
		name: "AcronymAnimation",
		components: {
			SvgAcronym,
		},
		data() {
			return {};
		},
		mounted() {
			this.$nextTick().then(() => {
				for (let i = 1; i <= 40; i++) {
					gsap.to(`#r${i}`, {
						duration: 0.5,
						opacity: 1,
						delay: i * 0.2,
						stagger: 0.1,
					});
				}
			});
			gsap.to("#j, #d, #p", { rotate: 15, delay: 8, duration: 1 });
		},
	};
</script>

<!-- ********************************** Styles ********************************************* -->

<style scoped>
	.img-container {
		position: relative;
		margin-inline: auto;
		background-color: transparent;
		width: 70vw;
		height: auto;
	}
</style>
