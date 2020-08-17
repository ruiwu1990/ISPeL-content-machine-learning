---
layout: post
title: KNN
---

### First Machine Learning Model: KNN

- The idea is similar data records will be closer with each other. Like friends, if most of your friends like playing video games, then you may also enjoy playing video games.
- The model for KNN is the entire training dataset. When a prediction is required for an unseen data instance, the KNN algorithm will search through the training dataset for the k-most similar (distance) instances. The prediction attribute of the most similar instances is summarized (averaged) and returned as the prediction for the unseen instance.
- KNN is supervised or unsupervised?

![](knn1.png)

Figure Credit: https://www.quora.com/How-is-the-k-nearest-neighbor-algorithm-different-from-k-means-clustering

### How to enable Python 3 in the notebook
- python3 -m pip install ipykernel
- python3 -m ipykernel install -user
- Create a Jupyter-notebook using Python3

### KNN Steps
- If we want to implement a KNN algorithm from scratch. Here are the steps:
- Load data
- Check similarity, i.e. distances between eash pair of data points
- Find neighbors, i.e. which data point is the k-th closest neighbor
- Return K closest neighbors
- Check accuracy
- It is Programming time!
-- <https://www.quora.com/How-is-the-k-nearest-neighbor-algorithm-different-from-k-means-clustering>

Based on: <https://machinelearningmastery.com/tutorial-to-implement-k-nearest-neighbors-in-python-from-scratch/>

### Group Activity
- Sample Code: <https://github.com/ruiwu1990/CSCI_4120/tree/master/KNN>
- Finish the TODO section

### Homwork 1: Group Homework
- Group Homework
- Rewrite KNN sample code using KNeighborsClassifier.
* Repeat KNN Step 1-5, for at least five times and calculate average accuracy to be your result.
* If you ise the latest version of scikit-learn, you need to program with Python>=3.5.
* Use the same dataset: "iris data"
- Draw a line chart: Use a "for loop" to change k from 1 to 10 and check your model accuracy.
- README.MD file
* Team member names and email addresses
* Quick Start
* Which K (from 1 to 10) works the best?
* insert a line chart
- Due Semtember XX

||[Index](../../../)||| [Prev](../../)|||[Next](k-part2)|||
