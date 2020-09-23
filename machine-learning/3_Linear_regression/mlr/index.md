---
layout: post
title: Multiple Linear Regression
---

## Here our model is

$$Y=\beta_0+\beta_1X_{1}+\beta_2X_{2}+...+\beta_pX_{p}+ \epsilon,$$

-We interpret $$\beta_j$$ as the average effect on Y of a one unit increase in $$X_j$$, holding all other predictors fixed. In the advertising example, the model becomes

$$sales=\beta_0+\beta_1*TV+\beta_2*radio+\beta_3*newspaper+\epsilon.$$
 
## The ideal scenario is when the <span style="background-color: #FFFF00">predictors are uncorrelated</span>
A <font color=green>balanced design</font>:
- Each coefficient can be estimated and tested separately.
- Interpretations such as <font color=green>"a unit change in $$X_j$$ is associated with a $$\beta_j$$ change in Y, while all other variables stay fixed"</font>, are possible.
- In other words, Y should be <font color=red>highly correlated</font> with predictors (X), but predictors (X) should be <font color=red>uncorrelated</font>.

## <span style="background-color: #FFFF00">Correlations amongst predictors</span> cause problems:
- The variance of all coefficients tends to increase, sometimes dramatically
- Interpretations become hazardous - when $$X_j$$ changes, everthing else changes.
- Statistical explanation--mutual information: <https://www.youtube.com/watch?v=U9h1xkNELvY>

$$Y=\beta_0+\beta_1X_{1}+\beta_2X_{2}+...+\beta_pX_{p}+ \epsilon,$$

## Estimation and Prediction for Multiple Regression
- Given estimates $$\hat{\beta_0},\hat{\beta_1},...\hat{\beta_p}$$, we can make predictions using the formula

$$\hat{y}=\hat{\beta_0}+\hat{\beta_1}{x_1}+\hat{\beta_2}{x_2}+...+\hat{\beta_p}{x_p}$$

- We estimate $${\beta_0},{\beta_1},...{\beta_p}$$ as the values that minimize the sum of squared residuals

$$RSS =  \Sigma _{i=1}^n(y_i-\hat{y}_i)^2$$

$$=\Sigma _{i=1}^n(y_i-\hat{\beta_0}-\hat{\beta_1}{x_{i1}}-\hat{\beta_2}{x_{i2}}-...-\hat{\beta_p}{x_{ip}})^2$$

- This is done using standard statistical software. The values $$\hat{\beta_0},\hat{\beta_1},...\hat{\beta_p}$$ that minimize RSS are the multiple <span style="background-color: #FFFF00">least squares regression coefficient estimates.</span>


![](mlr.png)

||| [Index](../../)||| [Prev](../lin-reg2/)||| [Next](../lin-reg3/)|||
