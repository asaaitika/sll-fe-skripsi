<template>
	<b-row>
		<b-col md="12">
			<b-card>
				<div class="d-flex align-items-center justify-content-between flex-wrap">
					<h4 class="card-title">Attendance</h4>
				</div>
			</b-card>
		</b-col>
	</b-row>

	<b-row>
		<b-col
			lg="12"
			sm="12"
		>
			<b-card no-body>
				<b-card-header header-class="d-flex justify-content-between">
					<div class="header-title">
						<h4 class="card-title">Attendance Overview</h4>
					</div>
					<div class="d-flex align-items-center flex-wrap">
						<b-button
							tag="button"
							variant="outline-secondary"
							class="disabled"
							style="border-color: #3da9fc !important; color: black !important; font-weight: bold !important;"
						><span>{{ this.momentInstance.format('MMMM yyyy') }}</span></b-button>
					</div>
				</b-card-header>
				<b-card-body>
					<div class="row d-flex justify-content-center">
						<b-col class="col-lg-2 col-md-6">
							<b-card class="bg-soft-primary">
								<div class="d-flex justify-content-between align-items-center">
									<div class="bg-soft-primary rounded p-3">
										<svg
											width="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9173C2 20.3665 5.364 20.9999 9.34933 20.9999C13.3131 20.9999 16.6987 20.3876 16.6987 17.9403C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z"
												fill="currentColor"
											></path>
											<path
												opacity="0.4"
												d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z"
												fill="currentColor"
											></path>
											<path
												opacity="0.4"
												d="M16.1733 7.84873C16.1733 9.19505 15.7604 10.4513 15.0363 11.4948C14.961 11.6021 15.0275 11.7468 15.1586 11.7698C15.3406 11.7995 15.5275 11.8177 15.7183 11.8216C17.6165 11.8704 19.3201 10.6736 19.7907 8.87116C20.4884 6.19674 18.4414 3.79541 15.8338 3.79541C15.551 3.79541 15.2799 3.82416 15.0157 3.87686C14.9795 3.88453 14.9404 3.90177 14.9208 3.93244C14.8954 3.97172 14.914 4.02251 14.9394 4.05605C15.7232 5.13214 16.1733 6.44205 16.1733 7.84873Z"
												fill="currentColor"
											></path>
											<path
												d="M21.779 15.1693C21.4316 14.4439 20.593 13.9465 19.3171 13.7022C18.7153 13.5585 17.0852 13.3544 15.5695 13.3831C15.547 13.386 15.5343 13.4013 15.5324 13.4109C15.5294 13.4262 15.5363 13.4492 15.5656 13.4655C16.2662 13.8047 18.9737 15.2804 18.6332 18.3927C18.6185 18.5288 18.729 18.6438 18.867 18.6246C19.5333 18.5317 21.2476 18.1704 21.779 17.0474C22.0735 16.4533 22.0735 15.7634 21.779 15.1693Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="text-end">
										<h2>
											<Vue3autocounter
												ref="counter"
												:startAmount="0"
												:endAmount="2"
											/>
										</h2>
										Present
									</div>
								</div>
							</b-card>
						</b-col>
						<b-col class="col-lg-2 col-md-6">
							<b-card class="bg-soft-danger">
								<div class="d-flex justify-content-between align-items-center">
									<div class="bg-soft-danger rounded p-3">
										<svg
											width="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
												fill="currentColor"
											></path>
											<path
												opacity="0.4"
												d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="text-end">
										<h2>
											<Vue3autocounter
												ref="counter"
												:startAmount="0"
												:endAmount="1"
											/>
										</h2>
										Absent
									</div>
								</div>
							</b-card>
						</b-col>
						<b-col class="col-lg-2 col-md-6">
							<b-card class="card bg-soft-warning">
								<div class="d-flex justify-content-between align-items-center">
									<div class="bg-soft-warning rounded p-3">
										<svg
											width="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9173C2 20.3665 5.364 20.9999 9.34933 20.9999C13.3131 20.9999 16.6987 20.3876 16.6987 17.9403C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z"
												fill="currentColor"
											></path>
											<path
												opacity="0.4"
												d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z"
												fill="currentColor"
											></path>
											<path
												opacity="0.4"
												d="M16.1733 7.84873C16.1733 9.19505 15.7604 10.4513 15.0363 11.4948C14.961 11.6021 15.0275 11.7468 15.1586 11.7698C15.3406 11.7995 15.5275 11.8177 15.7183 11.8216C17.6165 11.8704 19.3201 10.6736 19.7907 8.87116C20.4884 6.19674 18.4414 3.79541 15.8338 3.79541C15.551 3.79541 15.2799 3.82416 15.0157 3.87686C14.9795 3.88453 14.9404 3.90177 14.9208 3.93244C14.8954 3.97172 14.914 4.02251 14.9394 4.05605C15.7232 5.13214 16.1733 6.44205 16.1733 7.84873Z"
												fill="currentColor"
											></path>
											<path
												d="M21.779 15.1693C21.4316 14.4439 20.593 13.9465 19.3171 13.7022C18.7153 13.5585 17.0852 13.3544 15.5695 13.3831C15.547 13.386 15.5343 13.4013 15.5324 13.4109C15.5294 13.4262 15.5363 13.4492 15.5656 13.4655C16.2662 13.8047 18.9737 15.2804 18.6332 18.3927C18.6185 18.5288 18.729 18.6438 18.867 18.6246C19.5333 18.5317 21.2476 18.1704 21.779 17.0474C22.0735 16.4533 22.0735 15.7634 21.779 15.1693Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="text-end">
										<h2>
											<Vue3autocounter
												ref="counter"
												:startAmount="0"
												:endAmount="1"
											/>
										</h2>
										Late
									</div>
								</div>
							</b-card>
						</b-col>
						<b-col class="col-lg-2 col-md-6">
							<b-card class="bg-soft-dark">
								<div class="d-flex justify-content-between align-items-center">
									<div class="bg-soft-dark rounded p-3">
										<svg
											class="icon-32"
											width="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M10.7044 3.51898C10.034 3.51898 9.46373 3.9848 9.30365 4.61265H14.6863C14.5263 3.9848 13.956 3.51898 13.2856 3.51898H10.7044ZM16.2071 4.61264H18.1881C20.2891 4.61264 22 6.34428 22 8.47085C22 8.47085 21.94 9.3711 21.92 10.6248C21.918 10.724 21.8699 10.8212 21.7909 10.88C21.3097 11.2354 20.8694 11.5291 20.8294 11.5493C19.1686 12.6632 17.2386 13.447 15.1826 13.8369C15.0485 13.8632 14.9165 13.7934 14.8484 13.6739C14.2721 12.6754 13.1956 12.0253 11.995 12.0253C10.8024 12.0253 9.71586 12.6683 9.12256 13.6678C9.05353 13.7853 8.92346 13.8531 8.7904 13.8278C6.75138 13.4369 4.82141 12.6541 3.17059 11.5594L2.21011 10.8911C2.13007 10.8405 2.08004 10.7493 2.08004 10.6481C2.05003 10.1316 2 8.47085 2 8.47085C2 6.34428 3.71086 4.61264 5.81191 4.61264H7.78289C7.97299 3.1443 9.2036 2 10.7044 2H13.2856C14.7864 2 16.017 3.1443 16.2071 4.61264ZM21.6598 12.8152L21.6198 12.8355C19.5988 14.1924 17.1676 15.0937 14.6163 15.4684C14.2561 15.519 13.8959 15.2861 13.7959 14.9216C13.5758 14.0912 12.8654 13.5443 12.015 13.5443H12.005H11.985C11.1346 13.5443 10.4242 14.0912 10.2041 14.9216C10.1041 15.2861 9.74387 15.519 9.38369 15.4684C6.83242 15.0937 4.4012 14.1924 2.38019 12.8355C2.37019 12.8254 2.27014 12.7646 2.1901 12.8152C2.10005 12.8659 2.10005 12.9874 2.10005 12.9874L2.17009 18.1519C2.17009 20.2785 3.87094 22 5.97199 22H18.018C20.1191 22 21.8199 20.2785 21.8199 18.1519L21.9 12.9874C21.9 12.9874 21.9 12.8659 21.8099 12.8152C21.7599 12.7849 21.6999 12.795 21.6598 12.8152ZM12.7454 17.0583C12.7454 17.4836 12.4152 17.8177 11.995 17.8177C11.5848 17.8177 11.2446 17.4836 11.2446 17.0583V15.7519C11.2446 15.3367 11.5848 14.9924 11.995 14.9924C12.4152 14.9924 12.7454 15.3367 12.7454 15.7519V17.0583Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="text-end">
										<h2>
											<Vue3autocounter
												ref="counter"
												:startAmount="0"
												:endAmount="0"
											/>
										</h2>
										Leave
									</div>
								</div>
							</b-card>
						</b-col>
						<b-col class="col-lg-2 col-md-6">
							<b-card class="bg-soft-success">
								<div class="d-flex justify-content-between align-items-center">
									<div class="bg-soft-success rounded p-3">
										<svg
											class="icon-32"
											width="20"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M19.761 12.001C19.761 12.8145 20.429 13.4764 21.25 13.4764C21.664 13.4764 22 13.8093 22 14.2195V16.8958C22 19.159 20.142 21 17.858 21H6.143C3.859 21 2 19.159 2 16.8958V14.2195C2 13.8093 2.336 13.4764 2.75 13.4764C3.572 13.4764 4.24 12.8145 4.24 12.001C4.24 11.2083 3.599 10.6118 2.75 10.6118C2.551 10.6118 2.361 10.5335 2.22 10.3938C2.079 10.2541 2 10.0648 2 9.86866L2.002 7.10514C2.002 4.84201 3.86 3 6.144 3H17.856C20.14 3 21.999 4.84201 21.999 7.10514L22 9.78245C22 9.97864 21.921 10.1689 21.781 10.3076C21.64 10.4473 21.45 10.5256 21.25 10.5256C20.429 10.5256 19.761 11.1875 19.761 12.001ZM14.252 12.648L15.431 11.5105C15.636 11.3143 15.707 11.025 15.618 10.7575C15.53 10.4899 15.3 10.2997 15.022 10.261L13.393 10.0252L12.664 8.5627C12.539 8.31102 12.285 8.15446 12.002 8.15347H12C11.718 8.15347 11.464 8.31003 11.337 8.56171L10.608 10.0252L8.982 10.26C8.701 10.2997 8.471 10.4899 8.382 10.7575C8.294 11.025 8.365 11.3143 8.569 11.5105L9.748 12.648L9.47 14.2562C9.422 14.5336 9.535 14.8091 9.765 14.9746C9.895 15.0667 10.046 15.1143 10.199 15.1143C10.316 15.1143 10.434 15.0855 10.542 15.0291L12 14.2701L13.455 15.0271C13.707 15.1608 14.006 15.14 14.235 14.9736C14.466 14.8091 14.579 14.5336 14.531 14.2562L14.252 12.648Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
									<div class="text-end">
										<h2>
											<Vue3autocounter
												ref="counter"
												:startAmount="0"
												:endAmount="0"
											/>
										</h2>
										Holiday
									</div>
								</div>
							</b-card>
						</b-col>
					</div>
				</b-card-body>
			</b-card>

			<b-card no-body>
				<b-card-header header-class="d-flex justify-content-between">
					<div class="header-title">
						<h4 class="card-title">All Attendance</h4>
					</div>
				</b-card-header>
				<b-card-body>
					<div>
						<b-table
							:sticky-header="stickyHeader"
							:no-border-collapse="noCollapse"
							responsive
							:items="items"
							:fields="fields"
						>
							<!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
							<!-- <template #head(id)="scope">
								<div class="text-nowrap">Full Name</div>
							</template>
							<template #head()="scope">
								<div class="text-nowrap">
									{{ scope.label }}
								</div>
							</template>
							<template>
								<div id="font">
									{{ scope.font }}
								</div>
							</template> -->
						</b-table>
					</div>
				</b-card-body>
			</b-card>
		</b-col>
	</b-row>

	

