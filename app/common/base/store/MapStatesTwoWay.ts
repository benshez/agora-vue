import { mapState } from 'vuex';

export function MapStatesTwoWay(namespace: string, states: any, updateCb: Function) {
	const mappedStates = mapState(namespace, states);
	const res: any = {};
	for (const key in mappedStates) {
		res[key] = {
			set(value: any) {
				updateCb.call(this, { [key]: value });
			},
			get() {
				return mappedStates[key].call(this);
			}
		};
	}
	return res;
}
