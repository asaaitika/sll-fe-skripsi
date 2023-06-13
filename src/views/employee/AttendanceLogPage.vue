<template>
  <h1 class="pb-4">Attendance Log</h1>

  <b-col md="12 pb-4">
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
              <b-col sm="6">
                <b-row class="align-items-center">
                  <b-col sm="6">
                    <label for="input-8101" class="form-label mb-0"
                      >Start date</label
                    >
                  </b-col>
                  <b-col sm="6">
                    <b-form-input
                      id="input-8102"
                      type="date"
                      placeholder="2019-12-18"
                    ></b-form-input>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="6">
                <b-row class="align-items-center">
                  <b-col sm="6">
                    <label for="input-8102" class="form-label mb-0">Year</label>
                  </b-col>
                  <b-col sm="6">
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
          <br />
          <div class="d-flex gap-2 flex-wrap justify-content-center">
            <b-button variant="primary">Search</b-button>
            <b-button variant="outline-primary">Reset</b-button>
          </div>
        </b-form>
      </b-card-body>
    </b-card>

    <b-card no-body>
      <b-card-body class="pb-2">
        <b-form>
          <b-form-group>
            <b-row class="align-items-center">
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <label for="input-8101" class="form-label mb-0"
                      >Office</label
                    >
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Date:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >04/04/2023</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Check-in time:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >08:57:23</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Check-out time:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >08:57:23</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="4">
                <b-row class="align-items-center">
                  <b-col sm="12" class="d-flex justify-content-end">
                    <a
                      href="https://goo.gl/maps/dMUgoEp3kQSAvq5W8"
                      target="_blank"
                    >
                      <icon-component type="outlined" icon-name="location" />
                    </a>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-form-group>
        </b-form>
      </b-card-body>
    </b-card>
    <b-card no-body>
      <b-card-body class="pb-2">
        <b-form>
          <b-form-group>
            <b-row class="align-items-center">
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <label for="input-8101" class="form-label mb-0"
                      >Outside Office</label
                    >
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Date:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >04/04/2023</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Check-in time:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >08:57:23</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Check-out time:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >08:57:23</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="4">
                <b-row class="align-items-center">
                  <b-col sm="12" class="d-flex justify-content-end">
                    <a
                      href="https://goo.gl/maps/dMUgoEp3kQSAvq5W8"
                      target="_blank"
                    >
                      <icon-component type="outlined" icon-name="location" />
                    </a>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-form-group>
        </b-form>
      </b-card-body>
    </b-card>
    <b-card no-body>
      <b-card-body class="pb-2">
        <b-form>
          <b-form-group>
            <b-row class="align-items-center">
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <label for="input-8101" class="form-label mb-0"
                      >Office</label
                    >
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Date:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >04/04/2023</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Check-in time:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >08:57:23</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Check-out time:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >08:57:23</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="4">
                <b-row class="align-items-center">
                  <b-col sm="12" class="d-flex justify-content-end">
                    <a
                      href="https://goo.gl/maps/dMUgoEp3kQSAvq5W8"
                      target="_blank"
                    >
                      <icon-component type="outlined" icon-name="location" />
                    </a>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-form-group>
        </b-form>
      </b-card-body>
    </b-card>
    <b-card no-body>
      <b-card-body class="pb-2">
        <b-form>
          <b-form-group>
            <b-row class="align-items-center">
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <label for="input-8101" class="form-label mb-0"
                      >Outside Office</label
                    >
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Date:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >04/04/2023</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Check-in time:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >08:57:23</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="2">
                <b-row class="align-items-center">
                  <b-col sm="12">
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >Check-out time:</label
                      >
                    </div>
                    <div>
                      <label for="input-8102" class="form-label mb-0"
                        >08:57:23</label
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col sm="4">
                <b-row class="align-items-center">
                  <b-col sm="12" class="d-flex justify-content-end">
                    <a
                      href="https://goo.gl/maps/dMUgoEp3kQSAvq5W8"
                      target="_blank"
                    >
                      <icon-component type="outlined" icon-name="location" />
                    </a>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-form-group>
        </b-form>
      </b-card-body>
    </b-card>
  </b-col>
</template>