---
layout: post
title: Complement of a Set
---

For a set $$S,$$ we define the complement of $$S$$ to be the collection of all the elements not in $$S.$$  If there is a Universal set $$U,$$ then the complement of set $$S$$ is the set containing all elements in $$U$$ that are not $$S.$$

Using set notation, the complement of a set $$S$$ is the set $$\{ x \vert x \in U \text{ and } x \notin S \}$$
 
There is no concensus for the notation of the complement of $$S.$$ Here are just a few of the ways the complement of a set can be referenced:

$$S^{c}$$<br>
$$S^{'}$$<br>
$$\bar{S}$$<br>
$$S^{~}$$

and if U is the Universal set, then the complement of S is also written:
$$U - S$$

**Example 1:**
For the set $$Z^+$$ of all positive integers, the complement of $$Z^+$$ is the set of all negative integers $$Z^-$$ unioned with the set containing $$0.$$ That is $${Z^{+}}^{c} = Z^- \cup \{0\} = \{...,-3, -2, -1, 0\}$$

**Example 2:**
Take the universal set to be the set of all integers, $$Z.$$
The set of all even integers $$E$$ is contained in $$Z$$ thus $$E$$ is a subset of $$Z.$$ The complement of $$E,$$ $$\bar{E} = U - E,$$ is the set of all odd integers.

**Example 3:** 
Let $$M = 3Z$$ be the set of integers that are multiples of 3.
Since there is a pattern defined among the elements of the collection $$M,$$ we can list out the elements with our set notation: $$M = \{....,-9,-6,-3,0,3,6,9,....\}$$\\
A rule for defining the compliment of M would be "the set of all integers $$x$$ so that when $$x$$ is divided by $$3,$$ the remainder is either $$1 or 2,$$"
or using set notation (read $$\vert$$ as "such that" and $$\in$$ as "is an element of"):
$$\bar{M} = \{ x \in Z \text{ such that } x = 3q + r \text{ where } q \in $$Z$$ \text{ and } r \in \{ 1, 2\}\}$$

Finding the  complement of a set $$S$$ is a unary operator on the set of all possible sets.  In other words complement operator is a mapping from all possible sets to all possible sets.  The mapping takes as input a set $$S$$ as the source, and projects this source to the set's complement.  

**Example 4:**
To simplify, we take the Universal set $$U$$ to be the subset of integers $$U = \{ 0, 1, 2\}.$$  Let $$S = \{ 0, 2\}.$$ Then the complement of $$S$$ is the set $$\bar{S} = \{ 3\}.$$

To further illustrate the complement as an operator, the set of all possible sets in $$U$$ is the set $$\{\{ \}, \{ 0\}, \{ 1\},\{ 2\}, \{ 0, 1\}, \{ 0, 2\}, \{ 1,2\}, \{ 0, 1, 2\}\}.$$  The complement operator in this case. is the mapping:
$$\{ \} \rightarrow \{ 0, 1,2\},$$
$$\{ 0\} \rightarrow \{ 1,2\},$$
$$\{ 1\} \rightarrow \{ 0, 2\},$$
$$\{ 2\} \rightarrow \{ 0, 1\},$$
$$\{ 0, 1\} \rightarrow \{ 2\},$$
$$\{ 0, 2 \} \rightarrow \{ 1\},$$
$$\{ 1, 2\} \rightarrow \{ 0 \},$$
$$\{ 0, 1, 2\} \rightarrow \{ \}.$$

By defining the complement of a set to be a mapping from the set of all sets to itself, we can apply this map more than once.  In mathematical terms, we can take the composition of the complement with the complemen as Example 4 illustrates:

**Example 5:**
In Example 3, the complement of the set $$\{ 2\}$$ is the set $$\{ 0, 1\}.$$  We can now take the complement of this destination set for $$\{2 \}$$ so that 

$$ \{2 \} \longrightarrow \bar{\{2\}} = \{ 0, 1\} \longrightarrow \bar{\bar{\{ 2\}}} = \{ 2\}$$

Observe that the complement of the complement of the set $$\{ 2\}$$ in Example 4 is the original set $$\{ 2\}.$$ In general, the complement of the complement of a set is the set: $$\bar{\bar{S}} = S.$$ In mathematics, a function that is its own inverse is called an involution.  The complement is a function, a mapping, from the set of all sets to the set of all sets. For every set $$S,$$ the mapping is $$S \rightarrow S^{c}.$$  The inverse function is the mapping with the same Domain and Range sets
that takes $$S^{c}$$ to $$S.$$ It can be proven that these two functions are the same mapping. 

For a given set $$A$$ and Universal set $$U,$$ the complement $$\bar{A} = A^{c}$$ is the set of all elements that are not in A (but are in U). The Venn diagram below illustrates the relationship between the sets $$A, A^{c} \text{ and } U.$$ The grey shaded area is the complement of $$A.$$

{% include marginfigure.html id="set-comp" url="assets/img/set-complement.svg" description="The complement of the set A, $$A^{c},$$ is the set containing all elements in the Universal set that are not in A. " %}
<!--- <img src="../../../../assets/img/set-complement.svg" alt="Drawing" style="width: 333px;" align="center;"> --->


 
Now, the complement of the shaded area, the complement of $$A,$$ is the set of all elements in $$U$$ not in $$A^{c}.$$  Therefore $$( A^{c})^{c} = A$$

It is natural to wonder about the two end cases for sets, the Empty set and the Universal set. What are the complements of these two sets?

The Universal set, $$U,$$ is the collection of all possible elements. Thus, there are no elements $$x$$ that are in $$U$$ and not in $$U,$$ $$x \notin U.$$ Writing the complement of $$U$$ using our set difference notation, $$\bar{U} = U - U = \emptyset.$$. 

In the case of the Empty set, $$\emptyset,$$ the set does not contain any elements. The definition of the complement of $$\emptyset,$$ denoted $$\bar{\emptyset},$$ is the collection of elements $$x$$ that are not in $$\emptyset.$$ We then have that for all $$x,$$ $$x \in \bar{\emptyset}.$$

||| [Index](../../../../)|||  [Prev](../countable-and-uncountable)|||  [Next](../../operations/set-union/)



