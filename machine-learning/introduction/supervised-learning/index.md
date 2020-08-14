---
layout: post
title: Supervised Learning
---

### Training data: used to train a machine learning model
{% include marginfigure.html id="super" url="assets/img/super.png" description="Training data vs validation data vs test data." %}
<!--- <img src="../../../../assets/img/super.png" alt="Drawing" style="width: 333px;" align="center;"> --->
- Accurately predict unseen test cases.
- Understand which inputs affect the outcome, and how.
- Assess the quality of our predictions and inferences

### Validation data: evaluate a machine learning model, should be                unbiased
- Usually released with training data. For example, k-fold cross validation.

### Test data: final test of a machine learning model
- Usually only used once to evaluate the machine learning model performance.

# Classification: Definition of Terms

- Positive (P) : Observation is positive (for example: is an apple).

- Negative (N) : Observation is not positive (for example: is not an apple).

- True Positive (TP) : Observation is positive, and is predicted to be positive.

- False Negative (FN) : Observation is positive, but is predicted negative.

- True Negative (TN) : Observation is negative, and is predicted to be negative.

- False Positive (FP) : Observation is negative, but is predicted positive.

# Regression

Regression is used to find the relationship between variables and to predict a continuous value when built in a model.

- Machine Learning Model Output: Continuous data
- E.g. Predict the weight of a cat based on the length of legs
- E.g. Predict age (3.5 years) of a cat based on a photo
 
|||[Index](../../../)||| [Prev](../what-is-machine-learning)||| [Next](../unsupervised-learning)


