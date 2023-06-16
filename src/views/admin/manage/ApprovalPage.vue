<template>
	<b-row>
		<b-col md="12">
			<b-card>
				<div class="d-flex align-items-center justify-content-between flex-wrap">
					<h4 class="card-title">Approval</h4>
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
											>Keyword</label>
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
											>Request Date</label>
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
											<b-form-select
												:options="statusOptions"
												id="input-1803"
												class="form-select"
											></b-form-select>
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
				<b-card-header header-class="d-flex justify-content-between">
					<div class="header-title">
						<div class="d-flex align-items-center gap-3">
							<a
								href="#"
								class="text-center btn btn-primary d-flex gap-2"
								data-bs-toggle="modal"
								data-bs-target="#approve-selected-item"
							>
								Approve Selected Item
							</a>
							<a
								href="#"
								class="text-center btn btn-primary d-flex gap-2"
								data-bs-toggle="modal"
								data-bs-target="#reject-selected-item"
							>
								Reject Selected Item
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
									<th>
										<b-form-checkbox
											value="false"
											aria-checked="true"
											class="form-checkbox"
										></b-form-checkbox>
									</th>
									<th style="min-width: 100px">Action</th>
									<th>Time Off</th>
									<th>Status</th>
									<th>Requested By</th>
									<th>Requested Date</th>
									<th>Remark</th>
								</tr>
							</thead>
							<tbody>
								<table-widget3 :list="tableData" />
							</tbody>
						</table>
					</div>
				</b-card-body>
			</b-card>
		</b-col>
	</b-row>

</template>

<script>
import TableWidget3 from "@/components/widgets/users/TableWidget3.vue";

export default {
	components: {
		TableWidget3,
	},
	setup() {
		const tableData = [
			{
				i1: "Cuti Tahunan",
				i3: "New",
				i2: "Cilo Anabul Budiman",
				i4: "30/05/2023",
				i5: "-",
			},
			{
				i1: "Cuti Haid",
				i3: "New",
				i2: "Milo Anabul Budiman",
				i4: "30/05/2023",
				i5: "-",
			},
			{
				i1: "Sakit",
				i3: "New",
				i2: "Lilo Anabul Budiman",
				i4: "30/05/2023",
				i5: "-",
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