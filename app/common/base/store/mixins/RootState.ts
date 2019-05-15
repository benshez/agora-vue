import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";
import { IRootState } from "@common/base/store/interfaces/IRootState";

@Component({
	computed: {
		...mapState({
			rootState: (state: IRootState) => {
				return state;
			}
		})
	}
})
export default class RootState extends Vue { }
