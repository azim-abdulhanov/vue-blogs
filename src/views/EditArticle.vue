<template>
	<div class='container'>
		<div class='py-20'>
			<h3 class='text-center text-4xl font-bold mb-5'>
				Edit Article
			</h3>
			<Loader v-if='isLoading' class='flex justify-center h-full mt-5' />
			<ArticleForm
				v-else-if='!isLoading && article'
				:initialValue='initialValue'
				:onSubmitHandler='editArticleHandler'
				:clickText="'Edit article'"
			/>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleForm from '@/components/ArticleForm.vue'

export default {
	components: {
		ArticleForm
	},
	methods: {
		editArticleHandler(article) {
			this.$store
				.dispatch('updateArticle', {article: article, slug: this.$route.params.slug})
				.then(() => this.$router.push('/'))
		}
	},
	computed: {
		...mapState({
			article: state => state.articles.articleDetail,
			isLoading: state => state.articles.isLoading
		}),
		initialValue() {
			return {
				title: this.article.title,
				description: this.article.description,
				body: this.article.body,
			}
		}
	},
	mounted() {
		this.$store.dispatch('articleDetail', this.$route.params.slug)
	}
}
</script>
