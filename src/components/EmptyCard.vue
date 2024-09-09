<template>
	<div class='container'>
		<div class='flex flex-col gap-y-6 items-center py-10 md:py-20'>
			<h4 class='text-2xl md:text-3xl lg:text-5xl font-bold uppercase'>Articles Empty</h4>
			<img :src='img' alt='img' class='max-w-4xl w-full object-contain'>
			<p class='text-xl sm:text-2xl font-semibold'>Please click on the login or register buttons</p>
		</div>
	</div>
</template>

<script>
import { img } from '@/constants'

export default {
	data() {
		return {
			img
		}
	},
}
</script>
