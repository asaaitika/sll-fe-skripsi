<template>
	<section class="login-content">
		<div class="row m-0 align-items-center bg-white vh-100">
			<div
				class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden"
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
								<form>
									<div class="row">
										<div class="col-lg-12">
											<div class="form-group">
												<label
													for="email"
													class="form-label"
												>Username</label>
												<input
													type="email"
													class="form-control"
													id="email"
													aria-describedby="email"
													placeholder=" "
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
												/>
											</div>
										</div>
									</div>
									<div class="d-flex justify-content-center">
										<router-link
											:to="{ name: 'employee.liveattendance' }"
											v-slot="{ navigate }"
										>
											<button
												type="submit"
												class="btn btn-primary"
												style="background-color: #ef4565 !important; border-color: #ef4565 !important;"
												@click="navigate"
											>Login</button></router-link>
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

<script setup></script>

<style lang="scss" scoped></style>
