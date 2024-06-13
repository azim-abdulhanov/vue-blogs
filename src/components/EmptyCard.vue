<template>
	<div class='container'>
		<div class='flex flex-col gap-y-6 items-center py-20'>
			<h4 class='text-5xl font-bold uppercase'>Articles Empty</h4>
			<img :src='img' alt='img' class='max-w-4xl w-full'>
			<p class='text-2xl uppercase font-semibold'>Please click on the login or register buttons</p>
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
