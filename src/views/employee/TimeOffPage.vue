<template>
	<b-row>
		<b-col md="12">
			<b-card no-body>
				<b-card-header header-class="d-flex justify-content-between">
					<div class="header-title">
						<h4 class="card-title">Your Time Off Information</h4>
					</div>
				</b-card-header>
				<b-card-body>
					<div class="d-flex align-items-center gap-3">
						<a
							href="#"
							class="text-center btn btn-primary d-flex gap-2"
							data-bs-toggle="modal"
							data-bs-target="#request-time-off"
						>
							Request Time Off
						</a>
					</div>
				</b-card-body>
				<b-row class="justify-content-center">
					<b-col md="3">
						<div class="text-center">
							<h7>Your Time Off Balance</h7>
						</div>
						<b-card
							no-body
							class="p-3 bg-soft-primary"
						>
							<h5 class="text-center">Cuti Tahunan</h5>
							<div class="text-center">
								<h1>
									<Vue3autocounter
										ref="counter"
										:startAmount="0"
										:endAmount="12"
									/>
								</h1>
								<p class="mb-0 bold">Hari</p>
							</div>
						</b-card>
					</b-col>
				</b-row>
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
						<div class="d-flex align-items-center gap-3">
							<h4 class="card-title">Filter</h4>
						</div>
					</div>
				</b-card-header>
				<b-card-body>
					<b-form>
						<b-form-group>
							<b-row class="align-items-center">
								<b-col sm="4">
									<b-row class="align-items-center">
										<b-col sm="3">
											<label
												for="input-8101"
												class="form-label mb-0"
											>Status</label>
										</b-col>
										<b-col sm="9">
											<b-form-select
												:options="statusOptions"
												id="input-1801"
												class="form-select"
											></b-form-select>
										</b-col>
									</b-row>
								</b-col>
								<b-col sm="4">
									<b-row class="align-items-center">
										<b-col sm="3">
											<label
												for="input-8102"
												class="form-label mb-0"
											>Month</label>
										</b-col>
										<b-col sm="9">
											<b-form-input
												id="input-8102"
												type="date"
												placeholder="2019-12-18"
											></b-form-input>
										</b-col>
									</b-row>
								</b-col>
								<b-col sm="4">
									<b-row class="align-items-center">
										<b-col sm="3">
											<label
												for="input-8103"
												class="form-label mb-0"
											>Year</label>
										</b-col>
										<b-col sm="9">
											<b-form-input
												id="input-8103"
												type="date"
												placeholder="2019-12-18"
											></b-form-input>
										</b-col>
									</b-row>
								</b-col>
							</b-row>
						</b-form-group>
						<br>
						<div class="d-flex gap-2 flex-wrap justify-content-center">
							<b-button variant="primary">Search</b-button>
							<b-button variant="outline-primary">Reset</b-button>
						</div>
					</b-form>
				</b-card-body>
			</b-card>

			<b-card no-body>
				<b-card-body>
					<div class="table-responsive">
						<table
							id="user-list-table"
							class="table table-striped"
							role="grid"
							data-toggle="data-table"
						>
							<thead>
								<tr class="ligth">
									<th>Create Date</th>
									<th>Type Time Off</th>
									<th>Start Date</th>
									<th>End Date</th>
									<th>Notes</th>
									<th>Status</th>
									<th>File</th>
									<th style="min-width: 100px">Action</th>
								</tr>
							</thead>
							<tbody>
								<table-widget4 :list="tableData" />
							</tbody>
						</table>
					</div>
				</b-card-body>
			</b-card>
		</b-col>
	</b-row>

</template>

<script>
import TableWidget4 from "@/components/widgets/users/TableWidget4.vue";
import Vue3autocounter from "vue3-autocounter";

export default {
	components: {
		TableWidget4,
		Vue3autocounter,
	},
	setup() {
		const tableData = [
			{
				i1: "30/05/2023",
				i2: "CT",
				i3: "01/06/2023",
				i4: "02/06/2023",
				i5: "Cuti Tahunan",
				i6: "Pending Approval",
				i7: "",
			},
		];
		const statusOptions = [
			{ value: "G", text: "Generated" },
			{ value: "N", text: "No" },
		];
		return {
			tableData,
			statusOptions,
		};
	},
};
</script>

<style scoped>
.btn-white {
	background-color: white;
	border-color: #3da9fc;
	color: #3da9fc;
}
</style>