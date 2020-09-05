---
layout: post
title: Tree Based Method
---

## What is Decision Tree Methods?

* In order to make a prediction for a given observation, we typically use the mean or the mode of the training observations in the region to which it belongs. Since the set of splitting rules used to segment the predictor space can be summarized in a tree, these types of approaches are known as decision tree methods.

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/netflix.png" description="Netflix Challenge: 1 Million, gradient boosted decision trees. Figure Credit: <https://bits.blogs.nytimes.com/2009/09/21/netflix-awards-1-million-prize-and-starts-a-new-contest/>" %}

## Basics of Decision Trees
* Decision trees can be applied to both regression and classification problems.
* Are the trees below for regression or classification:

![](tree2.png)
![](tree3.png)

* Tree is used to separate data based on rules.

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/tree4.png" description="" %}

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/tree5.png" description="Rule example: years < 4.5; hits >117.5 and years >= 4.5" %}

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/tree6.png" description="Classification Model Building Workflow" %}

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part1/tree7.png" description="Examples based on: <https://www.datacamp.com/community/tutorials/decision-trees-R> and <http://jcsites.juniata.edu/faculty/Rhodes/ml/classification.htm>
" %}

* There are different algorithms to build a decision tree:
  * Hunt’s Algorithm
  * CART ID3
  * C4.5 SLIQ
  * SPRINT
* I know the procedure is hard to understand, so let’s have a look at an example.

## Decision Tree: An Example
* This example “magically” chooses a good one. We will come back to this “magic”.
![](tree9.png)

## <font color=red>Important</font> Things of Decision Trees
* How should training records be split?
  * Method for specifying test condition
   * depending on attribute types (split data based on features)
  * Measure for evaluating the goodness of a test condition (test if a feature should be used for splitting )
* How should the splitting procedure stop?
 * Stop splitting if all the records belong to the same class or have identical attribute values
 * Early termination (Or overfitting issues)
* Methods for Expressing Test Conditions
 * Attribute type:nominal, ordinal, continuous
 * Split: binary, multi-way
 
 
||[Index](../../../)||| [Prev](../)|||[Next](tree2)|||
