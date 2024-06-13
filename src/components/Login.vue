<template>
  <div class='py-20 px-5'>
    <div class='mx-auto w-full max-w-sm bg-gray-100 p-6 rounded-lg'>
      <img :src='logo' alt='logo' class='mx-auto h-12 w-auto' />
      <h2 class='mb-2 text-center text-2xl font-bold'>Login</h2>

      <ValidationError
        v-if='validationErrors'
				:validationErrors='validationErrors'
      />

      <form class='flex flex-col'>
        <Input
          :label="'Email address'"
          :type="'email'"
          v-model='email'
        />
        <Input
          :label="'Password'"
          :type="'password'"
          v-model='password'
        />
        <Button
          type='submit'
          :disabled='isLoading'
					@click='submitHandler'
        >
          Sign in
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { logo } from '@/constants'
import ValidationError from '@/components/ValidationError.vue'

export default {
  components: {
    ValidationError
  },
  data() {
    return {
      logo,
      email: '',
			password: '',
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.auth.isLoading,
      validationErrors: state => state.auth.errors
    })
	},
  methods: {
		submitHandler(e) {
			e.preventDefault()
			const data = {
				username: this.username,
				email: this.email,
				password: this.password,
			}
			this.$store
				.dispatch('login', data)
				.then(user => {
					console.log(user)
					this.$router.push({ name: 'home' })
				})
				.catch(err => console.log(err))
		},
	},
}
</script>
