---
layout: post
title: SVM
---

## Support Vector Classifiers
* An interesting fact: it turns out that only observations that <font color=red>either lie on the margin or that violate the margin</font> will affect the hyperplane, and hence the classifier obtained. In other words, an observation that lies strictly on the correct side of the margin does not affect the support vector classifier! 
* 1, 2, 7, 8, 9, 11, 12 affect; 3, 4, 5, 6, 10 does not affect a hyperplane position
* Decision rule is based only on a potentially <font color=red>small subset</font> of the training observations (the support vectors) means that it is quite robust to the behavior of observations that are far away from the hyperplane. Figure 1:

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm3/svc.png" description="Figure 1" %}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm3/svc1.png" description="What if the classifier is not linear?" %}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm3/svm.png" description="Support vectors are the data points that lie closest to the decision surface. It sounds scary but αi is not 0 only for the <font color=red>support vectors (points on the margin)</font> Figure credit: https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47 "%}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm3/kernel.png" description="Figure 2: Degree of 3, i.e. d= 3" %}

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm3/kernel2.png" description="Figure 3:From left to right: d = 1; d = 3; d = 5. The higher d means higher dimensional hyperplane (non-linear), a more flexible (curvy) decision boundary. Figure credit: https://yunhaocsblog.wordpress.com/2014/07/27/the-effects-of-hyperparameters-in-svm/" %}


## Support Vector Machine: Quadratic
- this is an optimization problem for quadratic relation: Goal--maximize M

$$\beta_0,\beta_{11},\beta_{12}....,\beta_{p1},\beta_{p2}, \epsilon _1,..., \epsilon_n,M$$

subject to

$$y_i(\beta_0+ \Sigma_{j=1}^p\beta_{j1}x_{ij}+\Sigma_{j=1}^p\beta_{j2}x_{ij}^2) \geq M(1- \epsilon _i)$$

$$\Sigma _{i=1}^n \epsilon _i \leq C$$

$$\epsilon _i \geq 0$$

$$\Sigma _{j=1}^p \Sigma _{k=1}^2\beta_{jk}^2=1.$$

* If you want to know why and how to turn the problem into math above: <https://www.youtube.com/watch?v=_PwhiWxHK8o>

## Support Vector Machine: Generalize Idea
* SVM is the general answer for <font color=red>non-linear classifier</font>.
* SVM an extension of the support vector classifier that results from enlarging the feature space in a specific way, using <font color=red>kernels</font>.
* The details on explanations are very complex and beyond the scope of this class, but the key idea is introduced in the previous slides: only involves inner product of vectors (xi is training data, x is data point we want to predict):

$$f(x) = \beta _0+ \Sigma _{i=1}^n \alpha _i \big\{x,x_i\big\}$$

$$\big\{x,x_{i\prime} \big\}= \Sigma_{j=1}^px_{ij}x_{i\prime}j$$

* where there are n parameters αi, i = 1, . . . , n, one per training observation.
* This means if you have 10,000 training data records, you will have 10,000 α. In fact, most α will be 0.
* To estimate the parameters α1, . . . , αn and β0, all we need are the <font color=red>n(n − 1)/2</font> inner products {xi, xi’}  between all pairs of training observations.
* Support vectors are the data points that lie closest to the decision surface.
* It sounds scary but αi is not 0 only for the <font color=red>support vectors (points on the margin)</font>

* αi is not 0 only for the <font color=red>support vectors</font>
* Because of this, 

$$f(x) = \beta _0+ \Sigma _{i=1}^n \alpha _i \big\{x,x_i\big\}$$

$$TO$$

$$f(x) = \beta _0+ \Sigma _{i\epsilon S} \alpha _i K(x,x_i)$$

* S is the support vector collection. The xi, xi’ is called <font color=red>kernel</font> and can be written as K(xi, xi’).
* Inner Kernel:

$$K(x_i,x_{i\prime}) = \Sigma _{j=1}^p x_{ij}x_{i\prime}j$$

* The <font color=red>linear kernel</font> essentially quantifies the similarity of a pair of observations using Pearson (standard) correlation.
* Question: What is Pearson correlation?

* Besides linear kernel, there are some other popular kernels, e.g. <font color=red>polynomial</font> kernel and <font color=red>radial</font> kernel.
* Let’s have a closer look at polynomial kernel first:

$$K(x_i,x_{i\prime}) = 1+(\Sigma _{j=1}^p x_{ij}x_{i\prime}j)^d$$

* d is a positive integer. It essentially amounts to fitting a support vector classifier in a <font color=red>higher-dimensional</font> space involving polynomials of degree <font color=red>d</font>, rather than in the original feature space. Example Figure 2 and 3.




||[Index](../../../)||| [Prev](../svm2)|||[Next](../svm4)|||






