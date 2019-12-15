import Vue from 'vue';
import Child from './Child';
import Header from './Header';

// Components that are registered globaly.
[
    Child,
    Header
].forEach(Component => {
    Vue.component(Component.name, Component)
})
