---
layout: post
title: Bias Variance Tradeoff
---

- Bias is average of difference between <font color=red>predicted and Actual result</font>. High Bias means We are getting low performance. Distance between true values and predict values.

- Variance is the expectation of the squared deviation of a random variable from its mean. Predictions made on the same value vary on different realizations of the model.


$$Var(X) = E[(X- \mu )^2]$$

![](bias2.png)

- Suppose the estimator is a bathroom scale. Suppose you weigh yourself on a really good scale and find you are 150 pounds (ground truth).

- Now, if you get on and off a bathroom scale 10 times, then the bias is how far the average is from 150. The variance is a measure of how spread out the values are.

<font color=green>Example</font>

Zero bias, high variance:   140, 160, 145, 155, 160, 165, 140, 135, 138, 162

low bias, high variance:    142, 161, 149, 156, 160, 165, 145, 137, 139, 161.0 

bias, low variance:         148, 152, 151, 149, 151, 153, 149, 147, 149, 151

low bias, low variance:      150, 153, 151, 148, 152, 152, 153, 151, 149, 150

##### Bias and variance trade-off irreducible error: y is not completely decided by x.
![](bv1.png)
               

Figure Credit: <https://medium.com/ml-research-lab/ensemble-learning-relation-with-bias-and-variance-431cdc0a3fc9>

##### The best model we can have is when variance and bias^2 lines cross.

![](bv2.png)

Figure Credit: <https://medium.com/ml-research-lab/ensemble-learning-relation-with-bias-and-variance-431cdc0a3fc9>

|||[Index](../../../)||| [Prev](../regularization/)||| [Next](../metrics-for-evaluation/)
