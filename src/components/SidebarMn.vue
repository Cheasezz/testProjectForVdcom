<script>
import { getAuth, signOut} from 'firebase/auth';
import LogOutIcon from './icons/LogOutIcon.vue';
import SidebarItem from './SidebarItem.vue';
import icons from '../components/icons/iconsObject'

export default {
  components: {
		LogOutIcon,
    SidebarItem,
  },
  data() {
    return {
      sidebarItemsObject: {
        'Total Contacts': icons.contact,
        Calendar: icons.calendar,
        'Project Report': icons.circleDiagram,
      },
			selectedItem:'Total Contacts'
    };
  },
  methods: {
    logOut() {
      const auth = getAuth();

      signOut(auth)
        .then(() => {
          this.$router.replace('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
		selectItem(key){
			this.selectedItem = key
		}
  },
};
</script>
<template>
  <aside class="w-52 h-screen transition-transform -translate-x-full md:translate-x-0 absolute md:relative">
    <div class="relative h-full px-3 py-4 overflow-y-auto bg-white">
      <h1 class="mb-16 text-center text-6xl font-bold tracking-tight text-black">LOGO</h1>
      <ul class="space-y-2 font-medium">
        <SidebarItem v-for="(value,key) in sidebarItemsObject"
					:icon="value"
					:name="key"
					:selectedItem="selectedItem"
					:key="key"
					@click="selectItem(key)"
				/>
      </ul>
      <div class="absolute bottom-0 left-0 w-full">
        <hr />
        <button
          @click="logOut"
          type="button"
          class="w-full flex items-center justify-center bg-white px-7 py-5 text-sm font-semibold text-black transition hover:bg-black/20 uppercase"
        >
          <LogOutIcon class="mr-2" />
          Log Out
        </button>
      </div>
    </div>
  </aside>
</template>
