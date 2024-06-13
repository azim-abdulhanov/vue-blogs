<template>
  <label :for='label' class='font-medium'>{{ label }}</label>
  <textarea
    rows='3'
    :id='label'
    :type='type'
    :placeholder='label'
    @input='updateInput'
    :value='modelValue'
    class='w-full mb-1 mt-1 rounded-md py-2 px-3 ring-slate-400 ring-1 outline-blue-400'
  >
	</textarea>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    label: String,
    type: String,
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
}
</script>
