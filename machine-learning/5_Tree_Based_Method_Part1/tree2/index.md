---
layout: post
title: Tree Based Method
---

## Split Attributes

* Attributes can be:
  * Nominal: order does not matter, such as female and male
  * Ordinal: order matters, such as freshman, sophomore, junior, senior
  * Continuous: numbers, continuous values, such as salary 80K
* Methods to split:
  * Multi-way: use as many partitions as values in nominal/binary cases
  * Binary: yes or no, such as home owner or not, female or not, salary more than 80k or not.
  
{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/tree2/split1.png" description="Nominal, Multi-way" %}

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/tree2/split2.png" description="Ordinal, Multi-way" %}

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/tree2/split3.png" description="Nominal, Binary" %}

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/tree2/split4.png" description="Ordinal, Binary" %}

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/tree2/split5.png" description="Continuous, Binary and Continuous, Multi-way" %}
  
## Split Attributes: Challenges

* What kind of attribute? Which method?
  * Nominal, Multi-way
  * Ordinal, Multi-way
  * Nominal, Binary
  * Ordinal, Binary
  * Continuous, Binary
  * Continuous, Multi-way

## How to determine the best split?
* Which one is the best split based on your opinion?
![](split6.png)












||[Index](../../../)||| [Prev](../)|||[Next](../tree3)|||
