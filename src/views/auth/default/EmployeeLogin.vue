<template>
	<section class="login-content">
		<div class="row m-0 align-items-center bg-white vh-100">
			<div
				class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden img-employee"
				style="background-color: #ef4565 !important"
			>
				<img
					src="@/assets/images/login-employee.png"
					class="img-fluid"
					alt="images"
					loading="lazy"
				/>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-10">
						<div class="card card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
							<div class="card-body">
								<h2 class="mb-2 text-center">Login</h2>
								<p class="text-center">Welcome! to Smart Location Ledger</p>
								<form @submit.prevent="">
									<div class="row">
										<div class="col-lg-12">
											<div class="form-group">
												<label
													for="username"
													class="form-label"
												>Username</label>
												<input
													type="text"
													class="form-control"
													id="username"
													aria-describedby="username"
													placeholder=" "
													v-model="username"
												/>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-group">
												<label
													for="password"
													class="form-label"
												>Password</label>
												<input
													type="password"
													class="form-control"
													id="password"
													aria-describedby="password"
													placeholder=" "
													v-model="password"
												/>
											</div>
										</div>
									</div>
									<div class="d-flex justify-content-center">
										<button
											type="submit"
											class="btn btn-primary"
											style="background-color: #ef4565 !important; border-color: #ef4565 !important;"
											@click="doLogin"
										>Login</button>
									</div>
									<p class="mt-3 text-center">Are you Admin? <a
											href="/"
											class="text-underline"
											style="color: #ef4565 !important;"
										>Login here.</a></p>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div class="sign-bg sign-bg-right">
					<svg
						width="280"
						height="230"
						viewBox="0 0 421 359"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.05">
							<rect
								x="-15.0845"
								y="154.773"
								width="543"
								height="77.5714"
								rx="38.7857"
								transform="rotate(-45 -15.0845 154.773)"
								fill="#ef4565"
							/>
							<rect
								x="149.47"
								y="319.328"
								width="543"
								height="77.5714"
								rx="38.7857"
								transform="rotate(-45 149.47 319.328)"
								fill="#ef4565"
							/>
							<rect
								x="203.936"
								y="99.543"
								width="310.286"
								height="77.5714"
								rx="38.7857"
								transform="rotate(45 203.936 99.543)"
								fill="#ef4565"
							/>
							<rect
								x="204.316"
								y="-229.172"
								width="543"
								height="77.5714"
								rx="38.7857"
								transform="rotate(45 204.316 -229.172)"
								fill="#ef4565"
							/>
						</g>
					</svg>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
import axios from "axios";
import router from "@/router";

export default {
	data() {
		return {
			username: "",
			password: "",
		};
	},
	methods: {
		doLogin() {
			const param = {
				username: this.username,
				password: this.password,
			};

			//   const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.N1c2nJo8nCgnpvmf1dYSNq_0tqzl9gs_SBG_aDhVCkE`;

			const headers = {
				"Content-Type": "application/json",
				// 'Authorization': `Bearer ${token}`
			};

			axios
				.post(`/login`, param, {
					headers: headers,
				})
				.then((response) => {
					// handle success
					// console.log(response?.data?.data);
					localStorage.employee = JSON.stringify(response?.data?.data);

					router.replace({ name: "employee.liveattendance" });
				})
				.catch((error) => {
					// handle error
					// console.log(error);
					let errors = error?.response?.data?.meta?.message;

					this.$swal({
						icon: "error",
						title: "Oops...",
						text: errors,
					});
				})
				.finally(function () {
					// always executed
				});
		},
	},
	mounted() {
		if (localStorage.employee) {
			router.replace({ name: "employee.liveattendance" });
		}
	},
};
</script>

<style lang="scss" scoped></style>
