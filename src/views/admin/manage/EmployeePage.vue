<template>
	<b-row>
		<b-col md="12">
			<b-card>
				<div class="d-flex align-items-center justify-content-between flex-wrap">
					<h4 class="card-title">Employee</h4>
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
											>Status</label>
										</b-col>
										<b-col sm="9">
											<b-form-input id="input-8102"></b-form-input>
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
											>Division</label>
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
											>Role</label>
										</b-col>
										<b-col sm="9">
											<b-form-input id="input-8104"></b-form-input>
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
				<b-card-header header-class="d-flex justify-content-between">
					<div class="header-title">
						<div class="d-flex align-items-center gap-3">
							<a
								href="#"
								class="text-center btn btn-primary d-flex gap-2"
								data-bs-toggle="modal"
								data-bs-target="#add-new"
							>
								<svg
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"
									></path>
								</svg>
								Add New
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
									<th>NIK</th>
									<th>Full Name</th>
									<th>Division</th>
									<th>Role</th>
									<th>Email</th>
									<th>Telephone</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								<table-widget :list="tableData" />
							</tbody>
						</table>
					</div>
				</b-card-body>
			</b-card>
		</b-col>
	</b-row>

</template>

<script>
import TableWidget from "@/components/widgets/users/TableWidget.vue";

export default {
	components: {
		TableWidget,
	},
	setup() {
		const tableData = [
			{
				i1: "80123456",
				i2: "Cilo Anabul Budiman",
				i3: "Human Resource",
				i4: "Sr HR Officer",
				i5: "cilo@mail.com",
				i6: "089665438567",
				i7: "Active",
			},
			{
				i1: "80123477",
				i2: "Milo Anabul Budiman",
				i3: "Sales & Marketing",
				i4: "Recruitment Officer",
				i5: "milo@mail.com",
				i6: "081265438999",
				i7: "Active",
			},
			{
				i1: "80123488",
				i2: "Lilo Anabul Budiman",
				i3: "Development",
				i4: "System & Network Admin",
				i5: "lilo@mail.com",
				i6: "087765438123",
				i7: "Active",
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