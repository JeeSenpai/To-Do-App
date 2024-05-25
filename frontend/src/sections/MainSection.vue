<template>
    <!-- Main section start -->
	<section class="h-[400px] px-5 lg:px-20 py-16 lg:py-28 bg">
		<div class="w-full md:w-1/2 mt-10 h-full flex flex-col">
			<!-- Main text start -->
			<h6 class="text-xl mb-1 mr-2 lg:mt-6 font-medium text-gray-800">
				To Do App
			</h6>
			
			<p class=" text-gray-700 my-4 text-md">
				Basic CRUD Function
			</p> 

			<div class="relative w-[300px] lg:w-[600px]">
				<input v-model="todo" type="text" placeholder="Add anything" class="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 w-full">
				<button @click="addToDo()" class="absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">Add</button>
			</div>
			<!-- Main text end -->

			<!-- Social links start -->	
		</div>

	</section>
	<section class="h-[600px]">
		<button class="select-none inline-flex transition-colors hover:bg-slate-400 hover:text-white whitespace-nowrap rounded-lg bg-gray-400/10 py-1.5 px-2 ml-20 my-5 text-xs text-gray-900 w-auto">
			<svg height="1em" width="1em" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="mr-1 mt-0.5">
				<circle r="40" cx="50" cy="50" fill="red" />
			</svg>
			Read
		</button>
		<div v-for="(d, index) in data" :key="index" class="mx-20 my-1 p-4 border-1 border shadow-lg h-[100px] rounded-lg">
			<input class="p-2 border" type="text" v-model="d.todo" />
			<button @click="editToDo(index)" class="select-none inline-flex transition-colors hover:bg-yellow-400 hover:text-white whitespace-nowrap rounded-lg bg-gray-400/10 py-1.5 px-2 ml-4 my-5 text-xs text-gray-900 w-auto">
				Edit
			</button>
			<button @click="deleteToDo(d.id)" class="select-none inline-flex transition-colors hover:bg-red-400 hover:text-white whitespace-nowrap rounded-lg bg-gray-400/10 py-1.5 px-2 ml-4 my-5 text-xs text-gray-900 w-auto">
				Delete
			</button>
		</div>
	</section>
	<!-- Main section end -->
</template>

<script>
import axios from 'axios';
export default {
	data(){
		return {
			data: [],
			todo: null,
		}
	},
	methods: {
		init(){
			axios.get(process.env.VUE_APP_SERVER_URL + '/to-do').then((res)=>{
				if(res){
					this.data = res.data
				}
			})
		},
		addToDo(){
			if(this.todo || this.todo.trim() !== ''){
				let formData = {
					todo: this.todo
				}
				axios.post(process.env.VUE_APP_SERVER_URL + '/to-do', formData).then((res)=>{
					if(res.data.status == 201){
						this.init()
					}
				})
			}
		},
		editToDo(index){
			const id = this.data[index].id
			const editedText = this.data[index].todo
			let formData = {
				todo: editedText
			}
			axios.patch(process.env.VUE_APP_SERVER_URL + '/to-do/' + id, formData).then((res)=>{
				if(res.data.status == 202){
					this.init()
				}
			})
		},
		deleteToDo(id){
			console.log('hello')
			axios.delete(process.env.VUE_APP_SERVER_URL + '/to-do/' + id).then((res)=>{
				if(res){
					this.init()
				}
			})
		}
	},
	mounted(){
		this.init()
	}
}
</script>

<style scope>
.bg {
	background-color: #f9f9f9;
	background-repeat: no-repeat;
	background-size: cover;
	left:0;right:0;bottom:0;
}
</style>