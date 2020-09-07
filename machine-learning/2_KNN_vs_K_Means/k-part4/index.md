---
layout: post
title: K-Means
---


- Kmeans clustering aims to partition n observations into k clusters in which each observation belongs to the cluster with the <mark>nearest mean</mark>.
- If you want to separate different car models into 4 categories based on horsepower, engine displacement, and MPG, you can use K-means.
- <mark>Question: is Kmeans supervised or unsupervised learning?</mark>
- K represents # of centroids.
![](k-means.png)

Figure Credit: <https://blogs.oracle.com/bigdata/k-means-clustering-machine-learning>

### K-Means: How does it work?
- Here are K-means algorithm steps:
	* Step 1: Choose a K: it represents the number of centroids. Hard to decide… especially for high dimensional data. You will learn how to do this in your homework 2.
	* Step 2: Randomly selected centroids positions
	* Step 3: Calculate distances between each data point with K centroids and decide cluster response (closer)
	* Step 4: Calculate the mean value of each cluster, use the mean value as the new centroid
	* Step 5: repeat step 3 and 4 until you have repeated N (maybe 100) times or centroids do not change anymore.
- Kmeans is unsupervised learning and a clustering algorithm (involves the grouping of data points). 

- The following figure shows how we decide which group a data point belongs to.
![](km3.png)
- The image below is a good cluster result using Kmeans.
![](km4.png)
Figure Credit: <https://blogs.oracle.com/bigdata/k-means-clustering-machine-learning>

### An Example
- Let's tale a closer look at the following 2D example and review the steps.
![](k-means2.png)
- Things can go wrong like the image below:
![](k-means3.png)
- <mark>Question: how to avoid this?</mark>
- Same steps for higher dimensional data.

Example is based on: https://www.youtube.com/watch?v=4b5d3muPQmA

### Group Activity
- Group Activity 3: <https://github.com/ruiwu1990/CSCI_4120/tree/master/K-Means>
- Finish to do section, you will have the K-means implementation from scratch.
- Seaborn is a Python data visualization library based on matplotlib. It provides a high-level interface for drawing attractive and informative statistical graphics.
- pairwise_distances_argmin: Compute minimum distances between one point and a set of points, similar to finding neighbors function from KNN
- Kmeans(k, random_state): k how many neighbours, random_state determines random number generatation for centroid initialization
- How to cluster non-linear data? Map your data into a higher dimension and apply k-means. In sklearn: SpectralClustering.


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

||[Index](../../../)||| [Prev](../k-part3/)|||
