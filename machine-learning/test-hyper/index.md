---
layout: post
title: Hyperplane
---

- Definition: In a p-dimensional space, a hyperplane is a flat affine subspace of hyperplane dimension p − 1.
- For instance, in two dimensions, a hyperplane is a flat subspace.

$$\beta _0+ \beta _1X_1+\beta_2X_2=0$$

- For p-dimensions:

$$\beta _0+ \beta _1X_1+\beta_2X_2+...+ \beta _pX_p=0$$

- If we have a point X (X1, X2, X3, …, Xp):

$$\beta _0+ \beta _1X_1+\beta_2X_2+...+ \beta _pX_p>0$$

- This means X lies to one side of the hyperplane. On the other hand, if:

$$\beta _0+ \beta _1X_1+\beta_2X_2+...+ \beta _pX_p<0$$

- then X lies on the other side of the hyperplane.
- We can think of the hyperplane as dividing p-dimensional space into two halves.
- Questions: we can use hyperplane for regression, classification, or clustering?

.<font color=red>Challenge Question</font>: how do you build a hyperplane?

# Hyperplane – How?
- Question: write a python (or other languages) function
- Input: training data n points, 

$$x_1 = \left(\begin{array}{c}x_{11} \\\vdots\\x_{1_p} \\\end{array} \right) ,...,x_n=\left(\begin{array}{c}x_{n_1} \\\vdots\\x_{np} \\\end{array} \right)y_1,...,y_n \epsilon\big\{-1,1\big\} $$

- Output: β0, β1, …, βp

$$\beta _0+ \beta _1X_1+\beta_2X_2+...+ \beta _pX_p=0$$

- Rule: separate training data based on their classes, a few misclassifications are allowed

### There may be multiple solutions
- Which one to choose?
![image.png](attachment:image.png)


|||[Index](../../../)||| [Prev](/index.md)||| [Next](../mod)
