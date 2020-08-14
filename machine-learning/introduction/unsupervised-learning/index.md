---
layout: post
title: Unsupervised Learning
---

- With unsupervised learning there is no outcome variable, just a set of predictors (features) measured on a set of samples.
- Objective is more fuzzy: find groups of samples that <font color=red> behave similarly</font>, find features that behave similarly, find linear combinations of features with the most variation.
{% include marginfigure.html id="unsuper" url="assets/img/unsuper.png" description="Data is grouped or clustered together based off of a similarity between data points." %}
- Difficult to know how well you are doing.
- Different from supervised learning but can be useful as a<font color=red> pre-processing</font> step for supervised learning.

- Key difference: predict the cluster of a data record without predicting an explicit label
- Possible method: calculate distance between each data record, if closer => the same cluster.

 
|||[Index](../../../)||| [Prev](../supervised-learning)||| [Next](../../probability)


