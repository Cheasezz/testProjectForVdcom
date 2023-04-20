<script>
export default {
	props:{
		icon:{
			type:String,
		},
		name:{
			type:String
		},
		selectedItem:{
			type:String,
			default:'Total Contacts',
		},
	}
};
</script>
<template>
  <li>
    <button
      type="button"
      class="w-full flex items-center p-2 text-black rounded-lg transition hover:border-l-8 hover:border-l-myOrange-600 hover:bg-myOrange-600/20"
      :class="{
        'border-l-8 border-l-myOrange-600 bg-myOrange-600/20': selectedItem==name,
      }"
    >
      <span v-html="icon">
			</span>
      
      <span class="ml-3">{{ name }}</span>
    </button>
  </li>
</template>

<style lang="scss" scoped></style>
