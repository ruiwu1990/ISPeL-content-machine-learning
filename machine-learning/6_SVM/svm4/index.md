---
layout: post
title: SVM
---

## Support Vector Machine
* Another kernel: radial kernel:

$$K(x_i,x_{i\prime})=exp(-\gamma\Sigma _{j=1}^p (x_{ij}x_{i\prime}j)^2)$$

* Γ (gamma) is a positive constant
  * controls the influence of new features
  * The higher the gamma, the more influence of the features will have on the decision boundary, more <font color=red>wiggling</font> the boundary will be. Figure 1.

{% include marginfigure.html id="SVM" url="machine-learning/6_SVM/svm4/gamma.png" description="Figure 1 credit: https://towardsdatascience.com/support-vector-machine-simply-explained-fee28eba5496" %}

* How does radial kernel work?
* If the testing dataset: 

$$x^* =(x^*_1 ... x^*_p)^T$$

* is far away from training dataset based on Euclidean distance, then :

$$\Sigma _{j=1}^p (x^*_j - x_{ij})^2$$

* is very big and kernel parts will be very small:

$$exp(-\gamma\Sigma _{j=1}^p (x^*_j - x_{ij})^2)$$

* This means the kernel will not play an important role. In other words, if training dataset and testing dataset are far away from each other, radial kernel <font color=red>does not work</font>. Because it is for local behavior.

## Sample Code Support Vector Machine
* The C in Sklearn and C in our textbook is not the same. <font color=red>Important</font>!!!!
  * C in the textbook: budget for misclassification: a larger C, more misclassification, larger margin. Book P348.
  * C in Sklearn: how you want to avoid misclassification: a larger C, less misclassification, and smaller margin (check sample code)

## Group Activity7: Support Vector Machine
* Use holdout set to test if SVC works
* Use 5-fold cross validation to test if SVC works.

## SVM—More than two classes
* One-Versus-One Classification:
* Suppose that we would like to perform classification using SVMs, and there are K > 2 classes. A one-versus-one or all-pairs approach constructs K(K − 1)/2 SVMs, each of which compares a pair of classes.
* One-Versus-All Classification

## SVM Example Facial Recognization





||[Index](../../../)||| [Prev](../svm3/)|||






