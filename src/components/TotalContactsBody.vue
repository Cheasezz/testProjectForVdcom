<script>
import PlusIcon from '../components/icons/PlusIcon.vue';
import EditIcon from '../components/icons/EditIcon.vue';
import RemoveIcon from '../components/icons/RemoveIcon.vue';
import TotalContactsTableItem from './TotalContactsTableItem.vue';
import TotalContactsPagination from './TotalContactsPagination.vue';

export default {
  components: {
    PlusIcon,
    EditIcon,
    RemoveIcon,
    TotalContactsTableItem,
    TotalContactsPagination,
  },
  emits: {
    'clients-list': (elem) => Array.isArray(elem),
  },
  props: {
    filteredClientList: {
      type: Array,
    },
  },
  data() {
    return {
      clientsList: null,
      paginatedClientList: null,
      checkedForAll: false,
    };
  },

  async beforeMount() {
    const clientsList = await fetch('https://jsonplaceholder.typicode.com/users');
    this.clientsList = await clientsList.json();
    this.$emit('clients-list', this.clientsList);
  },
  watch: {
    filteredClientList() {
      this.clientsList = this.filteredClientList;
    },
  },
};
</script>
<template>
  <section
    class="flex flex-col justify-between h-full w-full antialiased bg-yellow-100 text-gray-600"
    x-data="app"
  >
    <div class="flex flex-col w-full h-fit">
      <div class="w-full mx-auto">
        <header class="flex justify-between px-5 py-4 bg-transparent">
          <div class="font-semibold text-black text-4xl">Total Contacts</div>
          <button
            type="button"
            class="flex items-center justify-center gap-2 w-32 px-7 rounded-lg text-white bg-myOrange-600/80 shadow-md transition hover:shadow-none hover:bg-myOrange-600"
          >
            Add <PlusIcon />
          </button>
        </header>

        <div class="overflow-x-auto">
          <table class="border-separate border-spacing-y-2 w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr class="">
                <th class="p-2">
                  <input type="checkbox" class="w-5 h-5" v-model="checkedForAll" />
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Id</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Name</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Email</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Phone</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Address</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>

            <tbody class="text-sm">
              <TotalContactsTableItem
                v-for="item of paginatedClientList"
                :key="item.id"
                :id="item.id"
                :name="item.name"
                :email="item.email"
                :phone="item.phone"
                :address="item.address"
                :checkedAll="checkedForAll"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <TotalContactsPagination
      v-if="clientsList"
      @current-clients-list="paginatedClientList = $event"
      :clientsList="clientsList"
    />
  </section>
</template>

<style lang="scss" scoped></style>
