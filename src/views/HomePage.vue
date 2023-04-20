<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SidebarMn from '../components/SidebarMn.vue';
import HomeHeader from '../components/HomeHeader.vue';
import TotalContactsBody from '../components/TotalContactsBody.vue';
export default {
  components: {
    SidebarMn,
    HomeHeader,
    TotalContactsBody,
  },
  data() {
    return {
      user: null,
      clientsList: null,
			filteredList:null
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>
<template>
  <div class="flex">
    <SidebarMn class="flex-none" />
    <div class="flex flex-col w-full ">
      <HomeHeader
			v-if="clientsList"
        class="h-fit"
        @filterd-client-list="filteredList = $event"
        :curentUser="user"
        :clientsListForSerch="clientsList"
      />
      <TotalContactsBody @clients-list="clientsList = $event" :filteredClientList="filteredList" />
    </div>
  </div>

</template>

<style></style>
