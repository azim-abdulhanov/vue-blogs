<template>
	<div class='py-20'>
		<Loader v-if='isLoading' class='flex justify-center h-full' />
		<Profile v-else />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Profile from '@/components/Profile.vue'

export default {
	components: {
		Profile
	},
	computed: {
		...mapState({
			isLoading: state => state.articles.isLoading
		})
	},
	mounted() {
		this.$store.dispatch('articles', this.$route.params.username)
	},
}
</script>
