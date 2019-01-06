import Vue from 'vue';
import _ from 'lodash';
import { IRootState } from '@common/base/store/interfaces/IRootState';

export default function () {
  Vue.filter('translate', function (payload: { state: IRootState, key: any }) {
    if (!payload.state) return payload.key;

    return _.get(payload.state, payload.key);
  })
}