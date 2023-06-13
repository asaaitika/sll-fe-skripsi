<template>
  <b-row>
    <b-col md="12">
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">My PaySlip</h4>
          </div>
        </b-card-header>
        <b-card-body class="mt-2">
          <b-row class="justify-content-between">
            <b-col md="6">
              <b-card no-body class="p-3 bg-soft-primary">
                <h7
                  class="justify-content-between"
                  style="color: red !important"
                  >Confidential *</h7
                >
                <hr class="my-1" />
                <div class="" style="display: flex; justify-content: flex-end">
                  <div class="twit-feed">
                    <div class="d-flex align-items-center gap-4 mt-2">
                      <div class="media-support-info">
                        <h6 class="mb-0">Cilo Anabul Budiman</h6>
                        <p class="mb-0">Employee</p>
                      </div>
                      <img
                        src="@/assets/images/avatars/avtar_3.png"
                        alt="User-Profile"
                        class="theme-color-default-img rounded-pill img-fluid avatar-60"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </b-card>
            </b-col>
            <b-col
              md="6"
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              "
            >
              <b-row
                class="align-items-center"
                style="margin-bottom: 2rem !important"
              >
                <b-col sm="3">
                  <label
                    for="input-8101"
                    class="form-label mb-0"
                    style="font-weight: bold !important; color: black"
                    >Period</label
                  >
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="input-8101"
                    type="date"
                    placeholder="2019-12-18"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>

  <b-row>
    <b-col lg="12" sm="12">
      <b-card no-body>
        <b-row class="justify-content-between mt-4">
          <b-col md="6">
            <b-row>
              <b-col md="11">
                <b-card-header
                  class="d-flex justify-content-center bg-soft-primary pb-4"
                >
                  <div class="header-title">
                    <h5 class="card-title">Earnings</h5>
                  </div>
                </b-card-header>
                <b-card-body>
                  <div
                    class="d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div>
                      <p>Basic Salary :</p>
                    </div>
                    <div>
                      <p>Rp. 5.000.000</p>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div>
                      <p>Tunjangan Makan WFH :</p>
                    </div>
                    <div>
                      <p>Rp. 825.000</p>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div>
                      <p>Tunjangan Kuota WFH :</p>
                    </div>
                    <div>
                      <p>Rp. 150.000</p>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div>
                      <p>Tunjangan Kehadiran :</p>
                    </div>
                    <div>
                      <p>Rp. 840.000</p>
                    </div>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6">
            <b-row>
              <b-col md="11">
                <b-card-header
                  class="d-flex justify-content-center bg-soft-primary pb-4"
                >
                  <div class="header-title">
                    <h5 class="card-title">Deduction</h5>
                  </div>
                </b-card-header>
                <b-card-body>
                  <div
                    class="d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div>
                      <p>BPJS Kesehatan :</p>
                    </div>
                    <div>
                      <p>Rp. 66.000</p>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div>
                      <p>JHT Employee :</p>
                    </div>
                    <div>
                      <p>Rp. 132.000</p>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div>
                      <p>PPH 21 :</p>
                    </div>
                    <div>
                      <p>Rp. 150.329</p>
                    </div>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12" style="text-align: center;">
            <label
              for="input-8101"
              class="form-label mb-0"
              style="font-weight: bold !important; color: black"
              >Take Home Pay</label
            >
          </b-col>
		  <b-col md="12" style="text-align: center; margin-bottom: 30px;">
            <label
              for="input-8101"
              class="form-label mb-0"
              style="font-weight: bold !important; color: black"
              >Rp 6.467.000</label
            >
          </b-col>

		  <b-col md="12" style="text-align: center; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; cursor: pointer;">
            <span style="display: flex; width: 443px; height: 72px; border-radius: 10px; background-color: #3DA9FC;
			align-items: center; justify-content: center; color: white; font-size: 24px;" >
				Download Payslip
			</span>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>
