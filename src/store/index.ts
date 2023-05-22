import { defineStore } from "pinia";
import { ref } from "vue";
import { TreeChild, TreeNode } from "../types/treeview";

interface TreeviewState {
  treeviews: TreeNode[];
}
export const useTreeviewStore = defineStore("treeview", {
  state: () => ({
    treeviews: ref([
      {
        label: "Node 1",
        id: 1,
        selected: false,
        isOpen: true,
        children: [
          {
            label: "Node 1.1",
            id: 2,
            treeview_id: 1,
            selected: false,
          },
          {
            label: "Node 1.2",
            id: 3,
            treeview_id: 1,
            selected: false,
          },
          {
            label: "Node 1.3",
            id: 4,
            treeview_id: 1,
            selected: false,
          },
        ],
      },
      {
        label: "Node 2",
        id: 4,
        selected: false,
        isOpen: false,
        children: [
          {
            label: "Node 2.1",
            id: 5,
            treeview_id: 4,
            selected: false,
          },
        ],
      },
    ]) as TreeNode[],
  }),
  getters: {},
  actions: {
    addTreeview(treeview) {
        const id = this.treeviews.length + 1;
        treeview.id = id;
        console.log(treeview);

        treeview.children.forEach((child) => {
          child.treeview_id = id;
        });

        this.treeviews.push(treeview);
    },
    selectedHandler(treeview: TreeNode) {
      this.updateSelectionState(treeview);
    },

    updateSelectionState(treeview: TreeNode) {
      // Обновление состояния выбора родительского элемента
      this.updateParentSelectionState(treeview);

      // Обновление состояния выбора дочерних элементов
      this.updateChildrenSelectionState(treeview);
    },

    updateParentSelectionState(treeview: TreeNode) {
      if (treeview.treeview_id) {
        const parentTreeview = this.treeviews.find(
          (t) => t.id === treeview.treeview_id
        );
        if (parentTreeview) {
          parentTreeview.selected = parentTreeview.children.every(
            (child) => child.selected
          );
          this.updateParentSelectionState(parentTreeview);
        }
      }
    },

    updateChildrenSelectionState(treeview: TreeNode) {
      if (treeview.children && treeview.children.length > 0) {
        treeview.children.forEach((child) => {
          child.selected = treeview.selected;
          this.updateChildrenSelectionState(child); // Рекурсивно обновляем состояние выбора дочерних элементов
        });
      }
    },
  },
});
