<script>
import EditIcon from '../components/icons/EditIcon.vue';
import RemoveIcon from '../components/icons/RemoveIcon.vue';
export default {
	components:{
		EditIcon,
		RemoveIcon
	},
	props:{
		id:{
			type:Number
		},
		name:{
			type:String
		},
		email:{
			type:String
		},
		phone:{
			type:String
		},
		address:{
			type:Object
		},
		checkedAll:{
			type:Boolean
		}
	}
};
</script>

<template>
  <tr class="bg-white">
    <td class="p-2">
      <input type="checkbox" class="w-5 h-5" :checked="checkedAll" />
    </td>
    <td class="p-2">
      <div class="font-medium text-gray-800">{{ id }}</div>
    </td>
    <td class="p-2">
      <div class="text-left">{{ name }}</div>
    </td>
    <td class="p-2">
      <div class="text-left">{{ email }}</div>
    </td>
    <td class="p-2">
      <div class="text-left">{{ phone }}</div>
    </td>
    <td class="p-2">
      <p class="text-left "><b>City:</b> {{ address.city }}</p>
      <p class="text-left "><b>Street:</b> {{ address.street }}</p>
    </td>
    <td class="p-2">
      <div class="flex justify-center gap-4">
        <button type="button">
          <EditIcon />
        </button>
        <button type="button">
          <RemoveIcon />
        </button>
      </div>
    </td>
  </tr>
</template>

<style lang="scss" scoped></style>
