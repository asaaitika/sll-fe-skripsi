<template>
	<div class="row">
		<div class="welcome-card">
			<div class="welcome-text">
				<span class="text-greeting">Selamat Datang, John Doe!</span>
				<div class="date-welcome">
					<span>{{ this.momentInstance.format('dddd') }}</span>
					<span>{{ this.momentInstance.format('DD') }}</span>
					<span>{{ this.momentInstance.format('MMMM') }}</span>
				</div>
				<div class="welcome-time">{{ this.momentInstance.format('LTS') }}</div>
			</div>
			<div class="welcome-image">
				<img
					src="@/assets/images/LinkedIn_Isometric.png"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script>
import moment from "moment";

export default {
	data() {
		return {
			momentInstance: moment(),
		};
	},
	methods: {},
	mounted() {
		setInterval(() => {
			this.momentInstance = moment();
		}, 1000);
	},
};
</script>

<style scoped>
.welcome-card {
	width: 100%;
	background-color: #ef4565;
	height: 150px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: flex-start;
	align-items: flex-start;
	border-radius: 20px;
	padding: 10px 20px 20px 20px;
}

.welcome-card .text-greeting {
	color: #fff;
	font-weight: 400;
	font-size: 25px;
}

.date-welcome {
	background-color: #29abe2;
	display: flex;
	flex-direction: column;
	align-content: center;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	width: 100px;
	border-radius: 10px;
	padding: 8px;
	margin-top: 3px;
}

.date-welcome span {
	color: #fff;
	font-weight: 500;
}

.welcome-time {
	position: absolute;
	left: 27%;
	bottom: 75%;
	color: #fff;
	font-weight: bold;
	letter-spacing: 1px;
	font-size: 25px;
}

.welcome-image {
	position: fixed;
	right: 7%;
	bottom: 71%;
}

.welcome-image img {
	width: 200px;
}

@media only screen and (max-width: 768px) {
	.welcome-card {
		flex-direction: row;
	}

	.welcome-card .text-greeting {
		font-size: 15px;
	}

	.date-welcome {
		padding: 5px;
		margin-top: 5px;
	}

	.welcome-time {
		left: 38%;
		bottom: 75%;
		font-size: 17px;
	}

	.welcome-image img {
		width: 100px;
	}

	.welcome-image {
		position: fixed;
		right: 7%;
		bottom: 71%;
	}
}
</style>
