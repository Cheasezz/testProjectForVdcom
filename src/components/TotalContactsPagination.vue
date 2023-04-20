<script>
import ArrowNextIcon from './icons/ArrowNextIcon.vue';
import ArrowPreviousIcon from './icons/ArrowPreviousIcon.vue';
export default {
  components: {
    ArrowNextIcon,
    ArrowPreviousIcon,
  },
	props:{
		clientsList:{
			type:Array
		}
	},
	emits:{
		'current-clients-list':(list)=>Array.isArray(list)
	},
	data(){
		return {
			page:1,
		}
	},

  computed: {
    startIndex() {
      return (this.page - 1) * 7;
    },
    endIndex() {
      return this.page * 7;
    },

    paginatedClientsList() {
			const currentClientsList = this.clientsList.slice(this.startIndex, this.endIndex);
			
      this.$emit('current-clients-list', currentClientsList);
      return currentClientsList;
    },
    hasNextPage() {
      return this.clientsList.length > this.endIndex;
    },
  },
	mounted(){
		const currentClientsList = this.clientsList.slice(this.startIndex, this.endIndex);
		this.$emit('current-clients-list', currentClientsList);
	},
	watch:{

		paginatedClientsList() {
      if (this.paginatedClientsList.length === 0 && this.page > 1) {
        this.page -= 1;
      }
    },
	}
};
</script>
<template>
  <nav class="flex">
    <ul class="inline-flex items-center -space-x-px ml-auto px-2">
      <li>
        <button
				@click="page = page - 1"
          type="button"
          class="block px-3 py-2 ml-0 leading-tight text-gray-500 hover:text-black"
					:disabled="page==1"
        >
          <span class="sr-only">Previous</span>
          <ArrowPreviousIcon />
        </button>
      </li>
      <li class="w-7">
        <button
          type="button"
          class="px-2 py-1 leading-tight text-black hover:bg-myOrange-600 border border-transparent hover:rounded-full"
        >
          1
        </button>
      </li>
      <li class="w-7">
        <button
          type="button"
          class="px-2 py-1 leading-tight text-black hover:bg-myOrange-600 border border-transparent hover:rounded-full"
        >
          2
        </button>
      </li>
      <li>
        <button
          @click="page = page + 1"
					:disabled="!hasNextPage"
					
          type="button"
          class="block px-3 py-2 ml-0 leading-tight text-gray-500 hover:text-black"
        >
          <span class="sr-only">Next</span>
          <ArrowNextIcon />
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
