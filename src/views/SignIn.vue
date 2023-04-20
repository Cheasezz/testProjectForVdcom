<script>
import OpenEyeIcon from '../components/icons/OpenEyeIcon.vue';
import CloseEyeIcon from '../components/icons/CloseEyeIcon.vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  components: {
    OpenEyeIcon,
    CloseEyeIcon,
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isSeePass: false,
    };
  },
  methods: {
    changeIsSeePass() {
      this.isSeePass = !this.isSeePass;
    },
    userLogin() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((user) => {
          this.$router.replace('/home');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

	computed:{
		changePasswordVisibility() {
      return this.isSeePass ? 'text' : 'password';
    },
	},
};
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h1 class="mb-16 text-center text-6xl font-bold tracking-tight text-gray-900">LOGO</h1>
        <h2 class="text-center text-3xl font-semibold tracking-tight text-gray-900">
          Welcome To CRM System Sign In To Your Account
        </h2>
      </div>
      <form @submit.prevent="userLogin" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm xl:text-xl">
          <div class="mb-6">
            <label for="email-address" class="">Login</label>
            <input
              id="email-address"
              name="email"
              type="email"
              class="relative block w-full h-12 border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 xl:text-xl sm:text-sm sm:leading-6"
              placeholder="Login"
              v-model="user.email"
            />
          </div>
          <div class="relative">
            <label for="password" class="">Password</label>
            <input
              id="password"
              name="password"
              :type="changePasswordVisibility"
              class="block relative w-full h-12 border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 xl:text-xl sm:text-sm sm:leading-6"
              placeholder="Password"
              v-model="user.password"
            />
            <OpenEyeIcon
              @click="changeIsSeePass"
              v-show="!isSeePass"
              class="absolute right-1 bottom-2 cursor-pointer"
            />
            <CloseEyeIcon
              @click="changeIsSeePass"
              v-show="isSeePass"
              class="absolute right-1 bottom-2 cursor-pointer"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group mx-auto relative flex w-fit justify-center bg-black px-7 py-2 text-sm font-semibold text-white hover:bg-myOrange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-myOrange-600 uppercase"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
