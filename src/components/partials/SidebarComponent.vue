<template>
	<!-- Sidebar Component Start Here-->
	<default-sidebar>
		<ul
			class="navbar-nav iq-main-menu"
			id="sidebar-menu"
		>
			<side-menu
				isTag="router-link"
				title="Dashboard Admin"
				icon="view-grid"
				:route="{ to: 'admin.dashboard' }"
			></side-menu>
			<li>
				<hr class="hr-horizontal" />
			</li>
			<side-menu
				isTag="router-link"
				title="Employee"
				icon="user-group"
				:route="{ to: 'admin.employee' }"
			></side-menu>
			<li>
				<hr class="hr-horizontal" />
			</li>
			<side-menu
				isTag="router-link"
				title="Attendance"
				icon="clock-circle"
				:route="{ to: 'admin.attendance' }"
			></side-menu>
			<li>
				<hr class="hr-horizontal" />
			</li>
			<side-menu
				isTag="router-link"
				title="Payroll"
				icon="wallet"
				:route="{ to: 'admin.payroll' }"
			></side-menu>
			<li>
				<hr class="hr-horizontal" />
			</li>
			<side-menu
				isTag="router-link"
				title="Approval"
				icon="shield-check"
				:route="{ to: 'admin.approval' }"
			></side-menu>
			<li>
				<hr class="hr-horizontal" />
			</li>
			<side-menu
				isTag="router-link"
				title="Logout"
				icon="exit"
				:route="{ to: 'login.admin' }"
			></side-menu>
			<li>
				<hr class="hr-horizontal" />
			</li>
		</ul>
	</default-sidebar>
	<!-- Sidebar Component End Here-->
</template>

<script setup>
import DefaultSidebar from "@/components/custom/sidebar/DefaultSidebar.vue";
import SideMenu from "@/components/custom/nav/SideMenu.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
const currentRoute = ref("");
const route = useRoute();
const toggle = (route) => {
	if (route === currentRoute.value && route.includes(".")) {
		const menu = currentRoute.value.split(".");
		return (currentRoute.value = menu[menu.length - 2]);
	}
	if (route !== currentRoute.value && currentRoute.value.includes(route)) {
		return (currentRoute.value = "");
	}
	if (route !== currentRoute.value) {
		return (currentRoute.value = route);
	}
	if (route === currentRoute.value) {
		return (currentRoute.value = "");
	}
	return (currentRoute.value = "");
};
toggle(route.name);
</script>
<style></style>