</template>

<script>
import Vue3autocounter from "vue3-autocounter";
import moment from "moment";

export default {
	name: "WidgetBasic",
	components: {
		Vue3autocounter,
	},
	data() {
		return {
			momentInstance: moment(),
			stickyHeader: true,
			noCollapse: false,
			fields: [
				{
					key: "id",
					stickyColumn: true,
					isRowHeader: true,
					variant: "primary",
				},
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"11",
				"12",
				"13",
				"14",
			],
			items: [
				{
					id: "Cilo Anabul Budiman",
					1: "WFH",
					2: "WFO",
					3: "WFH",
					4: "",
					5: "",
					6: "",
					7: "",
					8: "",
					9: "",
					10: "",
					11: "",
					12: "",
					13: "",
					14: "",
				},
				{
					id: "Milo Anabul Budiman",
					1: "WFO",
					2: "WFH",
					3: "WFH",
					4: "",
					5: "",
					6: "",
					7: "",
					8: "",
					9: "",
					10: "",
					11: "",
					12: "",
					13: "",
					14: "",
				},
				{
					id: "Lilo Anabul Budiman",
					1: "WFH",
					2: "WFO",
					3: "WFH",
					4: "",
					5: "",
					6: "",
					7: "",
					8: "",
					9: "",
					10: "",
					11: "",
					12: "",
					13: "",
					14: "",
				},
			],
		};
	},
	mounted() {
		setInterval(() => {
			this.momentInstance = moment();
		}, 1000);
	},
};
</script>

<style scoped>
</style>