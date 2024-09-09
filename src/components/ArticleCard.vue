<template>
  <div class='w-full border border-gray-300 rounded-lg shadow p-4'>
    <h3 class='text-lg font-bold line-clamp-1'>{{ article.title }}</h3>
    <p class='my-3 font-medium line-clamp-2 md:line-clamp-3'>{{ article.description }}</p>

    <div class='flex flex-wrap sm:flex-nowrap gap-y-3 items-center sm:justify-between justify-center'>
      <div class="flex w-full flex-col sm:flex-row">
        <button
          @click='navigateHandler'
          type='button'
          class='px-2 py-1 font-medium border border-slate-200 hover:bg-gray-500 rounded-md hover:text-white transition-all'
        >
          Read article
        </button>
        <button
          @click='deleteArticleHandler'
          v-if='article.author.username == user.username'
          type='button'
          class='px-2 py-1 font-medium border border-slate-200 hover:bg-red-500 rounded-md hover:text-white transition-all'
        >
          Delete
        </button>
        <button
          @click='navigateEditHandler'
          v-if='article.author.username == user.username'
          type='button'
          class='px-2 py-1 font-medium border border-slate-200 hover:bg-blue-500 rounded-md hover:text-white transition-all'
        >
          Edit
        </button>
      </div>
      <span class='text-sm font-medium text-gray-400'>
				{{ new Date(article.createdAt).toLocaleDateString() }}
			</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
	methods: {
		navigateHandler() {
			return this.$router.push(`/article/${this.article.slug}`)
		},
    deleteArticleHandler() {
      return this.$store
        .dispatch('deleteArticle', this.article.slug)
        .then(() => this.$store.dispatch('articles'))
    },
    navigateEditHandler() {
			return this.$router.push(`/edit-article/${this.article.slug}`)
		},
	},
  computed: {
    ...mapState({
      user: state => state.auth.user,
    })
  }
}
</script>
