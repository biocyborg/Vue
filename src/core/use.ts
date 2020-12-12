import Vue from 'vue';

import request from '@/utils/request';
import {routes} from '@/router';

import '@/core/directives/router';
import '@/core/element.ts';

Vue.prototype.axios = request;
Vue.prototype.navigation = routes;
