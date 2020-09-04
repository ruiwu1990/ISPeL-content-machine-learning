---
layout: post
title: KNN
---

- KNN is supervised learning
- KNN can be a classification technique and also used for regression.
- Sklearn:
    - KNeighborsClassifier: classification
    - KNeighborsRegressor: regression
- <mark>Question before we continue: advantages and disadvantages?</mark>

![](knn2.png)

Figure Credit: <https://www.mathworks.com/matlabcentral/fileexchange/63621-knn-classifier>

### Here are some challenges:
- How to calculate the similarity (e.g., friends): distances between each data point, Euclidean distance.
- How to choose K: if we need to classify students into groups, then how to decide the number of K. ATTENSION: K represents how many neighbors you want to consider for the response; K does not mean number of groups.

![](knn3.png)

Figure Credit: <https://aws.amazon.com/blogs/machine-learning/amazon-sagemaker-supports-knn-classification-and-regression/>

### KNN: How
- The KNN algorithm is belongs to the family of instance-based, competitive learning and lazy learning algorithms.
- <mark>Instance-based algorithms</mark> are those algorithms that model the problem using data instances (or rows) in order to make predictive decisions. The KNN algorithm is an extreme form of instance-based methods because all training observations are retained as part of the model, i.e. without data, your KNN model does not exist.
- It is a <mark>competitive learning algorithm</mark>, because it internally uses competition between model elements (data instances) in order to make a predictive decision. The objective similarity measure between data instances causes each data instance to compete to “win” or be most similar to a given unseen data instance and contribute to a prediction.
- <mark>Lazy learning</mark> refers to the fact that the algorithm does not build a model until the time that a prediction is required. It is lazy because it only does work at the last second. This has the benefit of only including data relevant to the unseen data, called a localized model. A disadvantage is that it can be computationally expensive to repeat the same or similar searches over larger training datasets.
- Finally, KNN is powerful because it does not assume anything about the data, other than a distance measure can be calculated consistently between any two instances. As such, it is called <mark>non-parametric</mark> or <mark>non-linear</mark> as it does not assume a functional form.


# KNN Advantages vs Disadvantages

#### Advantages:
- You do not need to make assumptions about data (i.e., linear vs nonlinear, normal distribution…)
- KNN is simple compared with other algorithm.
- Usually, KNN performs not bad
- KNN is robust to noisy training data, a few noise data points will not impact results a lot.
…

#### Disadvantages:
- You need to determine K.
- KNN is computationally expensive. It requires many calculations—distances.
- KNN requires a lot of memory.
- KNN needs to use all training data.
…

![](knn2.png)
Figure Credit: <https://www.mathworks.com/matlabcentral/fileexchange/63621-knn-classifier>

### KNN: K changes

![](knn4.png)


||[Index](../../)||| [Prev](../)|||[Next](../k-part3/)|||
