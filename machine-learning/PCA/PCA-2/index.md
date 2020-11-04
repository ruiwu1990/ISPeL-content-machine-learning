---
layout: post
title: PCA
---

* Similarly, if your scree plot is like this, you can have 2D graph to represent 4D data: [Figure](#figure1)

{% include marginfigure.html id="PCA" url="machine-learning/PCA/PCA-2/pca20.png" description="<a name='figure1'>Figure 1</a> 2D graph to represent 4D data" %}


* What about this one [Figure](#figure3)? Can you use 2D graph to represent 4D? Why?

{% include marginfigure.html id="PCA" url="machine-learning/PCA/PCA-2/pca21.png" description="<a name='figure2'>Figure 2</a>" %}



## PCA Sample Code
* Sample Code: <https://github.com/ruiwu1990/CSCI_4120/blob/master/SVM/PCA.ipynb>
* axis('equal') changes limits of x or y axis so that equal increments of x and y have the same length; a circle is circular.
* axis('scaled') achieves the same result by changing the dimensions of the plot box instead of the axis data limits.

![](pca22.png)

## PCA Handwriting Digit
* Two possible ways to do dimensionality reduction:
  * Method 1: Choose from 64 features, only select 8 important cells (features). Similar to: you are required to select n letters (a, b, c…) from alphabet table to write an article
  * Method 2: PCA, create 8 principle components. Each component contains some information of 64 features. Similar to: you are required to select n words from frequently used words table to write an article.
* Np.cumsum: return the cumulative sum of the elements along a given axis.
* Filtering noise:
  * The principle component with large amount of information (higher variation) will not be affected by noise.
  * Np.random.normal: generate noise data based on normal distribution.
  
## Group Activity 8: PCA

{% include marginfigure.html id="PCA" url="machine-learning/PCA/PCA-2/pca-1.png" description="<a name='figure3'>Figure 3</a> Group Activity 3D data representation " %}

* Code: <https://github.com/ruiwu1990/CSCI_4120/blob/master/SVM/Group%20Activity%208.ipynb>
* PCA can improve machine learning model performance. Even without reduce dimensionality.
* Why the performance is improved? [Figure](#figure3)
  * Still the 3D data. 


## Homework 6: Group Homework
* Work on the jupyter notebook at: <https://github.com/ruiwu1990/CSCI_4120/blob/master/SVM/HW5.ipynb>
* You are required to classify digits with <font color=red>SVM</font> models.
* Compare performance of <font color=red>linear</font>, <font color=red>radial</font>, and <font color=red>polynomial</font> kernels (classification score).
  * Tune kernel parameters using <font color=red>RandomizedSearchCV</font> method.
* Use PCA to reduce data dimensionality (<font color=red>80%</font> information remain).
* README.MD file
  * Team member names and email addresses
  * Parameters selected for linear, radial, polynomial kernels.
  * Results comparison between linear, radial, polynomial kernels
* Due...

## Plan
* 6 classes:
  * 2 classes: Tree-based methods
  * 2 classes: genetic algorithm
  * 1 class: group activity, process a data file together
  * 1 class: review
  
||[Index](../../../)||| [Prev](../)|||



