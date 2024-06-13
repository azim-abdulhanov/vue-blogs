<template>
  <div class='container'>
    <div v-if='article'>
      <h3 class="text-3xl font-bold">Article Information</h3>
      <div class="mt-6 border-t border-gray-100">
        <div class="divide-y divide-gray-100">
          <div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 items-center">
            <p class="text-md font-bold">Created At:</p>
            <p class="mt-1 text-sm text-gray-600 sm:col-span-2">
              {{ new Date(article.createdAt).toLocaleString() }}
            </p>
          </div>
          <div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 items-center">
            <p class="text-md font-bold">Title:</p>
            <p class="mt-1 text-sm text-gray-600 sm:col-span-2">
              {{ article.title }}
            </p>
          </div>
          <div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 items-center">
            <p class="text-md font-bold">Description:</p>
            <p class="mt-1 text-sm text-gray-600 sm:col-span-2">
              {{ article.description }}
            </p>
          </div>
          <div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
            <p class="text-md font-bold">Body:</p>
            <p class="mt-1 text-sm text-gray-600 sm:col-span-2">
              {{ article.body }}
            </p>
          </div>
          <div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 items-center">
            <span class='h-10 w-10 rounded-full text-sm font-bold flex justify-center items-center bg-blue-500 text-white'>
              {{ article.author.username[0] }}
            </span>
            <p class="mt-1 text-sm text-gray-600 sm:col-span-2">
              {{ article.author.username }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {  
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail,
    }),
  },
}
</script>
