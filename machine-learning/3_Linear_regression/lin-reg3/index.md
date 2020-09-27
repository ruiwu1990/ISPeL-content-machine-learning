---
layout: post
title: Linear Regression
---

## What about non-linear relationships?
- Trick: transform data according to basis functions
- Polynomial basis function: 
$$y = a_0 + a_1x_{1} +a_2x_{2}^2+a_3x_{3}^3+...$$

- Gaussian basis function: a sum of Gaussian bases (figure below, each term can be a gaussian wave). Does not directly supported by sklearn but we will write one by ourselves.

![](nonlin.png)



## Linear Regression Sample Code
- Linear-Regression: <https://github.com/ruiwu1990/CSCI_4120/blob/master/Linear_regression/Linear-Regression.ipynb>
- x[:, np.newaxis] => make it as <font color=red>column vector</font> by inserting an axis along second dimension
- np.linspace(0, 10, 1000): generate 1000 numbers between 0 and 10
- numpy.random.rand(n,m): randomly generate numbers between <font color=red>[0,1)</font> to fill n*m matrix
- How you define a function’s coefficient: y = 0.5 + np.dot(X, [1.5, -2., 1.]) => [1.5, -2., 1.] is the coefficient for x1, x2, and x3.
- fit_transform: Generate polynomial and interaction features: [a, b], the degree-2 polynomial features are [$$1, a, b, a^2, ab, b^2$$]. Your $$Y$$ may not have direct linear relation with [$$a, b$$] but may have linear relation with the terms [$$a^2, ab, b^2$$].
- N degree polynomial means the highest degree of term x.
- make_pipeline: Construct a Pipeline from the given estimators. In the example, we define the <font color=red>basis function</font> and <font color=red>regression method</font>.

## Overfitting vs Underfitting
- Overfitting is the production of an analysis that corresponds <mark>too closely or exactly</mark> to a particular set of data (training) and may therefore fail to fit <mark>additional data or predict future observations</mark> (testing) reliably. (wiki)
- Underfitting occurs when a statistical model <mark>cannot adequately</mark> capture the underlying structure of the data. An underfitted model is a model where some parameters or terms that would appear in a correctly specified model are missing. (wiki)

![](linreg3.png)
- First Figure  <mark>underfitting</mark>, second figure <mark>overfitting</mark>.
- Source: Ding, D., Zhang, M., Pan, X., Yang, M. and He, X., 2019. Modeling Extreme Events in Time Series Prediction. KDD (knowledge discovery and data mining) 2019.

## Overfitting
- Overfitting issue: a model works very well for <font color=red>training data</font>
- <mark>Question:</mark> which of the following is overfitting?

![](overfitting1.png)

$$\Theta _0+ \Theta _1x + \Theta _2x^2$$

$$\Theta _0+ \Theta _1x + \Theta _2x^2+ \Theta _3x^3+ \Theta _4x^4$$

- Figure credit: https://www.youtube.com/watch?v=KvtGD37Rm5I

- <mark>Objective function</mark>: In order to find the optimal solution, we need some way of measuring the quality of any solution.
- Possible solutions: besides minimize RSS score, we should also penalize ϴ3 and ϴ4.
  * Objective function = min(RSS + 1000* ϴ3 + 1000* ϴ4)
  * Therefore, if ϴ3 or ϴ4 is too big, it will be penalized=> ϴ3 ≈ 0, ϴ4 ≈ 0

## reading after the class
- <https://machinelearningmastery.com/learning-curves-for-diagnosing-machine-learning-model-performance/>
- Loss is the penalty for a bad prediction. That is, loss is a number indicating how bad the model's prediction is.


||| [Index](../../)||| [Prev](../mlr/)||| [Next](../regularization/)|||
