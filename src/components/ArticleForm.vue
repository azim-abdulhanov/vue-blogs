<template>
	<div class='mx-auto w-full max-w-lg p-5 flex flex-col shadow-lg border border-slate-300 rounded-xl'>
		<form @submit.prevent>
			<Input
				type='text'
				label='Title'
				v-model='title'
			/>
			<Textarea
				type='text'
				label='Description'
				v-model='description'
			/>
			<Textarea
				type='text'
				label='Body'
				v-model='body'
			/>
			<Button
				@click='editArticle'
				:disabled='isLoading'
			>
				{{ clickText }}
			</Button>
		</form>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			title: this.initialValue.title,
			description: this.initialValue.description,
			body: this.initialValue.body,
			isEdit: false
		}
	},
	props: {
		initialValue: {
			type: Object,
			required: true
		},
		onSubmitHandler: {
			type: Function,
			required: true
		},
		clickText: {
			type: String,
			required: true
		}
	},
	computed: {
		...mapState({
			isLoading: state => state.control.isLoading
		}),
	},
	methods: {
		editArticle() {
			const article = {
				title: this.title,
				description: this.description,
				body: this.body,
				tagList: []
			}
			this.onSubmitHandler(article)
		}
	}
}
</script>
