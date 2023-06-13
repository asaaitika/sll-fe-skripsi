<template>
  <b-row>
    <b-col md="12">
      <b-card>
        <div
          class="d-flex align-items-center justify-content-between flex-wrap"
        >
          <h4 class="card-title">Employee</h4>
        </div>
      </b-card>
    </b-col>
  </b-row>

  <b-row>
    <b-col lg="12" sm="12">
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
                      <label for="input-8101" class="form-label mb-0"
                        >Employee Name</label
                      >
                    </b-col>
                    <b-col sm="9">
                      <b-form-input
                        id="input-8101"
                        v-model="employeeName"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col sm="6">
                  <b-row class="align-items-center">
                    <b-col sm="3">
                      <label for="input-8102" class="form-label mb-0"
                        >Status</label
                      >
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
                      <label for="input-8103" class="form-label mb-0"
                        >Division</label
                      >
                    </b-col>
                    <b-col sm="9">
                      <b-form-input id="input-8103"></b-form-input>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col sm="6">
                  <b-row class="align-items-center">
                    <b-col sm="3">
                      <label for="input-8104" class="form-label mb-0"
                        >Role</label
                      >
                    </b-col>
                    <b-col sm="9">
                      <b-form-input id="input-8104"></b-form-input>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-form-group>
            <br />
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
              <b-button
                v-b-modal.modal-add
                class="text-center btn btn-primary d-flex gap-2"
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
                  ></path></svg
                >Add New</b-button
              >
              <!-- <a
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
                </a> -->
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
                    <icon-component type="outlined" icon-name="pencil-alt" />
                  </span>
                </a>

                <b-button
                  class="btn btn-sm btn-icon btn-danger mx-1"
                  @click="deleteConfirm"
                >
                  <span class="btn-inner">
                    <icon-component type="outlined" icon-name="trash" /> </span
                ></b-button>
                <a
                  class="btn btn-sm btn-icon btn-success mx-1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="View"
                  href="#"
                >
                  <span class="btn-inner">
                    <icon-component type="outlined" icon-name="eye" />
                  </span>
                </a>
              </div>
            </td>
          </template>
        </table-widget>
      </b-card>
    </b-col>
  </b-row>

  <!-- modal resources -->
  <b-modal
    id="modal-add"
    size="xl"
    title="Add Employee"
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
    ref="modal"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-tabs
        active-nav-item-class="text-primary bg-white"
        content-class="mt-3"
        fill
        small
      >
        <b-tab title="Basic Info" active>
          <b-form-group>
            <b-row class="align-items-center">
              <b-col sm="4">
                <label for="input-8101" class="form-label mb-0"
                  >Employee Name <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8101"
                  v-model="employeeNameForm"
                ></b-form-input>
              </b-col>
              <b-col sm="4">
                <label for="input-8102" class="form-label mb-0"
                  >Email <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8102" v-model="email"></b-form-input>
              </b-col>
              <b-col sm="4">
                <label for="input-8102" class="form-label mb-0"
                  >Phone Number <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8102" v-model="number"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="align-items-center">
              <b-col sm="4">
                <label for="input-8101" class="form-label mb-0"
                  >Sex <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8101" v-model="sex"></b-form-input>
              </b-col>
              <b-col sm="4">
                <label for="input-8102" class="form-label mb-0"
                  >City <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8102" v-model="city"></b-form-input>
              </b-col>
              <b-col sm="4">
                <label for="input-8102" class="form-label mb-0"
                  >Province <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8102" v-model="province"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="align-items-center">
              <b-col sm="4">
                <label for="input-8101" class="form-label mb-0"
                  >Address <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8101" v-model="address"></b-form-input>
              </b-col>
              <b-col sm="4">
                <label for="input-8102" class="form-label mb-0"
                  >Division <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8102" v-model="division"></b-form-input>
              </b-col>
              <b-col sm="4">
                <label for="input-8102" class="form-label mb-0"
                  >Role <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8102" v-model="role"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="align-items-center">
              <b-col sm="4">
                <label for="input-8101" class="form-label mb-0">ZIP</label>
                <b-form-input id="input-8101" v-model="password"></b-form-input>
              </b-col>
              <b-col sm="4">
                <label for="input-8102" class="form-label mb-0"
                  >Password <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8102"
                  v-model="confirmPassword"
                ></b-form-input>
              </b-col>
              <b-col sm="4">
                <label for="input-8102" class="form-label mb-0"
                  >Confirm Password <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8102" v-model="username"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="align-items-center">
              <b-col sm="4">
                <label for="input-8101" class="form-label mb-0"
                  >Username <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8101"
                  v-model="profilePicture"
                ></b-form-input>
              </b-col>
              <b-col sm="6">
                <b-row class="align-items-center">
                  <b-col sm="3">
                    <label for="input-8102" class="form-label mb-0"
                      >Profile Picture</label
                    >
                  </b-col>
                  <b-col sm="9">
                    <b-form-file
                      v-model="file2"
                      class="mt-3"
                      plain
                    ></b-form-file>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-form-group>
        </b-tab>
        <b-tab title="Finance Info">
          <b-form-group>
            <b-row class="align-items-center">
              <b-col sm="6">
                <label for="input-8101" class="form-label mb-0"
                  >Account name <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8101"
                  v-model="accountName"
                ></b-form-input>
              </b-col>
              <b-col sm="6">
                <label for="input-8102" class="form-label mb-0"
                  >Bank Name <span class="text-danger">*</span></label
                >
                <b-form-input id="input-8102" v-model="bankName"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="align-items-center">
              <b-col sm="6">
                <label for="input-8101" class="form-label mb-0"
                  >Account Number <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8101"
                  v-model="accountNumber"
                ></b-form-input>
              </b-col>
              <b-col sm="6">
                <label for="input-8102" class="form-label mb-0"
                  >Basic Salary <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8102"
                  v-model="basicSalary"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>
        </b-tab>
        <b-tab title="Employee Info">
          <b-form-group>
            <b-row class="align-items-center">
              <b-col sm="6">
                <label for="input-8101" class="form-label mb-0"
                  >Begin Contract <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8101"
                  v-model="beginContract"
                ></b-form-input>
              </b-col>
              <b-col sm="6">
                <label for="input-8102" class="form-label mb-0"
                  >End Contract <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8102"
                  v-model="endContract"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-form-checkbox
              id="checkbox-1"
              v-model="isPermanentEmployee"
              name="checkbox-1"
              value="yes"
              unchecked-value="no"
            >
              permanent employee
            </b-form-checkbox>
            <b-row class="align-items-center">
              <b-col sm="6">
                <label for="input-8101" class="form-label mb-0"
                  >Employee Status <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8101"
                  v-model="employeeStatus"
                ></b-form-input>
              </b-col>
              <b-col sm="6">
                <label for="input-8102" class="form-label mb-0"
                  >Employee ID <span class="text-danger">*</span></label
                >
                <b-form-input
                  id="input-8102"
                  v-model="employeeId"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>
        </b-tab>
      </b-tabs>
    </form>
    <template #modal-footer>
      <div class="w-100 d-flex flex-row-reverse">
        <b-button variant="primary" size="sm" class="float-right">
          Save
        </b-button>
        &nbsp;
        <b-button size="sm" class="float-right btn-white"> Previous </b-button>
      </div>
    </template></b-modal
  >
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

      // basic info
      employeeNameForm: "",
      email: "",
      number: "",
      sex: "",
      city: "",
      province: "",
      address: "",
      division: "",
      role: "",
      password: "",
      confirmPassword: "",
      username: "",
      profilePicture: "",

      // finance info
      accountName: "",
      bankName: "",
      accountNumber: "",
      basicSalary: "",

      // employee info
      beginContract: "",
      endContract: "",
      isPermanentEmployee: "yes",
      employeeStatus: "",
      employeeId: "",
    };
  },
  methods: {
    doSearch() {
      this.search = this.url;
      if (this.employeeName) {
        this.search += `user_id=${this.employeeName}`;
      }

      this.$refs.ref_list.getList(this.search);
    },
    deleteConfirm() {
      this.$bvModal
        .msgBoxConfirm(
          "Please confirm that you want to delete this employee.",
          {
            title: "Delete Confirm",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "YES",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          }
        )
        .then((value) => {
          // delete
          console.log(value);
        })
        .catch((err) => {
          // An error occurred
        });
    },
  },
  mounted() {
    this.$refs.ref_list.getList(this.url);
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
