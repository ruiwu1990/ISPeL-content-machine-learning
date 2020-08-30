---
layout: post
title: KNN
---

### First Machine Learning Model: KNN

- The idea is similar data records will be <mark>closer</mark> with each other. Like friends, if most of your friends like playing video games, then you may also enjoy playing video games.
- The model for KNN is the <mark>entire training dataset</mark>. When a prediction is required for an unseen data instance, the KNN algorithm will search through the training dataset for the k-most similar (distance) instances. The prediction attribute of the most similar instances is summarized (averaged) and returned as the prediction for the unseen instance. 
- E.g., hobbies of the top ten friends you interacted the most (like, reply their posts) in the past week will be used for what you can try during this weekend.
- Check the figure below...
- KNN is supervised or unsupervised?

![](knn1.png)

Figure Credit: https://www.quora.com/How-is-the-k-nearest-neighbor-algorithm-different-from-k-means-clustering

### KNN Steps
If we want to implement a KNN algorithm from scratch. Here are the steps:
1. Load data
2. Check similarity, i.e. distances between eash pair of data points, can be euclidean distances (<https://hlab.stanford.edu/brian/making_measurements.html>) or other type of distances based on requirements
3. Find neighbors, i.e. which data point is the k-th closest neighbor
4. Return K closest neighbors
5. Check accuracy of your model

### It is <mark>Programming time</mark>!
How to enable Python 3 in the notebook:
- python3 -m pip install ipykernel
- python3 -m ipykernel install -user
- Create a Jupyter-notebook using Python3

Install dependencies:
- sudo pip3 install -r requirements.txt

### Group Activity
Based on the tutorial at <https://machinelearningmastery.com/tutorial-to-implement-k-nearest-neighbors-in-python-from-scratch/>
- <mark>10 minutes</mark>
- Github Sample Code: <https://github.com/ruiwu1990/CSCI_4120/blob/master/KNN/knn.ipynb>
- Colab Sample Code: <https://colab.research.google.com/github/ruiwu1990/CSCI_4120/blob/master/KNN/knn.ipynb>
- Finish the TODO section


### Homwork 1: Group Homework
1. <mark>Group Homework</mark>
2. Rewrite KNN sample code using KNeighborsClassifier.
* Repeat KNN Step 1-5, for at least five times and calculate average accuracy to be your result.
* If you use the latest version of scikit-learn, you need to program with Python>=3.5.
* Use the same dataset: "iris data"
3. Draw a line chart (recorded video): Use a "for loop" to change k from 1 to 20 and check your model accuracy.
4. README.MD file
* Team member names and email addresses
* Quick Start about steps and things TA and I need to know to run your code or Jupyter notebook, e.g. dependancies...
* Which K (from 1 to 20) works the best? If all Ks have similar accuracy, please write down your thoughts about "Why."
* insert a line chart
- Due <mark>September 14</mark>

||[Index](../../../)||| [Prev](../)|||[Next](k-part2)|||
