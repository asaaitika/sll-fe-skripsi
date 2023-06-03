<template>
	<b-row>
		<b-col md="12">
			<b-card>
				<div class="d-flex align-items-center justify-content-between flex-wrap">
					<h4 class="card-title">Payroll</h4>
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
						<h4 class="card-title">Filter</h4>
					</div>
				</b-card-header>
				<b-card-body>
					<b-form>
						<b-form-group>
							<b-row class="align-items-center">
								<b-col sm="6">
									<b-row class="align-items-center">
										<b-col sm="3">
											<label
												for="input-8101"
												class="form-label mb-0"
											>Employee Name</label>
										</b-col>
										<b-col sm="9">
											<b-form-input id="input-8101"></b-form-input>
										</b-col>
									</b-row>
								</b-col>
								<b-col sm="6">
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
							</b-row>
						</b-form-group>
						<b-form-group>
							<b-row class="align-items-center">
								<b-col sm="6">
									<b-row class="align-items-center">
										<b-col sm="3">
											<label
												for="input-8103"
												class="form-label mb-0"
											>Status</label>
										</b-col>
										<b-col sm="9">
											<b-form-input id="input-8103"></b-form-input>
										</b-col>
									</b-row>
								</b-col>
								<b-col sm="6">
									<b-row class="align-items-center">
										<b-col sm="3">
											<label
												for="input-8104"
												class="form-label mb-0"
											>Year</label>
										</b-col>
										<b-col sm="9">
											<b-form-input
												id="input-8104"
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
							<b-button class="btn-white">Reset</b-button>
						</div>
					</b-form>
				</b-card-body>
			</b-card>

			<b-card no-body>
				<b-card-header
					header-class="d-flex"
					style="flex-direction: row-reverse !important;"
				>
					<div class="header-title">
						<div class="d-flex align-items-justify gap-3">
							<a
								href="#"
								class="text-center btn btn-primary d-flex gap-2"
								data-bs-toggle="modal"
								data-bs-target="#generated"
							>
								Generated
							</a>
						</div>
					</div>
				</b-card-header>
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
									<th style="min-width: 100px">Action</th>
									<th>Employee</th>
									<th>Month</th>
									<th>Year</th>
									<th>Salary</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								<table-widget2 :list="tableData" />
							</tbody>
						</table>
					</div>
				</b-card-body>
			</b-card>
		</b-col>
	</b-row>

</template>

<script>
import TableWidget2 from "@/components/widgets/users/TableWidget2.vue";

export default {
	components: {
		TableWidget2,
	},
	setup() {
		const tableData = [
			{
				i1: "Cilo Anabul Budiman",
				i2: "05",
				i3: "2023",
				i4: "5.000.000",
				i5: "Generated",
			},
			{
				i1: "Milo Anabul Budiman",
				i2: "05",
				i3: "2023",
				i4: "5.000.000",
				i5: "Generated",
			},
			{
				i1: "Lilo Anabul Budiman",
				i2: "05",
				i3: "2023",
				i4: "5.000.000",
				i5: "Generated",
			},
		];
		return {
			tableData,
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