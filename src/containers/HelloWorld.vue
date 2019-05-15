<template>
<div class="hello">
	<button @click="loadStaffList">Load Staff List</button>
	<h1>Staff List</h1>
	<ul>
		<li v-for="staff in staffList" 
			:key="staff.userid">
			{{staff.username}}
		</li>
	</ul>
</div>
</template>

<script>
import http from '../api/http';
import { mapState, mapMutations, mapActions } from 'vuex'
import types from '../store/constants'

let urlMap = {
	loadStaffs: window.__apiPre__ + 'api/loadStaffs'
}

export default {
	name: 'HelloWorld',
	data () {
		return {
		}
	},
	created() {
		this.loadStaffList()
	},
	computed: {
		...mapState({
			'staffList': state => state.staffs.staffList
		})
	},
	methods: {
		...mapMutations({
			addStaff: types.ADD_STAFF
		}),
		...mapActions([
			'fetchAction'
		]),
		loadStaffList() {
			this.fetchAction({
				fetchType: types.LOAD_STAFFS,
				url: urlMap.loadStaffs,
				params: {
					a: 1
				}
			}).then(res => {
				console.log(res)
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
