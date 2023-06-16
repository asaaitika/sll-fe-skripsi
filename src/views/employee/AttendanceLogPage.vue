<template>
	<b-row>
		<b-col md="12">
			<b-card>
				<div class="d-flex align-items-center justify-content-between flex-wrap">
					<h4 class="card-title">Attendance Log</h4>
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
										<b-col sm="3">
											<label
												for="input-8102"
												class="form-label mb-0"
											>Start Date</label>
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
								<b-col sm="6">
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
						<br />
						<div class="d-flex gap-2 flex-wrap justify-content-center">
							<b-button variant="primary">Search</b-button>
							<b-button variant="outline-primary">Reset</b-button>
						</div>
					</b-form>
				</b-card-body>
			</b-card>
		</b-col>
		<b-col
			lg="12"
			sm="12"
		>
			<b-card
				no-body
				style="
          height: 102px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0px 1px 1px #de1dde;
          color: #000000;
          margin-bottom: 20px;
        "
			>
				<b-row style="
            display: flex;
            align-items: center;
            flex-direction: row;
            height: 100%;
            padding-left: 31px;
            padding-right: 31px;
          ">
					<b-col md="2">
						<label>Office</label>
					</b-col>
					<b-col md="2">
						<label>Date :<br />04/04/2023</label>
					</b-col>
					<b-col md="2">
						<label>Check-in time :<br />08:57:23</label>
					</b-col>
					<b-col md="2">
						<label>Check-out time :<br />18:57:23</label>
					</b-col>
					<b-col
						md="4"
						style="text-align: right"
					>
						<a
							href="https://goo.gl/maps/dMUgoEp3kQSAvq5W8"
							target="_blank"
						>
							<img
								src="@/assets/images/icons/ic_tag_maps.svg"
								alt="User-Profile"
								class="theme-color-default-img rounded-pill img-fluid avatar-60"
								loading="lazy"
							/>
						</a>
					</b-col>
				</b-row>
			</b-card>
		</b-col>
		<b-col
			lg="12"
			sm="12"
		>
			<b-card
				no-body
				style="
          height: 102px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0px 1px 1px #de1dde;
          color: #000000;
          margin-bottom: 20px;
        "
			>
				<b-row style="
            display: flex;
            align-items: center;
            flex-direction: row;
            height: 100%;
            padding-left: 31px;
            padding-right: 31px;
          ">
					<b-col md="2">
						<label>Outside Office</label>
					</b-col>
					<b-col md="2">
						<label>Date :<br />05/04/2023</label>
					</b-col>
					<b-col md="2">
						<label>Check-in time :<br />08:57:23</label>
					</b-col>
					<b-col md="2">
						<label>Check-out time :<br />18:57:23</label>
					</b-col>
					<b-col
						md="4"
						style="text-align: right"
					>
						<a
							href="https://goo.gl/maps/dMUgoEp3kQSAvq5W8"
							target="_blank"
						>
							<img
								src="@/assets/images/icons/ic_tag_maps.svg"
								alt="User-Profile"
								class="theme-color-default-img rounded-pill img-fluid avatar-60"
								loading="lazy"
							/>
						</a>
					</b-col>
				</b-row>
			</b-card>
		</b-col>
		<b-col
			lg="12"
			sm="12"
		>
			<b-card
				no-body
				style="
          height: 102px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0px 1px 1px #de1dde;
          color: #000000;
          margin-bottom: 20px;
        "
			>
				<b-row style="
            display: flex;
            align-items: center;
            flex-direction: row;
            height: 100%;
            padding-left: 31px;
            padding-right: 31px;
          ">
					<b-col md="2">
						<label>Office</label>
					</b-col>
					<b-col md="2">
						<label>Date :<br />06/04/2023</label>
					</b-col>
					<b-col md="2">
						<label>Check-in time :<br />08:57:23</label>
					</b-col>
					<b-col md="2">
						<label>Check-out time :<br />18:57:23</label>
					</b-col>
					<b-col
						md="4"
						style="text-align: right"
					>
						<a
							href="https://goo.gl/maps/dMUgoEp3kQSAvq5W8"
							target="_blank"
						>
							<img
								src="@/assets/images/icons/ic_tag_maps.svg"
								alt="User-Profile"
								class="theme-color-default-img rounded-pill img-fluid avatar-60"
								loading="lazy"
							/>
						</a>
					</b-col>
				</b-row>
			</b-card>
		</b-col>
		<b-col
			lg="12"
			sm="12"
		>
			<b-card
				no-body
				style="
          height: 102px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0px 1px 1px #de1dde;
          color: #000000;
          margin-bottom: 20px;
        "
			>
				<b-row style="
            display: flex;
            align-items: center;
            flex-direction: row;
            height: 100%;
            padding-left: 31px;
            padding-right: 31px;
          ">
					<b-col md="2">
						<label>Outside Office</label>
					</b-col>
					<b-col md="2">
						<label>Date :<br />07/04/2023</label>
					</b-col>
					<b-col md="2">
						<label>Check-in time :<br />08:57:23</label>
					</b-col>
					<b-col md="2">
						<label>Check-out time :<br />18:57:23</label>
					</b-col>
					<b-col
						md="4"
						style="text-align: right"
					>
						<a
							href="https://goo.gl/maps/dMUgoEp3kQSAvq5W8"
							target="_blank"
						>
							<img
								src="@/assets/images/icons/ic_tag_maps.svg"
								alt="User-Profile"
								class="theme-color-default-img rounded-pill img-fluid avatar-60"
								loading="lazy"
							/>
						</a>
					</b-col>
				</b-row>
			</b-card>
		</b-col>
	</b-row>
</template>
