---
layout: post
title: KNN Steps
---
### Step 1: Handle Data and Split into test train datasets

- The first thing we need to do is load our data file. The data is in CSV format without a header line or any quotes. We can open the file with the open function and read the data lines using the reader function in the csv module.


```python
import csv
with open('iris.data', 'rb') as csvfile:
	lines = csv.reader(csvfile)
	for row in lines:
		print ', '.join(row)
```

- Next we need to split the data into a training dataset that kNN can use to make predictions and a test dataset that we can use to evaluate the accuracy of the model.

- We first need to convert the flower measures that were loaded as strings into numbers that we can work with. Next we need to split the data set randomly into train and datasets. A ratio of 67/33 for train/test is a standard ratio used.

- Pulling it all together, we can define a function called loadDataset that loads a CSV with the provided filename and splits it randomly into train and test datasets using the provided split ratio.


```python
import csv
import random
def loadDataset(filename, split, trainingSet=[] , testSet=[]):
	with open(filename, 'rb') as csvfile:
	    lines = csv.reader(csvfile)
	    dataset = list(lines)
	    for x in range(len(dataset)-1):
	        for y in range(4):
	            dataset[x][y] = float(dataset[x][y])
                # random.random() generate a number [0,1)
	        if random.random() < split:
	            trainingSet.append(dataset[x])
	        else:
	            testSet.append(dataset[x])
```

- We can test this function out with our iris dataset, as follows:


```python
testSet=[]
loadDataset('iris.data', 0.66, trainingSet, testSet)
print random.random()
print 'Train: ' + repr(len(trainingSet))
print 'Test: ' + repr(len(testSet))
```

```python

```

### Step 2: Similarity and Calculating the Distance Between Two Data Instances

- In order to make predictions we need to calculate the similarity between any two given data instances. This is needed so that we can locate the k most similar data instances in the training dataset for a given member of the test dataset and in turn make a prediction.

- Given that all four flower measurements are numeric and have the same units, we can directly use the Euclidean distance measure. This is defined as the square root of the sum of the squared differences between the two arrays of numbers (read that again a few times and let it sink in).

- Additionally, we want to control which fields to include in the distance calculation. Specifically, we only want to include the first 4 attributes. One approach is to limit the euclidean distance to a fixed length, ignoring the final dimension.

- Putting all of this together we can define the euclideanDistance function as follows:


```python
import math
def euclideanDistance(instance1, instance2, length):
	distance = 0
	for x in range(length):
		distance += pow((instance1[x] - instance2[x]), 2)
	return math.sqrt(distance)
```

- We can test this function with some sample data, as follows:


```python
data1 = [2, 2, 2, 'a']
data2 = [4, 4, 4, 'b']
distance = euclideanDistance(data1, data2, 3)
print 'Distance: ' + repr(distance)
```

### Step 3: Neighbors and Locating K most Similar Data Instances

- Now that we have a similarity measure, we can use it collect the k most similar instances for a given unseen instance.
- This is a straight forward process of calculating the distance for all instances and selecting a subset with the smallest distance values.
- Below is the getNeighbors function that returns k most similar neighbors from the training set for a given test instance (using the already defined euclideanDistance function)


```python
import operator 
def getNeighbors(trainingSet, testInstance, k):
	distances = []
	length = len(testInstance)-1
	for x in range(len(trainingSet)):
		dist = euclideanDistance(testInstance, trainingSet[x], length)
		distances.append((trainingSet[x], dist))
    # key=operator.itemgetter(1) => order distances list based on second column (1)
	distances.sort(key=operator.itemgetter(1))
	neighbors = []
	for x in range(k):
		neighbors.append(distances[x][0])
	return neighbors
```

- We can test out this function as follows:


```python
trainSet = [[2, 2, 2, 'a'], [4, 4, 4, 'b']]
testInstance = [5, 5, 5]
k = 1
neighbors = getNeighbors(trainSet, testInstance, 1)
print(neighbors)
```

### Step 4: Response and Generating a Response from a Set of Data Instances

- Once we have located the most similar neighbors for a test instance, the next task is to devise a predicted response based on those neighbors.
- We can do this by allowing each neighbor to vote for their class attribute, and take the majority vote as the prediction.
- Below provides a function for getting the majority voted response from a number of neighbors. It assumes the class is the last attribute for each neighbor.


```python
Once we have located the most similar neighbors for a test instance, the next task is to devise a predicted response based on those neighbors.
We can do this by allowing each neighbor to vote for their class attribute, and take the majority vote as the prediction.
Below provides a function for getting the majority voted response from a number of neighbors. It assumes the class is the last attribute for each neighbor.

import operator
def getResponse(neighbors):
	classVotes = {}
	for x in range(len(neighbors)):
        # based on the last element
		response = neighbors[x][-1]
		if response in classVotes:
			classVotes[response] += 1
		else:
			classVotes[response] = 1
    # reverse=True means the most voted item will be our response
	sortedVotes = sorted(classVotes.iteritems(), key=operator.itemgetter(1), reverse=True)
	return sortedVotes[0][0]
```

- We can test out this function with some test neighbors, as follows:


```python
neighbors = [[1,1,1,'a'], [2,2,2,'a'], [3,3,3,'b']]
response = getResponse(neighbors)
print(response)
```

- This approach returns one response in the case of a draw, but you could handle such cases in a specific way, such as returning no response or selecting an unbiased random response.

### Step 5: Accuracy and Summarizing the accuracy of Predictions

- We have all of the pieces of the kNN algorithm in place. An important remaining concern is how to evaluate the accuracy of predictions.
- An easy way to evaluate the accuracy of the model is to calculate a ratio of the total correct predictions out of all predictions made, called the classification accuracy.
- Below is the getAccuracy function that sums the total correct predictions and returns the accuracy as a percentage of correct classifications.


```python
def getAccuracy(testSet, predictions):
	correct = 0
	for x in range(len(testSet)):
		if testSet[x][-1] is predictions[x]:
			correct += 1
	return (correct/float(len(testSet))) * 100.0
```

- We can test this function with a test dataset and predictions, as follows:


```python
testSet = [[1,1,1,'a'], [2,2,2,'a'], [3,3,3,'b']]
predictions = ['a', 'a', 'a']
accuracy = getAccuracy(testSet, predictions)
print(accuracy)
```



||[Index](../../../)||| [Prev](../)|||[Next](../confusion-matrix)|||
