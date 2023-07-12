<template>
	<!-- Horizontal Menu Start -->
	<nav
		id="navbar_main"
		class="mobile-offcanvas hover-nav horizontal-nav mx-md-auto navbar navbar-expand-xl navbar-dark"
		style="--bs-navbar-active-color: white !important;"
	>
		<div class="container-fluid">
			<div class="offcanvas-header px-0">
				<div class="navbar-brand ms-0">
					<brand-logo :color="true"></brand-logo>
					<h4 class="logo-title"><brand-name></brand-name></h4>
				</div>
				<button class="btn-close float-end"></button>
			</div>
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link
						class="nav-link"
						:to="{ name: 'employee.liveattendance' }"
					> Live Attendance </router-link>
				</li>
				<li class="nav-item"><router-link
						class="nav-link"
						:to="{ name: 'employee.timeoff' }"
					> Time Off </router-link></li>
				<li class="nav-item">
					<router-link
						class="nav-link"
						:to="{ name: 'employee.myslip' }"
					> MySlip </router-link>
				</li>
				<li class="nav-item">
					<router-link
						class="nav-link"
						:to="{ name: 'employee.attendancelog' }"
					> Attendance Log </router-link>
				</li>
				<li class="nav-item">
					<router-link
						class="nav-link"
						:to="{ name: 'login.employee' }"
					> <a @click="doLogout('login.employee')">Logout</a> </router-link>
				</li>
			</ul>
		</div>
		<!-- container-fluid.// -->
	</nav>
	<!-- Sidebar Menu End -->
</template>

<script>
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


<style lang="scss" scoped></style>
