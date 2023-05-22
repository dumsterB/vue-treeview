<template>
  <div class="treeview p-5">
    <p class="treeview-title" v-if="title">{{ title }}</p>

    <div class="treeview-list mt-5" v-for="(treeview, index) of props.data">
      <div class="treeview-item">
        <span>{{ index + 1 }})</span>
        <input
          type="checkbox"
          class="form-checkbox ml-2"
          v-model="treeview.selected"
          @change="selectedHandler(treeview)"
        />
        <label>{{ treeview.label }}</label>
        <button class="treeview-toggle ml-2" @click="visibleHandler(treeview)">
          [ {{ selectedFormatter(treeview.isOpen) }} ]
        </button>
      </div>

      <div v-if="treeview.isOpen" class="treeview-items">
        <div
          class="treeview-item"
          v-for="(child, item_index) of treeview.children"
        >
          <div class="treeview-item">
            <span>{{ item_index + 1 }}.</span>
            <input
              type="checkbox"
              class="form-checkbox ml-2"
              v-model="child.selected"
              @change="selectedHandler(child)"
            />
            <label>{{ child.label }}</label>
          </div>
        </div>
      </div>
    </div>
    <AddTreeview></AddTreeview>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { TreeNode } from "../types/treeview";
import { useTreeviewStore } from "../store";
import AddTreeview from "./AddTreeview.vue";

const props = defineProps({
  data: {
    type: Array as () => TreeNode[],
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
});

function selectedFormatter(value: Boolean) {
  return value ? "-" : "+";
}
function visibleHandler(treeview: TreeNode) {
  treeview.isOpen = !treeview.isOpen;
}

const store = useTreeviewStore();

function selectedHandler(treeview: TreeNode) {
  store.selectedHandler(treeview);
}
</script>

<style scoped>
.treeview {
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 40px;
}

.treeview-title {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.treeview-item {
  margin-left: 20px;
  margin-top: 5px;
  display: flex;
  align-items: center;
}

.treeview-item label {
  margin-left: 5px;
  color: #555;
}

.treeview-item input[type="checkbox"] {
  margin-right: 5px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #999;
  border-radius: 3px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
}

.treeview-item input[type="checkbox"]:checked {
  border-color: #4285f4;
  background-color: #4285f4;
}

.treeview-item input[type="checkbox"]:checked::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  color: #fff;
  text-align: center;
  line-height: 14px;
  font-size: 12px;
}

.treeview-toggle {
  background: none;
  border: none;
  color: #4285f4;
  cursor: pointer;
}

.treeview-toggle:focus {
  outline: none;
}
</style>
