<template>
	<header class='container'>
		<nav class='py-5 flex flex-wrap gap-y-2 justify-between items-center border-b-2 border-blue-500'>
			<router-link :to='{ name: "home" }' class='flex items-center gap-x-2'>
				<img :src='logo' alt='Header Logo' class='h-14 w-full' />
				<span class='text-xl font-bold uppercase tracking-wide'>Vueblogs</span>
			</router-link>

			<div v-if='isLoggedIn' class='flex items-center gap-x-2'>
				<router-link
					:to='{ name: "create-article" }'
					class='rounded-md px-3 py-1 text-lg font-medium transition-all hover:bg-slate-100'
				>
					<i class="fa-solid fa-pen"></i>
				</router-link>
				<router-link
					:to='{ name: "empty-card" }' @click='logout'
					class='rounded-md px-3 py-1 transition-all hover:bg-slate-100'
				>
					<i class="fa-solid fa-right-from-bracket fa-lg"></i>
				</router-link>
				<router-link
					:to='{ name: "profile" }'
					class='rounded-md px-3 py-1 text-lg font-medium transition-all hover:bg-slate-100 placeholder:logout'
				>
					<img :src="currentUser.image" alt="" class="rounded-full w-8 h-8">
				</router-link>
			</div>

			<div v-if='isAnonymous' class='flex items-center gap-x-2'>
				<router-link
					:to='{ name: "login" }'
					class='rounded-md px-3 py-1 text-lg font-medium transition-all hover:bg-slate-100'
				>
					Login
				</router-link>
				<router-link
					:to='{ name: "register" }'
					class='rounded-md px-3 py-1 text-lg font-medium transition-all hover:bg-slate-100'
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
