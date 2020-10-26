---
layout: post
title: SVM
---

## Support Vector Classifiers

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm2/support.png" description="Sometimes, it is not possible to be perfect.How to define a hyperplane for this case?" %}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm2/support2.png" description="Question: which is hyperplane is better?" %}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm2/support3.png" description="Figure 1" %}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm2/epsilon.png" description="Figure 2" %}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm2/c.png" description="Figure 3" %}

* It could be <font color=red>worthwhile to mis-classify</font> a few training observations in order to do a better job in classifying the remaining observations.
  * Greater robustness to individual observations
  * Better classification of most of the training observations.
* Based on ideas above—<font color=red>Support Vector Classifier</font>, aka <font color=red>soft margin classifier</font>.

### Figure 1
* Left: A support vector classifier was fit to a small data set. The hyperplane is shown as a solid line and the margins are shown as dashed lines. Purple observations: Observations 3,4,5 and 6 are on the correct side of the margin, observation 2 is on the margin, and observation 1 is on the wrong side of the margin. Blue observations: Observations 7 and 10 are on the correct side of the margin, observation 9 is on the margin, and observation 8 is on the wrong side of the margin. No observations are on the wrong side of the hyperplane. Right: Same as left panel with two additional points, 11 and 12. These two observations are on the wrong side of the hyperplane and the wrong side of the

* Similar to Maximal Margin Classifier, this is also an optimization problem: Goal--Maximize $$M$$

$$\sum_{j=1}^p \beta^2_j =1,$$

$$y_i(\beta_0 + \beta_1x_{i1} + \beta_2x_{i2} + ... + \beta_px_{ip}) \geq M(1 - \epsilon_i),$$

$$\epsilon_i  \geq 0,  \sum_{i=1}^n\epsilon_i  \leq C$$  


* C is a nonnegative tuning parameter; M is the width of the margin; ε1, . . . ,   εn are slack variables that allow individual observations to be on the wrong side of the margin or the hyperplane

## Support Vector Classifiers – ε
* If εi = 0 then the ith observation is on the correct side of the margin; If εi > 0 then the ith observation is on the wrong side of the margin, and we say that the ith observation has violated the margin. If εi > 1 then it is on the wrong side of the hyperplane. Figure 2.

$$y_i(\beta_0 + \beta_1x_i1 + \beta_2x_i2 + ... + \beta_px_ip) \geq M(1 - \epsilon_i),$$

## Support Vector Classifiers – C
* <mark>Question: For figure 3, which one has a larger C value for the same dataset?</mark>
* If C is large, then there will be low variance (i.e. predication is stable, since many observations are support vectors), but potentially high bias.
* If C is small, then there will be fewer support vectors and hence the resulting classifier will have low bias but high variance.
* How to choose a good “C”?->Cross-validation. C controls the bias-variance trade-off of the statistical learning technique.

$$\epsilon_i  \geq 0,  \sum_{i=1}^n\epsilon_i  \leq C$$


||[Index](../../../)||| [Prev](../)|||[Next](../svm3)|||






