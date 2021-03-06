---
layout: post
title: Examples of Sets
---
We demonstrated two ways to create a set: enclosing a comma seperated list of the elements in curly brackts and constructing a well-defined rule that determines if an element is in the set.

When listing out the elements for a set, the types of elements is explicit.  Here are several sets with their standard notation. 

**Example 1**

*The set of all integers* $$Z = \{...,-3, -2, -1, 0, 1, 2, 3, ...\}$$<br>

*The set of all positive integers*  $$Z^+ = \{1, 2, 3, ...\}$$<br>

*The set of all negative integers*  $$Z^- = \{-1, -2, -3, ...\}$$<br>

*The set of natural numbers* $$N = \{0, 1, 2, 3, ...\}$$<br>

Notice that there is some overlap between the above sets, as if we could build say $$Z^+$$ from $$N$$ by just adding on the element "0."  We will definitely want to take advantage of the idea of building one set from other sets later when we look at the union of two sets.  The idea of creating a new set by removing some of the elements is also hinted at here.  We could transform the set $$Z$$ into the set $$N$$ by taking the set difference of the super set $$Z$$ and the smaller, subset $$Z^-$$ to leave only the natural numbers $$N.$$

The next example illustrates the use of a well-defined rule to construct a set.

**Example 2**

*Let our rule be:*

*The number $$q$$ is in the set $$Q$$ if and only if $$q$$ can be written as the quotient x divided by y, where x and y are both in the set $$Z,$$ and y does not equal 0.*

One element in the set defined by this rule is $$ q = 2,$$ since we could let $$x = 2,$$ $$y = 1$$ so that both $$x$$ and $$y$$ are in $$Z,$$ $$q = x/y = 2/1$$, and $$y$$ is not 0.  In this way, every integer is in $$Q.$$ The set $$Q$$ also contains the values: $$1/2,$$ $$2/3,$$  $$-4/9$$ and $$34567/10000 = 3.4567.$$  The set $$Q$$ is the set of all values with decimal values that are finite or have a repeating decimal representation.  The set $$Q$$ is known as the set of all Rational numbers.  

A similar set to $$Q$$ is the set of all Gaussian Integers, $$Z[i].$$  In Example 3, the definition builds the set $$Z[i]$$ by using two copies of $$Z.$$ 

**Example 3**
*Let our rule be:*

*The set* $$Z[i]$$ *consists of all numbers $$z$$ so that $$z$$ is of the form  $$x + yi$$, where $$x$$ and $$y$$ are both in the set $$Z$$*

The crafting of a set from other sets as in Example 3 is very useful, and this method deserves some dedicated notation. An ordered n-tuple of elements ($$x$$<sub>$$1$$</sub>, $$x$$<sub>$$2$$</sub>,..., $$x$$<sub>$$n$$</sub>) where $$x$$<sub>$$i$$</sub> is an element of set $$S$$<sub>i</sub>. In both $$Q$$ and $$Z[i]$$ ordered pairs of elements $$(x,y)$$ with $$x,y$$ in $$Z$$ are used in the definition of sets $$Q$$ and $$Z[i].$$  This technique is used frequently in Mathematics and Computer Science.

All of the sets in the previous Examples are countably finite. This means that we could come up with ways to match all the elements in each of the sets exactly to the set of natural numbers, $$N.$$ This is not always possible for every set.

**Example 4**
*The following are well known sets that each contain an infinite number of elements. 	The third set, the set of Complex numbers, is defined using two copies of the infinte set* $$R.$$*

*The set of all reals* $$R$$ 

*The set of all irrational numbers* $$I$$ 

*The set of all complex numbers* $$C = \{x + yi $$ where x,y are in $$R\} = \{(x,y) $$ where $$x, y$$ are in $$R\}$$
	
|||[Index](../../../)||| [Prev](../)||| [Next](../universalset)