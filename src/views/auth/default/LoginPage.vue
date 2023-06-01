<template>
	<section class="login-content">
		<div class="background"></div>
		<div class="container">
			<div class="content">
				<div class="logo"></div>
				<div class="text-sci">
					<h2>Welcome!<br><span>To</span></h2>
					<p>Smart Location Ledger</p>
				</div>
			</div>

			<div class="logreg-box">
				<div class="form-box login">
					<form action="#">
						<h2>Sign In</h2>
						<div class="input-box">
							<span class="icon"><i class='bx bxs-user-account'></i></span>
							<input
								type="text"
								name=""
								id="username"
								required
							>
							<label for="">Username</label>
						</div>

						<div class="input-box">
							<span class="icon"><i class='bx bxs-lock'></i></span>
							<input
								type="password"
								name=""
								id="password"
								required
							>
							<label for="">Password</label>
						</div>

						<button
							type="submit"
							class="btn"
							@click="$router.push({ path: '/admin/dashboard' })"
						>Sign In</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="css" scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Poppins", sans-serif;
}

body {
	background: #1778f2;
}

.background {
	width: 100%;
	height: 100vh;
	background: #1778f2;
	filter: blur(10px);
}

.container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 75%;
	height: 550px;
	background: url("@/assets/images/login-admin.png") no-repeat;
	background-position: 100px 10px;
	border-radius: 10px;
	margin-top: 20px;
}

.container .content {
	position: absolute;
	top: 0;
	left: 0;
	width: 58%;
	height: 100%;
	background: transparent;
	padding: 80px;
	color: #fff;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
}

.text-sci h2 {
	font-size: 40px;
	line-height: 1;
	color: #fff !important;
}

.text-sci h2 span {
	font-size: 20px;
}

.text-sci p {
	font-size: 16px;
	margin: 20px 0;
	text-align: justify;
}

.social-icons a:hover i {
	transform: scale(1.2);
}

.container .logreg-box {
	position: absolute;
	top: 0;
	right: 0;
	width: calc(100% - 58%);
	height: 100%;
}

.logreg-box .form-box {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: transparent;
	backdrop-filter: blur(20px);
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	color: #fff;
}

.form-box h2 {
	font-size: 32px;
	text-align: center;
}

.form-box .input-box {
	position: relative;
	width: 340px;
	height: 50px;
	border-bottom: 2px solid #fff;
	margin: 30px 0;
}

.input-box input {
	width: 100%;
	height: 100%;
	background: transparent;
	border: none;
	outline: none;
	font-size: 16px;
	color: #fff;
	font-weight: 500;
	padding-right: 28px;
}

.input-box label {
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	font-size: 16px;
	font-weight: 800;
	pointer-events: none;
	transition: 0.5s ease;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
	top: -5px;
}

.input-box .icon {
	position: absolute;
	top: 13px;
	right: 0;
	font-size: 19px;
}

.btn {
	width: 100%;
	height: 45px;
	/* background: #2140f3; */
	border: none;
	outline: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
	color: #fff;
	font-weight: 500;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
