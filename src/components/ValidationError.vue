<template>
	<ul class='rounded-md py-2 px-3 mb-3 border border-red-300 bg-red-100 text-red-400'>
		<li
			v-for='errorMessage in errorMessages'
			:key='errorMessage'
			class='list-disc list-inside'
		>
			{{ errorMessage }}
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		validationErrors: {
			type: Object,
			required: true
		}
	},
	computed: {
		errorMessages() {
			return Object.keys(this.validationErrors).map(name => {
				const message = this.validationErrors[name].join(', ')
				return `${name} ${message}`
			})
		}
	}
}
</script>
