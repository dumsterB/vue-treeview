<template>
  <div class="treeview-add">
    <button @click="openDialog">Add Treeview</button>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-5" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div class="bg-white px-4 pb-4 pt-5">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-base font-semibold leading-6 text-gray-900"
                      >Form</DialogTitle
                    >
                    <div class="mt-4">
                      <label class="block text-gray-700 text-sm font-bold mb-2">
                        Label
                      </label>
                      <input
                        class="shadow w-full appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="label"
                        type="text"
                        placeholder="title"
                      />
                    </div>
                    <div
                      class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                    >
                      <button
                        type="button"
                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        @click="addChildren"
                        ref="cancelButtonRef"
                      >
                        Add Children {{ children.length }}
                      </button>
                    </div>
                    <div v-for="(child, i) of children" :key="i">
                      <div class="mt-4">
                        <label
                          class="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Label
                        </label>
                        <input
                          class="shadow w-full appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          v-model="child.label"
                          type="text"
                          placeholder="title"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                >
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    @click="submit"
                    ref="cancelButtonRef"
                  >
                    Add
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { useTreeviewStore } from "../store";

const store = useTreeviewStore();
let label = ref("");
let open = ref(false);

function openDialog() {
  open.value = true;
  children.value = [];
  label.value = "";
}

let children = ref([]);
function addChildren() {
  children.value.push({
    label: "",
    selected: false,
    id: children.value.length + 1,
  });
}

async function submit() {
  await store.addTreeview({
    label: JSON.parse(JSON.stringify(label.value)),
    children: JSON.parse(JSON.stringify(children.value)),
  });
  open.value = false;
}
</script>

<style scoped>
.treeview-add {
  margin-top: 20px;
  background: #4285f4;
  padding: 5px;
  color: white;
  width: 150px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 20px;
}
</style>
