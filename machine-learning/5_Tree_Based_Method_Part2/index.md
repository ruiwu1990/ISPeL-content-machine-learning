---
layout: post
title: Tree Based Method
---

## Ensembling

* We have learned how to build a decision tree. Now, let’s learn how to build a forest: Ensemble method
* Ensemble methods combine several decision trees classifiers to produce better predictive performance than a single decision tree classifier. The main principle (assumption) behind the ensemble model is that a group of weak learners come together to form a strong learner, thus increasing the accuracy of the model.
* Two popular methods: Bagging and Boosting

* Based on: <https://analyticsindiamag.com/primer-ensemble-learning-bagging-boosting/>

## Bootstrap Sample

* But wait a second, we need to learn what is “bootstrap sample” first.
* The <font color=red>bootstrap</font> is a fundamental resampling tool in statistics. The basic idea underlying the bootstrap is what we can estimate the true F by the so-called <font color=red>emperical distribution</font> $$\hat{F}$$

* Given the training data $$(x_i,y_i)$$, i=1,...n, the empirical distribution function $$\hat{F}$$ is simply

$$P_{\hat{F}}((X,Y)=(x,y)) =(\frac{1}{n} if (x,y) = (x_i, y_i) for some i$$
$$0 otherwise$$ 

* This is just a discrete probability distribution, putting equal weight (1/n) on each of the observed training points

* Replacement: a same data point can be selected multiple times
* A <font color=red>bootstrap sample</font> of size m from the training data is

$$(x_i^*,y_i^*), i=1,...m$$

* where each $$(x_i^*,y_i^*)$$ are drawn from uniformly at random from $$(x_1,y_1),...(x_n,y_n)$$, <font color=red>with replacement</font>

* This corresponds exactly to m independent draws from $$\hat{F}$$. Hence it approximates what we would see if we could sample more data from the true $$F$$. We often consider $$m=n$$, which is like sampling an entirely new training set.

Based on: <https://www.stat.cmu.edu/~ryantibs/datamining/lectures/24-bag.pdf>

## Bagging

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part2/bagging.png" description="<a name='figure1'>Figure 1</a> Diagram to show the basic funtionality of bagging and its goal. Figure Credit: <https://analyticsindiamag.com/primer-ensemble-learning-bagging-boosting/>" %}

* Bagging is used when the goal is to <font color=red>reduce the variance</font> of a decision tree classifier. Here the objective is to create several subsets of data from training sample chosen randomly with replacement. Each collection of subset data is used to train their decision trees. [Figure 1](#figure1)
* <font color=red>White Board demo steps</font> 

* The number of samples in each bag is be less than training dateset and a common ratio is 60%.
* Possible methods to combine results:
  * Classification: majority vote
  * Regression: mean value

* Note: bagging a good classifier can improve predictive accuracy, but bagging a bad one can seriously degrade predictive accuracy
* Advantages:
  * Reduces over-fitting of the model.
  * Handles higher dimensionality data very well.
* Disadvantages:
  * Loss of interpretability: final model is a combination of multiple models
  * Computational complexity: multiply the work of classification/regression

* Based on: <https://analyticsindiamag.com/primer-ensemble-learning-bagging-boosting/> and <https://www.youtube.com/watch?v=2Mg8QD0F1dQ>

## Sample Code: Regression Tree

* RandomForestClassifier
* Plt.errorbar: this function can be used to show confidence or precision in a set of measurements or calculated values.

## Group Activity 9
* Train a random forest classifier
* Find out which features are more important

||[Index](../../../)||| [Prev](../)|||[Next](part2-2)|||
