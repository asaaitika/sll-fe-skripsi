<template>
	<nav
		:class="`nav navbar navbar-expand-xl navbar-light iq-navbar ${headerNavbar}`"
		style="background: #ef4565 !important;"
	>
		<!-- <nav :class="`nav navbar navbar-expand-xl navbar-light iq-navbar ${headerNavbar} ${navbarHide.join('')}`"> -->
		<div class="container-fluid navbar-inner">
			<slot></slot>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon">
					<span class="mt-2 navbar-toggler-bar bar1"></span>
					<span class="navbar-toggler-bar bar2"></span>
					<span class="navbar-toggler-bar bar3"></span>
				</span>
			</button>
			<div
				class="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul class="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
					<li class="nav-item dropdown">
						<div class="nav-link py-0 d-flex align-items-center">
							<img
								src="@/assets/images/avatars/avtar_3.png"
								alt="User-Profile"
								class="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded"
							/>
							<div class="caption ms-3 d-none d-md-block">
								<h6
									class="mb-0 caption-title"
									style="color: white !important;"
								> {{ employee_name }} </h6>
								<p
									class="mb-0 caption-sub-title"
									style="color: #f8abba !important"
								>Employee</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import router from "@/router";

export default {
	components: {},
	data() {
		return {
			employee_name: "",
		};
	},
	props: {
		isGoPro: {
			type: Boolean,
			default: false,
		},
		isSearch: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, { emit }) {
		const store = useStore();
		const headerNavbar = computed(() => store.getters["setting/header_navbar"]);
		const isHidden = ref(false);

		const onscroll = () => {
			const yOffset = document.documentElement.scrollTop;
			const navbar = document.querySelector(".navs-sticky");
			if (navbar !== null) {
				if (yOffset >= 100) {
					navbar.classList.add("menu-sticky");
				} else {
					navbar.classList.remove("menu-sticky");
				}
			}
		};

		const carts = computed(() => store.getters.carts);

		onMounted(() => {
			window.addEventListener("scroll", onscroll());
		});

		onUnmounted(() => {
			window.removeEventListener("scroll", onscroll());
		});
		return {
			headerNavbar,
			isHidden,
			carts,
			emit,
		};
	},
	mounted() {
		this.employee_name = localStorage.employee
			? JSON.parse(localStorage.employee).employee_name
			: router.replace({ name: "login.employee" });
	},
};
</script>