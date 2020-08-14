---
layout: post
title: Cartesian Product
---

While sets are unordered collections of elements, we have constructed a few examples of sets like the Guassian Integers, $$Z[i],$$ the rational numbers, $$Q,$$ and the Complex Numbers, $$C,$$ informally using the notion of a $$2-tuple$$ or ordered pair.  

A $$2-tuple$$ or ordered pair of elements $$a$$ and $$b$$ is a structure that can be defined by a paranthetic listing of comma seperated elements in the desired order.  A very common usage of an ordered pair is in the representation of a real function on the plane. 

**Example 1:**
The graph of the function $$f(x) = x^{2} $$ from the source (domain) set $$X = \{-2, -1, 0, 1, 2\}$$ to the destination (image) set $$\{4, 1, 0\}$$ would be the collection of $$2-tuples$$ $$\{(-2,4), (1, 1), (0, 0), (1, 1), (2, 4)\}$$ plotted in a two-dimensional plane. 

The order in which the objects appear in the pair is important.
In other words, $$(a,b) \neq (b,a).$$ From Example 1, if we instead graphed the point $$(4, -2),$$ many conditions for the function $$f(x)$$ definition would be false.  Firstly, the element $$ 4$$ is not in the source set of the function $$f.$$ Secondly, the statement $$f(4) = 4^2 = -2$$ is false.  Lastly, the element $$ -2$$ is not in the destination set. 

Ordered pairs are also called 2-tuples.  The Cartesian product of two sets $$A$$ and $$B$$, denoted $$A \times B$$, is the set of all ordered pairs $$(a,b)$$ where $$a \in A$$ and $$b \in B$$. Using our set notation, $$A \times B = \{(a,b) \text{ such that } a \in A, b \in B\}.$$

**Example 2:**
Let $$A = \{1,2,3\}$$ and $$B = \{a,b,c\}$$,
then $$A \times B = \{(1,a) , (1,b) , (1,c) , (2,a) , (2,b) , (2,c) , (3,a) , (3,b) , (3,c) \}$$.

The new set is derived from the original sets by following these steps:

{% highlight python %}
    Create an empty set A x B;
    For every element a in the set A:
         For every element b in the set B:
             add the ordered pair (a,b) to the set A x B
{% endhighlight %}           
             
The Cartesian product operator is a binary operator on sets like set union, set intersection and set difference in that all four of these operations take two sets $$A$$ and $$B$$ as input.  Set union, set intersection and set difference all return a set whose elements are either elements the set $$A$$ or the set $$B.$$ However, for the Cartesian product, the destination set contains elements that are ordered pairs. 

Consequently, for the Cartesian product operation, there does not exist an element that preserves a set.  In other words, for every set $$A$$ there is no set $$B$$ so that $$A \times B = A.$$

The Cartesian product operator is not commutative. For all sets $$A$$ and $$B,$$ $$A \times B  \neq B \times A$$ as order is important in ordered pairs.

Also, the Cartesian product is not associative:
    $$(A \times B) \times C \neq A \times (B \times C)$$
    
Going back to the creation of the Cartesian Product of sets $$A$$ and $$B,$$ we note that for each element $$a$$ in $$A$$ there are at least $$\vert B\vert ,$$ the size of the set $$B$$, ordered pairs in $$A \times B.$$  In other words for a given $$a \in A,$$ the set $$ S_{a} = \{(a, b)$$ where $$ b $$ is in $$ B\}$$ is contained in  $$A \times B.$$ There are $$\vert A\vert $$ sets $$S_{a},$$ and no two sets $$S_a$$ and $$S_{a'}$$ share any elements (they are disjoint sets) for unequal elements $$a$$ and $$a'$$ in $$A.$$ 

By continuing the above sequence of statements, we could construct a proof of the following:
Let $$A$$ and $$B$$ be sets, then the size of the set $$A \times B,$$ denoted $$\vert A \times B\vert $$ and referred to as the cardinality of the set $$A \times B$$, is  $$\vert A\vert  \cdot \vert B\vert $$.

**Example 3:**
In Example 2, $$\vert A\vert $$ and $$\vert B\vert  = 3.$$ The set $$\vert A \times B\vert  = 6 = 2 \cdot 3.$$

If one of the set terms in the Cartesian product operation is infinte, then the Cartesian product set is infinite.  If both sets are countable, then the Cartesian product is countable. 


||| [Index](../../../../)|||  [Prev](../set-symm-diff)|||  [Next](../../derivedidentities)
