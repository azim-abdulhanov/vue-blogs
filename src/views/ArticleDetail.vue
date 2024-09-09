<template>
	<div class='py-10 sm:py-20'>
		<Loader v-if='isLoading' class='flex justify-center h-full my-10' />
		<ArticleDetail v-else />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleDetail from '@/components/ArticleDetail.vue'

export default {
	components: {
		ArticleDetail
	},
	computed: {
		...mapState({
			isLoading: state => state.articles.isLoading
		})
	},
	mounted() {
		this.$store.dispatch('articleDetail', this.$route.params.slug)
	},
}
</script>
