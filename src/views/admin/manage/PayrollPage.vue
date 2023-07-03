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
							<b-button variant="outline-primary">Reset</b-button>
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
								Export to Excel
							</a>
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
				<table-widget
					id="payroll-list-table"
					url="/campaigns?user_id=1"
					:headers="tableHeader"
				>
					<template v-slot:action>
						<td>
							<div class="flex align-items-center list-user-action">
								<a
									class="btn btn-sm btn-icon btn-success mx-1"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									title="View"
									href="#"
								>
									<span class="btn-inner">
										<icon-component
											type="outlined"
											icon-name="eye"
										/>
									</span>
								</a>
							</div>
						</td>
					</template>
				</table-widget>
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
	setup() {},
	data() {
		return {
			tableHeader: [
				{
					key: "action",
					label: "Action",
				},
				{
					key: "name",
					label: "Name",
				},
				{
					key: "short_description",
					label: "Short Description",
				},
			],
		};
	},
};
</script>