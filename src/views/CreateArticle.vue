<template>
	<div class='container'>
		<div class="py-20">
			<h3 class='text-center text-4xl font-bold mb-5'>
				Create Article
			</h3>
			<Loader v-if='isLoading' class='flex justify-center h-full my-10' />
			<ArticleForm
				v-else
				:initialValue='initialValue'
				:onSubmitHandler='createArticleHandler'
				:clickText="'Create article'"
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
	data() {
		return {
			title: '',
			description: '',
			body: '',
		}
	},
	methods: {
		createArticleHandler(article) {
			this.$store.dispatch('createArticle', article)
			this.$router.push('/')
		}
	},
	computed: {
		...mapState({
			isLoading: state => state.control.isLoading
		}),
		initialValue() {
			return {
				title: '',
				description: '',
				body: ''
			}
		}
	}
}
</script>
