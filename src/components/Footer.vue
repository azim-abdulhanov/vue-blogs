<template>
  <div class="container">
    <footer class="py-5 flex flex-wrap gap-y-2 justify-between items-center border-t-2 border-blue-500">
			<router-link to='/' class="flex items-center gap-x-2">
				<img :src="logo" class="h-10 w-full" alt="Footer Logo" />
				<span class="text-xl font-bold uppercase tracking-wide">Vueblogs</span>
			</router-link>
      <span class="text-sm text-gray-500 text-center">© 2024 All Rights Reserved.</span>
    </footer>
  </div>
</template>

<script>
import { logo } from "@/constants"

export default {
  data() {
    return {
      logo,
    }
  },
}
</script>
