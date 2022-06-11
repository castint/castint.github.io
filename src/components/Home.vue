<script setup lang="ts">

    import store from '@/stores/state';

</script>

<template>

    <p>Welcome</p>
    <button type="button" @click="store.increment">Update</button>
    <p>{{store.state.counter}}</p>

</template>
