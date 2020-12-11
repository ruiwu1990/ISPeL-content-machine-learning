---
layout: post
title: Tree Based Method
---

## Boosting: Ada Boost

* Boosting is used to create a collection of predictors. In this technique, learners are learned sequentially with early learners fitting simple models to the data and then analyzing data for errors. Consecutive trees (<font color=red>random sample</font>) are fit and at every step, the goal is to improve the accuracy from the prior tree. [Figure 1](#figure1)
* <font color=red>White Board demo steps</font>
* Each training data point can have different weights. Weights are based on model errors.
* Possible methods to combine results:
  * Classification: majority vote
  * Regression: mean value

* Based on: <https://analyticsindiamag.com/primer-ensemble-learning-bagging-boosting/> and <https://www.youtube.com/watch?v=GM3CDQfQ4sw>

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part2/part2-2/boosting.png" description="<a name='figure1'>Figure 1</a> Diagram to show the basic funtionality of boosting and its goal.Figure Credit: <https://analyticsindiamag.com/primer-ensemble-learning-bagging-boosting/>" %}

* Advantages:
  * Supports different loss function

* Disadvantages:
  * Prone to over-fitting
  * Loss of interpretability: final model is a combination of multiple models
  * Computational complexity: multiply the work of classification/regression

* Training loss. This is the function that is optimized on the training data. For example, in a neural network binary classifier, this is usually the binary cross <font color=red>entropy</font>. For the random forest classifier, this is the <font color=red>Gini</font> impurity. The training loss is often called the “objective function” as well.
* Validation loss. This is the function that we use to evaluate the performance of our trained model on <font color=red>unseen</font> data. This is often not the same as the training loss. For example, in the case of a classifier, this is often the area under the curve of the receiver operating characteristic (<font color=red>ROC</font>) — though this is never directly optimized, because it is not differentiable. This is often called the “performance or evaluation metric”.



* Based on: <https://analyticsindiamag.com/primer-ensemble-learning-bagging-boosting/> and <https://www.youtube.com/watch?v=2Mg8QD0F1dQ>

## Boosting: gradient descent

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part2/part2-2/boosting2.png" description="<a name='figure2'>Figure 2</a> When the function is convex, all local minima are also global minima, so in this case gradient descent can converge to the global solution. Figure Credit: <https://ml-cheatsheet.readthedocs.io/en/latest/gradient_descent.html>" %}

* scikit has a model called GBR <https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html>
* Gradient descent is a first-order iterative optimization algorithm for finding the minimum of a function (wiki). [Figure 2](#figure2)
* You can convert a maximum problem into a minimum one:
  * Find max(y) => find min(-y)


## Ensemble

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part2/part2-2/boosting3.png" description="<a name='figure3'>Figure 3</a> displays the advantages of both Bagging and Boosting. Figure Credit: <https://medium.com/mlreview/gradient-boosting-from-scratch-1e317ae4587d>" %}

{% include marginfigure.html id="Tree Based Method" url="machine-learning/5_Tree_Based_Method_Part2/part2-2/ensemble.png" description="<a name='figure4'>Figure 4</a> Bagging (independent models) & Boosting (sequential models) Figure Credit: <https://medium.com/mlreview/gradient-boosting-from-scratch-1e317ae4587d>" %}

* Two things in general:
  * Ensemble learning method is <font color=red>not only for trees</font>. You can ensemble different types of models, such as SVM and neural network.
  * You can add a group of models each time instead of a single model. This is called <font color=red>shrinkage</font> a form of regularization for the model building process. [Figure 3](#figure3) and [Figure 4](#figure4)

## Homework 5: Group Homework
* Work on the jupyter notebook at: <https://github.com/ruiwu1990/CSCI_4120/blob/master/Decision_tree/HW6.ipynb>
* You are required to classify breast cancer data using RandomForestClassifier.
  * Complete TODO sections.
  * Select some features (X), hint: based on the connections with Y
  * 5 fold cross validation
  * Tune parameters for RandomForestClassifier (e.g. criterion, n_estimators …).
  * Calculate Average accuracy score
  * Calculate Average (accuracy score/number of features)
* Your accuracy score should be more than 0.92 and (Accuracy/number of features) should be more than 0.40.
* README.MD file
  * Team member names and email addresses
  * Hyperparameters used.
  * Accuracy and (accuracy/number of features)
* Due <mark>Nov. 6</mark>

## Boosting: Sample Code
* GradientBoostingClassifier
* Using learning rate to control overfitting issue 


||[Index](../../../)||| [Prev](../)|||
