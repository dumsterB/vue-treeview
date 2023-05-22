<template>
  <div>
    <Treeview :title="title" :data="treeviews" />
  </div>
</template>
<script setup lang="ts">
import {computed} from 'vue'
import {useTreeviewStore} from "./store";
import Treeview from "./components/Treeview.vue";
import { TreeNode } from "./types/treeview";

const title = 'Treeview Title'

const store = useTreeviewStore();
const treeviews = computed<TreeNode[]>(() => store.treeviews);

</script>
