<template>
	<!-- Navbar start -->
	<navbar-element></navbar-element>
	<!-- Navbar end -->

	<!-- Rendered view start -->
	<router-view></router-view>
	<!-- Rendered view end -->

</template>

<script>
import NavbarElement from '@/components/NavbarElement.vue';
// import FooterElement from '@/components/FooterElement.vue';


export default {
	components: {
		// FooterElement,
		NavbarElement
	}
}
</script>

<style>

</style>
