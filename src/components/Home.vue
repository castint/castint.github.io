<script setup lang="ts">

    import { reactive } from 'vue';

    const model = reactive({
        val: 0
    });

    function changeValue()
    {
        model.val++;
    }

</script>

<template>

    <p>Welcome</p>
    <button type="button" @click="changeValue">Update</button>
    <p>{{model.val}}</p>

</template>
