---
layout: post
title: Hyperplane
---

* Definition: In a p-dimensional space, a hyperplane is a flat affine subspace of hyperplane dimension p − 1.
* For instance, in two dimensions, a hyperplane is a flat subspace.

$$\beta _0+ \beta _1X_1+\beta_2X_2=0$$

* For p-dimensions:

$$\beta _0+ \beta _1X_1+\beta_2X_2+...+ \beta _pX_p=0$$

* If we have a point X (X1, X2, X3, …, Xp):

$$\beta _0+ \beta _1X_1+\beta_2X_2+...+ \beta _pX_p>0$$

* This means X lies to one side of the hyperplane. On the other hand, if:

$$\beta _0+ \beta _1X_1+\beta_2X_2+...+ \beta _pX_p<0$$

* then X lies on the other side of the hyperplane.
* We can think of the hyperplane as dividing p-dimensional space into <font color=red>two halves</font>.
* Questions: we can use hyperplane for regression, classification, or clustering?

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/hyper.png" description=" " %}

* Challenge Question: how to build a hyperplane?

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/hyper2.png" description="There may be multiple solutions. Which one to choose?" %}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/hyper3.png" description="Maximal margin hyperplane: separating hyperplane that is farthest (perpendicular distance) from the training observations." %}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/hyper4.png" description="The maximal margin hyperplane is the separating hyperplane for which the margin is largest—that is, it is the hyperplane that has the farthest minimum distance to the training observations." %}

## Hyperplane – How?

* Question: write a python (or other languages) function
* Input: training data n points, 

$$x_1 = \left(\begin{array}{c}x_{11} \\\vdots\\x_{1_p} \\\end{array} \right) ,...,x_n=\left(\begin{array}{c}x_{n_1} \\\vdots\\x_{np} \\\end{array} \right)y_1,...,y_n \epsilon\big\{-1,1\big\} $$

* Output: β0, β1, …, βp

$$\beta _0+ \beta _1X_1+\beta_2X_2+...+ \beta _pX_p=0$$

* Rule: separate training data based on their classes, a few misclassifications are allowed

## Hyperplane – Maximal Margin Classifier

* If we have one solution, then the hyperplane can usually be shifted a tiny bit up or down, or rotated, without coming into contact with any of the observations: multiple solutions.
* Choose one of these solutions based on <font color=red>margin</font>.
* Margin: the <font color=red>minimal</font> distance (<font color=red>perpendicular</font> distance) from the observations to the hyperplane.


* Margin is similar to the idea of “buffer to make errors.”
* Why this rule? Assumption: We hope that a classifier that has a large margin on the training data will also have a large margin on the test data, and hence will classify the test observations correctly.

## Maximal Margin Classifier: How

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/hyper6.png" description="Non-separable Case - Sometimes, it is not possible to be perfect.How to define a hyperplane for this case?" %}

* Inputs:

$$x_1 = \left(\begin{array}{c}x_{11} \\\vdots\\x_{1_p} \\\end{array} \right) ,...,x_n=\left(\begin{array}{c}x_{n_1} \\\vdots\\x_{np} \\\end{array} \right)y_1,...,y_n \epsilon\big\{-1,1\big\}$$

$$y_1...,y_n \epsilon {-1,1}$$

* Output: β0, β1, …, βp
* Based on maximal margin classifier idea, we can turn this into an optimization question:

maximize M

$$\beta _0,\beta_1,...,\beta_p,M$$

subject to

$$\Sigma _{j=1}^p\beta_j^2=1, y_i(\beta_0+\beta_1x_{i1}+\beta_2x_{i2}+...+\beta_px_{ip}) \geq M \forall i=1,...,n.$$

* One can show that with this constraint the perpendicular distance from the ith observation to the hyperplane is given by $$y_i(\beta_0+\beta_1x_{i1}+\beta_2x_{i2}+...+\beta_px_{p})$$

* M is the margin of our hyperplane, and the optimization problem chooses β0, β1, . . . , βp to maximize M.
* How to solve the optimization question? <https://en.wikipedia.org/wiki/Convex_optimization>. We won’t cover this part in our class. However, I will show you the library to do it for us.


||[Index](../../../)||| [Prev](../)|||[Next](svm2)|||






