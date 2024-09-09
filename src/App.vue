<template>
	<div>
		<Navbar />
		<RouterView />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { RouterView } from 'vue-router'
import { Navbar } from '@/components'

export default {
	components: {
		Navbar	
	},
	mounted() {
		this.$store.dispatch('getUser')
	}
}
</script>
