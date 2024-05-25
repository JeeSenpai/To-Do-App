<template>
    <!-- Navbar start -->
    <nav class="w-screen fixed shadow-sm bg-white px-4 py-2 lg:py-0 lg:px-20 z-50">
		<!-- Logo start -->

		<div class="flex md:justify-between lg:mt-4">
			<div class="h-full flex flex-col justify-center">
				<!-- <img src="@/assets/banner.png" alt="logo" class="w-40 mt-1"> -->
				<div class="text-xl mt-2">Logo Here</div>
			</div>
			<div>
				<div class="relative flex w-[300px] lg:w-[700px] mb-4">
					<select class="px-3 py-2.5 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:border-blue-500">
						<option value="address">All Filters</option>
						<option value="address">Address</option>
					</select>
					<input type="text" placeholder="Search" class="px-4 py- border text-sm border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500 flex-1">
					<button class="absolute inset-y-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">Search</button>
				</div>
			</div>
		</div>
		
		<!-- Logo end -->

		<!-- Toggler start -->
		
		<!-- Toggler end -->


		<!-- Menu content end -->
	</nav>
    <!-- Navbar end -->
</template>

<script>

export default {
    methods: {
		// Toogle navbar mode 
        navToggle() {
			let menu = document.querySelector("[role='menu']");
			let isExpanded = menu.getAttribute('aria-expanded');
			menu.setAttribute('aria-expanded', !isExpanded);
			menu.classList.toggle('hidden');
			menu.classList.toggle('flex');
		}
    }
}
</script>

<style scope>
.dropdown:hover .dropdown-text {
	color: rgb(29 78 216);
	cursor: pointer;
}
.dropdown:hover .dropdown-svg {
	fill: rgb(29, 78, 216);
}
.dropdown:hover .dropdown-menu {
  display: block;
  right: 0; /* Positioning the menu from the right edge */
  left: auto; /* Ensuring it's not positioned from the left */
}


</style>