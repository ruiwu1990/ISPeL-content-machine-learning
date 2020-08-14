---
layout: post
title: Power Sets
---

For any set $$S,$$ drilling down we note that the $$\emptyset$$ is always contained inside $$S$$ as a subset of $$S.$$ Drilling up, the set $$S$$ is contained in the Power Set of $$S.$$ The Power Set of $$S,$$ denoted $$\mathcal{P}(S),$$ is the collection of all possible subsets of $$S.$$ 

**Example 1:**
For the set of characters $$S = \{ A, B, C, D\},$$ to define the set of all possible subsets each element is considered in turn and the binary question "Is this element included in the subset?" is executed.  There are two answers to this question, yes and no, and there are three elements giving us $$2^3 = 8$$ possible subsets of $$S.$$  $$\mathcal{P}(S) = \{\{ \}, \{ A\}, \{ B\},\{ C\}, \{ A, B\}, \{ A, C\}, \{ B, C\}, \{ A, B, C\}\}.$$   To use the notation for the size, or cardinality, of sets here in this case the size of the set $$S$$ is $$\vert S\vert = 3$$ and $$\vert \mathcal{P}(S)\vert = 8.$$

Note that as the size $n$ grows for sets, the size of the Power Set for sets grows exponentially with base $$2.$$ In Example 1, the set $$S$$ is fininte in that it has $$n = 3.$$  

In general, the size of the Power Set of a finite set $$S$$ with size $$\vert S \vert = n$$ is $$2^{\vert S \vert}.$$  For a countably infinite or infinite set $$S$$, the Power Set of $$S$$ is uncountable with size $$\infty.$$  This previous statement is a part of what is known as Cantor's Theorem. 

**Example 2:**
Let $$\sigma = {a, b}$$ be the alphabet for a language and the words of this language are constructed with the regular expression rule $$\{ a, b\}^*$$ which means that the words in the language are the elements of the set $$\Gamma = \{\emptyset, a, b, aa, ab, bb, ba, aaa, aab, aba, ...\}.$$ This language is the countably infinte collection of finite strings composed of the characters $$a$$ and $$b.$$ The Power set of $$\Gamma$$ represents all possible documents "written" using the language $$\Gamma$$ (excluding white space, punctuation and any metadata in the document).  The Power set of $$\Gamma$$ is an infinite set.

<br/>

|||[Index](../../../../) ||| [Previous](../../derivedidentities) ||| [Next](../partitions)
