## Overview

### 数据结构

**1. 背包**  
 背包（Bag）是一种不支持从中删除元素的几何数据类型，作用是用于收集元素并迭代遍历所有收集的元素。迭代的顺序不确定且与结果无关。

```java
 //数据类型 API
public class Bag<Item> implements Iterable<Item>
          Bag()             //创建一个空背包
  void    add(Item item)    //添加一个元素
  boolean isEmpty()         //背包是否为空
  int     size()            //背包中的元素数量
```

**2. 队列**  
 队列（Queue）是一种先进先出的(FIFO)的集合类型。

```java
 //数据类型 API
public class Queue<Item> implements Iterable<Item>
          Queue()           //创建一个空队列
  void    enqueue(Item item)    //添加一个元素
  Item    dequeue()         //删除最早添加的元素，符合先进先出原则
  boolean isEmpty()         //队列是否为空
  int     size()            //背包中的元素数量
```

**3. 栈**  
 栈(Stack）是一种后进先出的集合类型。

```java
 //数据类型 API
public class Stack<Item> implements Iterable<Item>
          Stack()           //创建一个空栈
  void    push(Item item)   //添加一个元素
  Item    pop()             //删除最近添加的一个元素，符合后进先出原则
  boolean isEmpty()         //栈是否为空
  int     size()            //背包中的元素数量
```

**4. 链表**  
链表是一种递归的数据结构，他或者为空（null），或者是指向一个终点(node)的引用，该节点含有一个泛型的元素和一个指向另一条链表的引用。

```java
 //数据类型 API
public class Node
   {
     Item item;   //节点元素
     Node next;   //指向下一节点
   }
```

一个 Node 对象含有两个实例变量，item 参数类型与指向下一个 Node 对象的引用。

### 算法分析
