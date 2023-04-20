<script>
import SearchIcon from '../components/icons/SearchIcon.vue';
import BurgerMenuIcon from './icons/BurgerMenuIcon.vue';
export default {
  components: {
    SearchIcon,
    BurgerMenuIcon,
  },
  emits: {
    'filterd-client-list': (filteredList) => Array.isArray(filteredList),
  },
  props: {
    curentUser: {
      type: Object,
    },
    clientsListForSerch: {
      type: Array,
    },
  },
  data() {
    return {
      filter: '',
    };
  },

  watch: {
		filter() {
      const filterdClientList = this.clientsListForSerch.filter((client) =>
        client.name.toUpperCase().includes(this.filter.toUpperCase())
      );
  		console.log(123);
      this.$emit('filterd-client-list', filterdClientList)
		}

  },
};
</script>

<template>
  <nav class="bg-white border-gray-200">
    <div class="flex items-center justify-between mx-auto p-4">
      <div class="relative flex basis-1/2 gap-2">
        <button
          type="button"
          class=" p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <BurgerMenuIcon />
        </button>
        <div class="absolute inset-y-0 left-12 md:left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          v-model="filter"
          type="text"
          class="block w-full max-w-xl p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
          placeholder="Search by Name..."
        />
      </div>
      <div class="flex items-center gap-2">
        <img
          class="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Rounded avatar"
        />
        <div class="text-black">
          <span>{{ curentUser?.email }}</span>
          <p>Managing Director</p>
        </div>
      </div>
    </div>
  </nav>
</template>
