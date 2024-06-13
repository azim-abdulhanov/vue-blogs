<template>
	<div class='container'>
		<div v-if='article' class='flex items-center max-w-96 justify-center w-full mx-auto gap-4 p-10 bg-white border border-gray-200 rounded-lg shadow-md'>
			<img class='w-14 h-14 rounded' :src='article.image' alt=''>
			<div>
				<p class='text-lg font-semibold'>{{ article.username }}</p>
				<p class='text-sm text-gray-400 font-semibold'>{{ article.email }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
    ...mapState({
			article: state => state.auth.user
    }),
  },
}
</script>
