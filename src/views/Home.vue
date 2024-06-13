<template>
	<div class='container'>
		<Loader v-if='isLoading' class='flex justify-center h-full py-20' />
		<div v-else class='grid gap-5 md:grid-cols-2 lg:grid-cols-3 py-20'>
			<ArticleCard
				v-for='article in data'
				:key='article.id'
				:article='article'
			/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleCard from '@/components/ArticleCard.vue'

export default {
	components: {
		ArticleCard,
	},
	computed: {
		...mapState({
			data: state => state.articles.data,
			isLoading: state => state.articles.isLoading,
			errors: state => state.articles.errors
		})
	},
	mounted() {
		this.$store.dispatch('articles')
	}
}
</script>
