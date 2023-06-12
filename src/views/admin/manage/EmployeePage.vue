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
											<b-form-input id="input-8101" v-model="employeeName"></b-form-input>
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
							<b-button variant="primary" @click="doSearch">Search</b-button>
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

<!--        :url="url"-->
        <table-widget
          id="user-list-table"
          :headers="tableHeader"
          ref="ref_list"
        >
          <template v-slot:action>
            <td>
              <div class="flex align-items-center list-user-action">
                <a
                  class="btn btn-sm btn-icon btn-warning mx-1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="Edit"
                  href="#"
                >
                  <span class="btn-inner">
                    <icon-component
                      type="outlined"
                      icon-name="pencil-alt"
                    />
                  </span>
                </a>
                <a
                  class="btn btn-sm btn-icon btn-danger mx-1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="Delete"
                  href="#"
                >
                  <span class="btn-inner">
                    <icon-component
                      type="outlined"
                      icon-name="trash"
                    />
                  </span>
                </a>
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
  data() {
    return {
      url: "/campaigns?",
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
      search: "",
      employeeName: "",
    }
  },
  methods: {
    doSearch() {
      this.search = this.url;
      if (this.employeeName) {
        this.search += `user_id=${this.employeeName}`;
      }

      this.$refs.ref_list.getList(this.search);
    },
  },
  mounted() {
    this.$refs.ref_list.getList(this.url);
  }
};
</script>

<style scoped>
.btn-white {
	background-color: white;
	border-color: #3da9fc;
	color: #3da9fc;
}
</style>
