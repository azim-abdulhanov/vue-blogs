<template>
    <label :for='label' class='font-medium'>{{ label }}</label>
    <input
      :id='label'
      :type='type'
      :placeholder='label'
      @input='updateInput'
      :value='modelValue'
      required
      class='w-full mb-2 mt-1 rounded-md ring-slate-400 ring-1 outline-blue-400 py-2 px-3 placeholder:text-gray-400'
    />
</template>

<script>
export default {
  name: 'Input',
	props: {
		label: String,
		type:	String,
		modelValue: [String, Number],
	},
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
