---
layout: post
title: Linear Regression
---

### Simple linear regression using a single predictor X.

- We assume a model

$$Y = \beta_0 + (\beta_1)X + \epsilon$$

- where \beta_0 and \beta_1 are two unknown constants that represent the intercept and slope, also known as coefficients or parameters, and $$\epsilon$$ is the error term.
- Given some $$\hat(\beta_0)$$ and $$\hat(\beta_1)$$ for the  model cofficients, we predict future sale using  $$\hat(y) = \hat(\beta_0) + \hat(\beta_1),$$ 

- where $$\hat(y) indicates a prediction of $$Y$$ on the basis of $$X=x$$
- The hat symbol denotes an estimated value.


=====================
Estimation of parameter by least squares
=====================

- Linear regression is a simple approach to supervised learning. It assumes that the dependence of Y on $$X_1,X_2,...X_p$$ is linear.

- True regression functions are never linear!

- Although it may seem overly simplistic, linear regression is extremely useful both conceptually and practically.

## Linear regression for the advertising data
#### Consider the advertising data shown...
![](linreg1.png)
#### Questions we might ask:
- Is there a relationship between advertising budget and sales?
- How strong is the relationship between advertising budget and sales?
- Which media contributes to sales?
- How accurately can we predict future sales?
- Is the relationship linear?
- Is there synergy among the advertising media?

### Group Activcity 5: Linear Regression from Scratch
- Group Activity 5:<https://github.com/ruiwu1990/CSCI_4120/tree/master/HW_linear_regression>
- Finish to do section, you will have the linear regression implemtation from scratch.

||| [Index](../../)||| [Prev](../../)||| [Next](lin-reg2/)|||
