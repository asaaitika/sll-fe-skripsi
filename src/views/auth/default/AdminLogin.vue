<template>
	<section class="login-content">
		<div class="row m-0 align-items-center bg-white vh-100">
			<div
				class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden img-admin"
				style="background-color: #3da9fc !important"
			>
				<img
					src="@/assets/images/login-admin.png"
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
								<h2 class="mb-2 align-items-center">Sign In</h2>
								<p class="align-items-center">Welcome Admin!</p>
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
											class="btn btn-primary"
											style="
                        background-color: #3da9fc !important;
                        border-color: #3da9fc !important;
                      "
											@click="doLogin"
										>
											Login
										</button>
									</div>
									<p class="mt-3 text-center">
										<a
											href="/auth/reset-password"
											style="color: #3da9fc !important"
										>Forgot Password?</a>
									</p>
									<p class="mt-3 text-center">
										Are you Employee?
										<a
											href="/login-employee"
											class="text-underline"
											style="color: #3da9fc !important"
										>Please login here.</a>
									</p>
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
								fill="#3da9fc"
							/>
							<rect
								x="149.47"
								y="319.328"
								width="543"
								height="77.5714"
								rx="38.7857"
								transform="rotate(-45 149.47 319.328)"
								fill="#3da9fc"
							/>
							<rect
								x="203.936"
								y="99.543"
								width="310.286"
								height="77.5714"
								rx="38.7857"
								transform="rotate(45 203.936 99.543)"
								fill="#3da9fc"
							/>
							<rect
								x="204.316"
								y="-229.172"
								width="543"
								height="77.5714"
								rx="38.7857"
								transform="rotate(45 204.316 -229.172)"
								fill="#3da9fc"
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
					let data = response?.data?.data;

					if (data.division_id != 1) {
						this.$swal({
							icon: "error",
							title: "Oops...",
							text: "This user not in division HR Team!",
						});
					} else {
						localStorage.admin = JSON.stringify(response?.data?.data);

						router.replace({ name: "admin.dashboard" });
					}
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
		if (localStorage.admin) {
			router.replace({ name: "admin.dashboard" });
		}
	},
};
</script>

<style lang="scss" scoped></style>
