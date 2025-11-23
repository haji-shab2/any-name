<template>
    <h1>'{{store.FullName }}' and rollNumber is{{store.rollNo }}</h1>
<h2>Ali is a good boy</h2>
<h2>hi</h2>
</template>
<script setup>
import {  ref } from 'vue';
import { useUserStore } from './store/user';
const store=useUserStore()
</script>               