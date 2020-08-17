---
layout: post
title: K-Means: What
---

### Group Activity Plot 2
- Finish the TODO section
- Your graph should be similar to this:
![](gap2.png)

- K-means clustering aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean.
- If you want to separate different car models into 4 categories based on horsepower, engine displacement, and MPG, you can use K-means.
- KNN is unsupervised learning and a clustering algorithm (involves the grouping of data points). 
- K represents # of centroids.
![](k-means.png)

Figure Credit: <https://blogs.oracle.com/bigdata/k-means-clustering-machine-learning>

### K-Means: How does it work?
- Here are K-means algorithm steps:
* Step 1: Choose a K: it represents the number of centroids. Hard to decide… especially for high dimensional data. You will learn it in your homework 2.
* Step 2: Randomly selected centroids positions
* Step 3: Calculate distances between each data point with K centroids and decide cluster response (closer)
* Step 4: Calculate the mean value of each cluster, use the mean value as the new centroid
* Step 5: repeat step 3 and 4 until you have repeated N (maybe 100) times or centroids do not change anymore.

![](km3.png)
![](km4.png)
Figure Credit: <https://blogs.oracle.com/bigdata/k-means-clustering-machine-learning>

### Homework 1: Group Homework

cont. here!

#### An Example
![](k-means2.png)

Example is based on: https://www.youtube.com/watch?v=4b5d3muPQmA

### K-Means: Advantages vs Disadvantages
#### Advantages:
- Easy to implement.
- K-means model dynamically updated: centroid can be updated if new dataset is added.

#### Disadvantages:
- Hard to guess K
- Initial centroid can impact results
- K-means is time consuming. Need to calculate distances between new centroid in every loop.
- K-means method may not find out the global best solution. It sometimes returns local optimum.
- K-means is limited to linear cluster boundaries.

||[Index](../../../)||| [Prev](../../)|||[Next](k-part2)|||
