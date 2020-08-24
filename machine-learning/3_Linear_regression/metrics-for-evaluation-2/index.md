---
layout: post
title: Metrics for Evaluation
---

## $$R^2$$ value

- In statistics, the <font color=red>coefficient of determination</font>, denoted R2 or r2 and pronounced "R squared", is the proportion of the variance in the dependent variable that is predictable from the independent variable(s). For <font color=red>regression</font> for most cases.
- SStot is the total sum of squares:

$$SS_{tot}= \Sigma _i(y_i-\overline{y})^2$$

- SSres is the sum of squares of residuals:

$$SS_{res}= \Sigma _i(y_i-f_i)^2= \Sigma _ie_i^2$$

$$\overline{y}=\frac{1}{n} \Sigma _{i=1}^ny_i$$

- $$R^2$$ is calculated as the following: 

$$R^2 \equiv 1-\frac{SS_{res}}{SS_{tot}}$$

- $$R^2$$ is used to measure how close the data are to the fitted regression line. Value [0,1], closer 1 means <font color=red>better</font>. $$R^2$$ = 1 indicates that the model explains all the variability of the response data around its mean.

## RMSE, MSE and MAE

- Mean Absolute Error (MAE): measure of how far the predictions were from the actual output.

$$MeanSquaredError = \frac{1}{N} \Sigma _{j=1}^N|y_i-\hat{y}_i|$$

- Root Mean Squared Error (RMSE): <font color=red>non-negative</font>, and a value of 0 (almost never achieved in practice) would indicate a perfect fit to the data.

$$RMSE =  \sqrt{\frac{1}{N} \Sigma _{i=1}^N(y_i-\hat{y}_i)^2} = \sqrt{MSE}$$

- Mean Squared Error (MSE): similar to RSS, <font color=red>non-negative</font>, and a value of 0 (almost never achieved in practice) would indicate a perfect fit to the data.

$$Mean Squared Error =  \frac{1}{N} \Sigma _{j=1}^N(y_i-\hat{y}_i)^2$$ 

$$MSE = \frac{1}{N}RSS$$

- RMSE, MSE, and MAE are all for <font color=red>regression</font> models: they <font color=red>don’t</font> gives us any idea of the <font color=red>direction</font> of the error i.e. whether we are under predicting the data or over predicting the data. Sklearn has these two functions.



||| [Index](../../)||| [Prev](../metrics-for-evaluation/)||| [Next](../model-validation/)|||
