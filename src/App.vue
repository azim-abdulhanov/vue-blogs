<template>
	<div>
		<Navbar />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import { Navbar } from '@/components'
import { Footer } from '@/components'

export default {
	components: {
		Navbar,
		Footer
	},
	mounted() {
		this.$store.dispatch('getUser')
	}
}
</script>
