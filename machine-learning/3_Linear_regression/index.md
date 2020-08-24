---
layout: post
title: Linear Regression
---

### Simple linear regression using a single predictor X.

- We <span style="background-color: #FFFF00">assume a model</span>

$$Y = \beta_0 + (\beta_1)X + \epsilon$$

- where \beta_0 and \beta_1 are two unknown constants that represent the <span style="background-color: #FFFF00">intercept</span> and <span style="background-color: #FFFF00">slope</span>, also known as <span style="background-color: #FFFF00">coefficients</span> or <span style="background-color: #FFFF00">parameters</span>, and $$\epsilon$$ is the error term.
- Given some $$\hat(\beta_0)$$ and $$\hat(\beta_1)$$ for the  model cofficients, we predict future sale using  $$\hat(y) = \hat(\beta_0) + \hat(\beta_1),$$ 

- where $$\hat(y) indicates a prediction of $$Y$$ on the basis of $$X=x$$
- The hat symbol denotes an <span style="background-color: #FFFF00">estimated value</span>.

## Estimation of the parameters by least squares
- Let $$\hat{y} _i = \hat{ \beta }_0 +  \hat{ \beta }_ix_i$$ be the prediction for Y based on the ith value of X. Then $$e_i =y_i - \hat{y}_i$$ represents the ith <font color=green>residual</font>
- We define the <span style="background-color: #FFFF00">residual sum of squares</span> (RSS) as
$$RSS = e_1^2 + e_2^2 +...+ e_n^2,$$
or equivalently as
$$RSS = (y_1- \hat{ \beta }_0 +  \hat{ \beta }_ix_1)^2+(y_2 - \hat{ \beta }_0 +  \hat{ \beta }_ix_2)^2+...+(y_n -\hat{ \beta }_0 +  \hat{ \beta }_ix_n)^2$$
- The least squared approach chooses $$\hat{\beta}_0$$ and $$\hat{\beta}_1$$ to minimize the RSS. The minimizing values can be shown to be $$\hat{ \beta} _1 = \frac{ \Sigma _{i=1}^n(x_i- \overline{x})(y_i- \overline{y})}{ \Sigma _{i=1}^n(x_i- \overline{x})^2}, \hat{ \beta_0} = y -  \hat{ \beta_1 \overline{x}},$$ where $$\overline{y} \equiv \frac{1}{n} \Sigma_{i=1}^ny_i$$ and $$\overline{x} \equiv \frac{1}{n} \Sigma_{i=1}^nx_i$$ are the <span style="background-color: #FFFF00"> sample means.</span>


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

||| [Index](../../)||| [Prev](../)||| [Next](lin-reg2/)|||
