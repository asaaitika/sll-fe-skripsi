<template>
	<default-navbar>
		<button
			data-trigger="navbar_main"
			class="d-xl-none btn btn-primary rounded-pill p-1 pt-0"
			type="button"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvasNavbar"
			aria-controls="offcanvasNavbar"
		>
			<svg
				width="20px"
				height="20px"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
				></path>
			</svg>
		</button>
		<div
			class="offcanvas offcanvas-start d-xl-none d-md-block"
			tabindex="-1"
			id="offcanvasNavbar"
			aria-labelledby="offcanvasNavbarLabel"
		>
			<div class="offcanvas-header">
				<div class="navbar-brand ms-0">
					<brand-logo :color="true"></brand-logo>
					<h4 class="logo-title"><brand-name></brand-name></h4>
				</div>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">
				<ul class="navbar-nav">
					<li class="nav-item"><router-link
							class="nav-link"
							:to="{ name: 'employee.liveattendance' }"
						> Live Attendance </router-link></li>
					<li class="nav-item"><router-link
							class="nav-link"
							:to="{ name: 'employee.timeoff' }"
						> Time Off </router-link></li>
					<li class="nav-item"><router-link
							class="nav-link"
							:to="{ name: 'employee.myslip' }"
						> MySlip </router-link></li>
					<li class="nav-item"><router-link
							class="nav-link"
							:to="{ name: 'employee.attendancelog' }"
						> Attendance Log </router-link></li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'login.employee' }"
						> <a @click="doLogout('login.employee')">Logout</a> </router-link>
					</li>
				</ul>
			</div>
		</div>
		<b-col lg="3 navbar-brand">
			<router-link
				:to="{ name: 'employee.liveattendance' }"
				class="d-flex"
			>
				<brand-logo></brand-logo>
				<h4
					class="logo-title d-none d-sm-block"
					style="color: white !important;"
				><brand-name></brand-name></h4>
			</router-link>
		</b-col>
		<horizontal-menu></horizontal-menu>
	</default-navbar>
</template>

<script setup>
import DefaultNavbar from "@/components/custom/navbar/EmployeeNavbar.vue";
import HorizontalMenu from "@/components/custom/navbar/HorizontalMenu.vue";
</script>

<script>
import router from "@/router";

export default {
	methods: {
		doLogout(routeTo) {
			this.$swal({
				title: "Warning!",
				text: "Are you sure want to log out?",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes!",
				cancelButtonText: "No",
			}).then((result) => {
				if (result.value) {
					if (routeTo === "login.employee") {
						router.replace({ name: "login.employee" });
						localStorage.clear();
					}
				}
			});
		},
	},
};
</script>
