<template>
	<b-row>
		<b-col md="12">
			<b-card>
				<div class="d-flex align-items-center justify-content-between flex-wrap">
					<h4 class="card-title">Live Attendance</h4>
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
				<b-row>
					<b-col sm="6">
						<b-card-body>
							<EmployeeLiveAttendance ref="employeeLiveAttendance" />
							
							<!-- <iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3485810260586!2d106.92154257539207!3d-6.217679393770293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ca6209958bd%3A0xac5e7c3a136a8a06!2sBuaran%20Plaza%2C%20Jl.%20Raden%20Intan%20Raya%2C%20RT.8%2FRW.14%2C%20Klender%2C%20Kec.%20Duren%20Sawit%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013470!5e0!3m2!1sid!2sid!4v1685802567086!5m2!1sid!2sid"
								loading="lazy"
								class="w-100"
								height="500"
								allowfullscreen=""
							></iframe> -->
						</b-card-body>
					</b-col>
					<b-col sm="6">
						<b-card-body>
							<div class="d-flex align-items-center justify-content-center">
								<div class="d-flex flex-column text-center align-items-center justify-content-between">
									<div class="mt-3 fs-italic">
										<h5 class="mb-2 text-center">Schedule Office</h5>
										<h4 class="mb-2 text-center">09:30 AM - 06:30 PM</h4>
									</div>
									<div class="mt-5 text-center text-muted-50">
										<h5 class="mb-4 text-center">{{ this.momentInstance.format('dddd, DD MMMM yyyy') }}</h5>
										<h4 class="mb-5 text-center">{{ this.momentInstance.format('LT') }}</h4>
									</div>
									<div class="d-flex gap-5 flex-wrap justify-content-center">
										<b-button @click="callCheckLocation" variant="primary">Clock In</b-button>
										<b-button variant="primary">Clock Out</b-button>
									</div>
								</div>
							</div>
						</b-card-body>
					</b-col>
				</b-row>
			</b-card>
		</b-col>
	</b-row>
</template>

<script>
import { ref, watch, onMounted, inject } from 'vue';
import moment from 'moment';
import EmployeeLiveAttendance from '@/components/custom/leaflet-map/EmployeeLiveAttendance';

export default {
	components: {
		EmployeeLiveAttendance,
	},
	setup() {
		// Define reactive data using ref
		const momentInstance = ref(moment());
		const employeeLiveAttendance = ref(null);
		
		const callCheckLocation = () => {
			if (employeeLiveAttendance.value) {
				employeeLiveAttendance.value.checkLocation();
			}
		};

		// Define a watcher to update the momentInstance every second
		watch(
			momentInstance,
			() => {
				momentInstance.value = moment();
			},
			{ immediate: true, deep: true }
		);

		// Mount the component
		onMounted(() => {
			setInterval(() => {
				momentInstance.value = moment();
			}, 1000);
		});

		return {
			momentInstance,
			callCheckLocation,
			employeeLiveAttendance,
		};
	},
};
</script>
