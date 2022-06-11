import { reactive, readonly } from "vue";

const state = reactive({
    counter: 0
});

const increment = () => state.counter++;

export default {state: readonly(state), increment};
