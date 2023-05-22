# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

Vue Treeview
Vue Treeview is a customizable treeview component built with Vue.js. It allows you to display hierarchical data in a tree structure with collapsible nodes and checkboxes for selection. This component is useful for creating file explorers, category trees, or any other data representation that requires a hierarchical view.

Installation
To use Vue Treeview in your Vue.js project, you can install it via npm or yarn:

bash
Copy code
npm install vue-treeview

# or

yarn add vue-treeview
Usage
Import the Vue Treeview component and use it in your Vue component:

vue
Copy code
<template>

  <div>
    <TreeView :data="treeData" :title="treeTitle" />
  </div>
</template>

<script>
import TreeView from "vue-treeview";

export default {
  components: {
    TreeView,
  },
  data() {
    return {
      treeData: [
        {
          label: "Node 1",
          selected: false,
          isOpen: false,
          children: [
            {
              label: "Node 1.1",
              selected: false,
            },
            {
              label: "Node 1.2",
              selected: false,
            },
          ],
        },
        {
          label: "Node 2",
          selected: false,
        },
      ],
      treeTitle: "Treeview Example",
    };
  },
};
</script>

In the example above, we import the TreeView component from the vue-treeview package and use it in our Vue component. We pass the hierarchical tree data as the data prop and optionally provide a title prop for the treeview title.

API
Props
data (required): An array of objects representing the tree nodes. Each object should have a label property for the node label and a children property (optional) for nested nodes. The selected property can be used to track the selection state of each node.
title (optional): A string representing the title of the treeview.
Customization
You can customize the appearance of the treeview by modifying the provided CSS styles or overriding them with your own styles. The component uses scoped CSS, so the styles will only affect the treeview component.

Vue Treeview
Vue Treeview is a customizable treeview component built with Vue.js. It allows you to display hierarchical data in a tree structure with collapsible nodes and checkboxes for selection. This component is useful for creating file explorers, category trees, or any other data representation that requires a hierarchical view.

Installation
To use Vue Treeview in your Vue.js project, you can install it via npm or yarn:

bash
Copy code
npm install vue-treeview

# or

yarn add vue-treeview
Usage
Import the Vue Treeview component and use it in your Vue component:

vue
Copy code
<template>

  <div>
    <TreeView :data="treeData" :title="treeTitle" />
  </div>
</template>

<script>
import TreeView from "vue-treeview";

export default {
  components: {
    TreeView,
  },
  data() {
    return {
      treeData: [
        {
          label: "Node 1",
          selected: false,
          isOpen: false,
          children: [
            {
              label: "Node 1.1",
              selected: false,
            },
            {
              label: "Node 1.2",
              selected: false,
            },
          ],
        },
        {
          label: "Node 2",
          selected: false,
        },
      ],
      treeTitle: "Treeview Example",
    };
  },
};
</script>

In the example above, we import the TreeView component from the vue-treeview package and use it in our Vue component. We pass the hierarchical tree data as the data prop and optionally provide a title prop for the treeview title.

API
Props
data (required): An array of objects representing the tree nodes. Each object should have a label property for the node label and a children property (optional) for nested nodes. The selected property can be used to track the selection state of each node.
title (optional): A string representing the title of the treeview.
Customization
You can customize the appearance of the treeview by modifying the provided CSS styles or overriding them with your own styles. The component uses scoped CSS, so the styles will only affect the treeview component.

AddTreeview Component
The AddTreeview component is a dialog-based form that allows you to add new nodes to the treeview. It provides an input field to enter the label of the new node and a button to add children to the node. The AddTreeview component is used internally in the TreeView component to add new nodes.

Usage
To use the AddTreeview component, you can import it and include it in your Vue component:

vue
Copy code
<template>

  <div>
    <AddTreeview />
  </div>
</template>

<script>
import AddTreeview from "vue-treeview/AddTreeview";

export default {
  components: {
    AddTreeview,
  },
};
</script>

Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvement, please create an issue on the GitHub repository.

License
This project is licensed under the MIT License.sed under the MIT License.
