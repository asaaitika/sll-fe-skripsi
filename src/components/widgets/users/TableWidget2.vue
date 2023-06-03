<template>
	<tr
		v-for="(item, index) in list"
		:key="index"
	>
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
		<td>{{ item.i1 }}</td>
		<td>{{ item.i2 }}</td>
		<td>{{ item.i3 }}</td>
		<td>{{ item.i4 }}</td>
		<td>{{ item.i5 }}</td>
	</tr>
</template>
<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => [],
		},
		i1: { type: String, default: "" },
		i2: { type: String, default: "" },
		i3: { type: String, default: "" },
		i4: { type: String, default: "" },
		i5: { type: String, default: "" },
	},
};
</script>
