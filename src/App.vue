<template>
    <h1>'{{store.FullName }}' and rollNumber is{{store.rollNo }}</h1>

</template>
<script setup>
import {  ref } from 'vue';
import { useUserStore } from './store/user';
const store=useUserStore()
</script>               