### 算法训练营Week01 (2020/06/21 ~ 2020/06/28)
本周是算法训练营第11期开课第一周，主要学习最基本的几种数据结构。一维线性list结构，包括数组、链表、跳表、栈、队列，这几种数据结构在平时开发中使用较多，因为自身的特点不同，各自有其适用的场景。

数组是一个连续的存储空间，有下标，所以查找时间复杂度为O(1),但是增加和删除元素时要挪动后续的元素，平均时间复杂度为O(N),也就是说数组适合频繁查询的场景，不适合大量增删操作的场景。

链表每个节点中都有一个指向后续节点的指针next，增加、删除元素时只需将next指针指向需要指向的新元素即可，时间复杂度为O(1),但是链表的查询操作需要遍历整个链表，时间复杂度为O(N),这决定了链表适合于频繁增删元素的场景，而不太合适有大量查询操作的场景。

跳表是在有序链表的基础上，通过建立多级索引的方式来提高查询的效率。跳表的查询时间复杂度为O(logN)，Redis内部就是使用跳表来实现的。

Stack栈是一种后进先出Last In First Out(LIFO)的一维线性数据结构，增删的时间复杂度都为O(1), 查找的时间复杂度为O(N)

Queue队列先进先出Fisrt In First Out(FIFO), 在java中Queue是一个接口，有很多实现类，常用的有LinkedList，PriorityQueue等。

经过覃超老师的讲解，认识了到了之前自己在学习数据结构和算法这门课程中的所犯的误区，包括只看不练，做题只做一遍，羞于死记硬背高手的代码等等。正是因为陷入了这些误区，导致之前没有把这门课学好，感觉技术不够扎实，对写代码就没有信心。超哥介绍的学习方法的确有点反传统、不仅仅是针对数据结构和算法这门课有效，对于学习其他技术也同样适用，掌握了正确的学习方法，今后能更快速地学习各种技术。Let's do it in right way.

#### Implementation of Queue in Javascript
```
class Queue {
  construtor() {
    this.items = [];  //Array is used to implement a Queue 
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty())  
      return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) 
      return "No elements in Queue";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}
```

#### Implementation of Priority Queue in Javascript
```
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = []; // An array is used to implement priority 
  }

  enqueue(element, priority) {
    var qElement = new QElement(element, priority);
    var contain = false;

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push(qElement);
    }
  }

  dequeue() {
    if (this.isEmpty())
      return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) 
      return "No elements in Queue";
    return this.items[0];
  }

  rear() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i].element + " ";
    }
    return str;
  }
}
```