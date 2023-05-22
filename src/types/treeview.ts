interface TreeNode {
  label: string;
  id: string | number;
  children?: TreeChild[];
  selected?: boolean;
  isOpen?: boolean;
}

interface TreeChild extends TreeNode {
  treeview_id: number;
}

export { TreeNode, TreeChild };
