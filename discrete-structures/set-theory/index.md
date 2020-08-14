---
layout: post
title: Introduction to Sets
---


A basic structure for storing collections of elements in Mathematics and Computer Science is called a **set**. 

**Sets** are unordered collections of elements. Simply put, a set is a structure with "low overhead" for keeping track of distinct elements that do not need to be accessed in a paricular order. 

Here are some important things to keep in mind about sets:<br>
1. The elements in a set are unordered.<br>
2. The elements in a set are unique, no duplicates.<br>
3. The presumption is that there is a relation defined on the elements that determines when two elements are the same. <br>

An example of a set that you may relate to is a collections of songs set to form a non-repeating, random playlist.  Other common sets are: the set of all Real numbers, the set of all right triangles, the set of Marsupials, and the set of all reserved keywords in Python.  In applications, a set can be used to collect information from business transactions or data comprising a patient's health record. 

Set theory entails the study of sets, the interaction of elements within a set, the operations that can be performed on sets and the truths that are implied from the assumptions made about a set or collection of sets.

There are a couple of ways to create a set.  If the set is small or the elements have a pattern between them that can be explicitly written, the set can be defined with an comma-separated list wrapped in curly brackets.

**Example 1:**
*We create a set named A by listing the elements in the set,* $$ A = \{1, 2, 3, 4\}$$

The set A in Example 1 contains four elements: 1, 2, 3, and 4.  To emphasize that ordering in a set does not matter, the set A can also be written equivalently as  $$A = \{2, 3, 4, 1\} = \{2, 4, 1, 3\}.$$

A second method to create a set is to specify a rule that must be satisfied by the element, that is the statement must be true for the element, in order for the element to be in the set.  

In Example 2, we defined a set within the context of a web browser.  Web content is inspected (crawled) and indexed by service providers to help users find information.  A part of that process is knowing what words are on a webpage.  

**Example 2:**
*Define the rule "r(x) = If x is a word on the current page, then x is in the set S."
Here the set S is a collection of words that we can then use to index the page with. Even though the words on the page have a contextual ordering, S will be an unordered collection.  Also, on our current page, the word "set" appears many times, but "set" will only be included in S once.*

There are many sets in mathematics that are so common they have reserved names. The following two examples are sets used frequently.

**Example 3:**
*The set $${Z}^+$$ is the set of all positive integers.
Note that there is no end to the list of positive integers. The set $${Z}^+$$ has an infinite number of elements, but we can still define $${Z}^+$$ with set notation using an ellipse, a set of three lower dots, at the end to suggest the pattern.* $${Z}^+ = \{ 1, 2, 3, ...\}$$

**Example 4:**
*The set $${Z}$$ is the set of all integers. An ellipse is used at the beginning and the end of the list to indicate that the list is infinite in both directions and continues the pattern.* $${Z} = \{ ... , -3, -2, -1, 0, 1, 2, 3, ...\} $$


The sets $${Z}$$ and $${Z}^+$$ are both infinite sets since the listing of elements continues without stopping. However, we could number these elements so the size of these sets is said to be "countably infinite." We will cover the idea of a set's size later. The important point for now is that you can list out elements in an infinte set if there is a clear pattern for the next element.  Our final example illustrates another important countably infinte set of numbers.  What would you call the following set?


**Example 5:**
*A number x is in the set E if and only if $$x = 2y$$ for some element y in $$Z.$$*

$$E = \{ ... , -4, -2, 0, 2, 4, ...\}$$

A note about the language used in Example 5.  The phrase "if and only if" is used to help break down the statment used to define the set $$E$$ in a way that will come in handy when proving an element is in the set $$E$$ and when examining the structure of any element we know to be in the set $$E.$$ Later, we learn to break "if and only if" statements into two statements.


<!---  an attempt at embedding a youtube video in 
<a href="https://www.youtube.com/watch?v=7mpybTk5iy4">Video Recording of The Defintion of a Set</a>

{% include youtubePlayer.html id=page.7mpybTk5iy4 %}
--->

<br/>

||| [Index](../../)||| [Prev](../../)||| [Next](examples/)|||
