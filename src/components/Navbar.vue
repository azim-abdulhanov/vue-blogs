<template>
	<header class='container'>
		<nav class='py-5 flex gap-y-2 justify-between items-center border-b-2 border-blue-500'>
			<router-link :to='{ name: "home" }' class='flex items-center gap-x-1 sm:gap-x-2'>
				<img :src='logo' alt='Header Logo' class='h-10 sm:h-14 w-full' />
				<span class='text-xl sm:text-2xl font-bold text-blue-600 tracking-wide'>Vueblogs</span>
			</router-link>

			<div v-if='isLoggedIn' class='flex items-center gap-x-2.5 sm:gap-x-6'>
				<router-link
					:to='{ name: "create-article" }'
					class='text-lg transition-all duration-300 hover:text-blue-500'
				>
					<fa icon="pen" />
				</router-link>
				<router-link
					:to='{ name: "empty-card" }' @click='logout'
					class='text-lg transition-all duration-300 hover:text-red-500'
				>
					<fa icon="right-to-bracket" />
				</router-link>
				<router-link
					:to='{ name: "profile" }'
					class='text-md font-medium placeholder:logout'
				>
					<img :src="currentUser.image" alt="" class="rounded-full w-8 h-8">
				</router-link>
			</div>

			<div v-if='isAnonymous' class='flex items-center gap-x-1 sm:gap-x-6'>
				<router-link
					:to='{ name: "login" }'
					class='text-sm sm:text-lg font-medium transition-all duration-300 hover:text-blue-600'
				>
					Login
				</router-link>
				<router-link
					:to='{ name: "register" }'
					class='text-sm sm:text-lg font-medium transition-all duration-300 hover:text-blue-600'
				>
					Register
				</router-link>
			</div>
		</nav>
	</header>
</template>

<script>
import { mapGetters } from 'vuex'
import { logo } from '@/constants'
import { gettersTypes } from '@/modules/types'

export default {
	data() {
		return {
			logo,
		}
	},
	computed: {
		...mapGetters({
			currentUser: gettersTypes.currentUser,
			isLoggedIn: gettersTypes.isLoggedIn,
			isAnonymous: gettersTypes.isAnonymous
		}),
	},
	methods: {
		logout() {
			return this.$store.dispatch('logout')
		},
	},
}
</script>
