### 算法训练营Week02 (2020/06/29 ~ 2020/07/05)

学习的数据结构：哈希表、映射、集合，树，二叉树、二叉搜索树、堆、二叉堆，图。

#### 哈希表
哈希表也叫散列表，采用了函数映射的思想，将记录的存储位置与记录的关键字关联起来。这样的设计方式，能够快速定位到想要查找的记录，而且不需要与表中存在的记录的关键字比较后再来进行查找。哈希函数存在哈希冲突问题，需要在设计哈希函数时进行规避。哈希冲突只能尽可能减少，不能完全避免。这是因为，输入数据的关键字是个开放集合。只要输入的数据量够多、分布够广，就完全有可能发生冲突的情况。因此，哈希表需要设计合理的哈希函数，并且对冲突有一套处理机制。

哈希表相对于其他数据结构有很多的优势。它可以提供非常快速的插入-删除-查找操作，无论多少数据，插入和删除值需要接近常量的时间。在查找方面，哈希表的速度比树还要快，基本可以瞬间查找到想要的元素。

哈希表也有一些不足。哈希表中的数据是没有顺序概念的，所以不能以一种固定的方式（比如从小到大）来遍历其中的元素。在数据处理顺序敏感的问题时，选择哈希表并不是个好的处理方法。同时，哈希表中的 key 是不允许重复的，在重复性非常高的数据中，哈希表也不是个好的选择。

### 树和二叉树
树是由结点和边组成的，不存在环的一种数据结构。树满足递归定义的特性。也就是说，如果一个数据结构是树结构，那么剔除掉根结点后，得到的若干个子结构也是树，通常称为子树。

树中被高频使用的二叉树每个结点最多有两个分支，即每个结点最多有两个子结点，分别称作左子结点和右子结点。

满二叉树：除了叶子结点外，所有结点都有两个子子结点。

完全二叉树：除了最后一层以外，其它层的结点个数都达到最大，并且最后一层的叶子结点都靠左排列。

遍历一棵树，有三种经典方法，分别是前序遍历、中序遍历、后续遍历，都是通过递归调用完成的。
前序：根左右
中序：左根右
后序：左右根

代码模板：
```
// 前序遍历
// Java
public static void preOrderTraverse(Node node) {
  if (node == null) return;
  System.out.print(node.data + " ");
  preOrderTraverse(node.left);
  preOrderTraverse(node.right);
}
// JavaScript
var preOrderTraverse = function(root) {
  if (root) {
    return [root.val, ...preOrderTraverse(root.left), ...preOrderTraverse(..root.right)]
  } else {
    return []
  }
}

// 中序遍历
// Java
public static void inOrderTraverse(Node node) {
  if (node == null) return;
  inOrderTraverse(node.left);
  System.out.print(node.data + " ");
  inOrderTraverse(node.right);
}
// JavaScript
var inOrderTraverse = function(root) {
  if (root) {
    return [...inOrderTraverse(root.left), root.val, ...inOrderTraverse(...root.right)]
  } else {
    return []
  }
}

// 后序遍历
// Java
Public static void postOrderTraverse(Node node) {
  if (node == null) return;
  postOrderTraverse(node.left);
  postOrderTraverse(node.right);
  System.out.print(node.data + " ");
}
// JavaScript
var postOrderTraverse = function(root) {
  if (root) {
    return [...postOrderTraverse(root.left), ...postOrderTraverse(root.right), root.val]
  } else {
    return []
  }
}
```
二叉树遍历过程中，每个结点都被访问了一次，其时间复杂度是 O(n)。

### 堆
堆是一种特殊的树。满足以下两点要求的树就是一个堆。
- 堆是一个完全二叉树。
- 堆中每一个结点的值都必须大于等于（或小于等于）其子树中每个结点的值。

堆分为小顶堆和大顶堆。
堆中比较重要的两个操作是插入一个元素和删除堆顶元素。这两个操作都要用到堆化（heapify）。插入一个数据的时候，我们把新插入的数据放到数组的最后，然后从下往上堆化；删除堆顶数据的时候，我们把数组中的最后一个元素放到堆顶，然后从上往下堆化。这两个操作的时间复杂度都是O(logN)。
