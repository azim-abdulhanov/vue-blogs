<template>
  <button class='flex w-full justify-center rounded-md bg-indigo-600 mt-2 py-2 text-lg font-semibold text-white transition-all hover:bg-indigo-500 disabled:bg-indigo-300'>
		<slot></slot>
  </button>
</template>

<script>
export default {
	name: 'Button',
}
</script>
