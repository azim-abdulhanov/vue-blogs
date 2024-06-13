import ArticleService from '@/services/articles'

const state = {
	data: null,
	isLoading: false,
	errors: null,
	articleDetail: null
}

const mutations	= {
	getArticlesStart(state) {
		state.isLoading = true
		state.data = null
		state.errors = null
		state.articleDetail = null
	},
	getArticlesSuccess(state, payload) {
		state.isLoading = false
		state.data = payload
	},
	getArticlesFailure(state) {
		state.isLoading = false
	},

	getArticleDetailStart(state) {
		state.isLoading = true
		state.data = null
		state.articleDetail = null
		state.errors = null
	},
	getArticleDetailSuccess(state, payload) {
		state.isLoading = false
		state.articleDetail = payload
	},
	getArticleDetailFailure(state) {
		state.isLoading = false
	}
}

const actions = {
	articles(context) {
		return new Promise(resolve => {
			context.commit('getArticlesStart')
			ArticleService.articles()
				.then(response => {
					context.commit('getArticlesSuccess', response.data.articles)
					resolve(response.data.articles)
				})
				.catch(() => context.commit('getArticlesFailure'))
		})
	},

	articleDetail(context, slug) {
		return new Promise(resolve => {
			context.commit('getArticleDetailStart')
			ArticleService.articleDetail(slug)
				.then(response => {
					context.commit('getArticleDetailSuccess', response.data.article)
					resolve(response.data.article)
				})
				.catch(() => context.commit('getArticleDetailFailure'))
		})
	}
}

export default {
	state,
	mutations,
	actions,
}
