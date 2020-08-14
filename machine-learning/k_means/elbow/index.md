---
layout: post
title: Elbow Method
---

The Elbow Method is used to determine if the best K and to judge if a K-Means algorithm is good.

### How to judge if a K-means algorithm is good?

- First you need a measure: one of the most popular one is named “distortion” or “SSE” based on sum of squared errors (SSE), (datapoint - centroid)^2.
- Compare distortion with K. The best K is at the rapid change point, creating elbow shape.
- This method is usually called “elbow” method because the shape is like an elbow.
- Question: why larger K, less distortion?

![](elbow1.png)
#### Figure Credit: https://bl.ocks.org/rpgove/0060ff3b656618e9136b
#### Figure Credit: https://www.dreamstime.com/elbow-joint-vector-illustrated-diagram-medical-scheme-educational-sports-injury-information-elbow-joint-vector-illustrated-diagram-image108866773

||[Index](../../../)||| [Prev](../)|||[Next](../)|||
