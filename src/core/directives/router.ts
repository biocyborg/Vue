import Vue from 'vue';
import store from '@/store';

const action = Vue.directive('router', {
  inserted: function (el, binding, vnode) {
    const actionName = binding.arg;
    const roles = store.state;
    if (JSON.stringify(roles.data).indexOf(JSON.stringify(actionName)) === -1) {
      el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none');
    }
  }
});

export default action;
