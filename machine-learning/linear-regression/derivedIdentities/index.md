---
layout: post
title: Derived Set Indenties
---



There are a number of binary operations defined on sets.  There are properties of these operations that imply the truth of statements.  These implied true statements are called identities.  

The following outlines some of the known identites first by operation and then the statements that involve more than one operation. Some of the identites were already introduced in the sections for the operation. In each of the following, let $$A, B$$ and $$C$$ be sets. The Universal set is $$U,$$ while the Empty set is $$\emptyset.$$  Remember, a statement is not true if there exists one example for which the statement is not true.  You cannot prove the truth of a statement by showing the statement holds for one example.

*Set Union:*

1. identity law, $$A \cup U = U$$ 

2. domination law, $$A \cup \emptyset = A$$

3. idempotent law, $$A \cup A = A$$

4. complement law, $$A \cup A^{c} = U$$

5. commutative law, $$A \cup B = B\cup A$$

6. associative law, $$ ( A \cup B  )\cup C = A\cup ( B \cup C )$$


*Set Intersection:*

1. identity law, $$A \cap U = A$$

2. domination law, $$A \cap \emptyset = \emptyset$$

3. idempotent law, $$A \cap A = A$$

4. complement law, $$A \cap A^{c} = \emptyset$$

5. commutative law, $$A \cap B = B \cap A$$

6. associative law, $$ ( A \cap B  )\cap C = A \cap ( B \cap C )$$


*Set Symmetric Difference:*

The symmetric difference of a set with the Universal set is the Emptyset:

$$A \Delta U = \emptyset$$

The symmetric difference of a set with the Emptyset returns the set:

$$A \Delta \emptyset = A$$

The symmetric difference of a set with itself is the original set:

$$A \Delta A = \emptyset$$

The symmetric difference of a set with with the set's complement is the Emptyset:

$$A \Delta A^{c} = A$$

Symmetric difference is not commutative:

$$A \Delta B \neq B \Delta A$$

The associative law holds for set symmetric difference:

$$ ( A \Delta B  )\Delta C = A \Delta ( B \Delta C )$$


*Cartesian Product:*

1. $$ A \times \emptyset = \emptyset A= \emptyset $$

2. $$ A \times ( B \cup C ) = ( A \times B  ) \cup  ( A \times C  )$$

3. $$ A \times ( B \cap C  ) = ( A \times B ) \cap  ( A \times C  )$$

4. $$ A \times ( B \times C  ) =  ( A \times B  ) \times C $$


*Absorption Laws regarding Set Union and Intersection:*

1. $$ A \cap (A \cup B) = A$$

2. $$ A \cup (A \cap B) = A$$


*Distributive Laws regarding Set Union and Intersection:*

1. $$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$

2. $$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$


*Intersection distributes over Symmetric Set Difference:*

1. $$A\cap \left ( B\Delta C \right )=\left ( A\cap B \right )\Delta \left ( A\cap C \right )$$


*Intersection written in terms of Set Difference*

1. $$A \cap B = A - (A - B)$$

*The Complement distributes over Set Union, Set Intersection and Set Difference and Set Symmetric Difference:*
1. $$U^{c} = \emptyset$$

2. $$(\emptyset)^{c} = U$$

3. $$(A \cap B)^{c} = A^{c} \cap B^{c}$$

4. $$(A \cup B)^{c} = A^{c} \cup B^{c}$$

5. $$(A^{c})^{c} = A$$

6. $$A \Delta B = A^{c} \Delta B^{^{c}}$$

7. $$\emptyset^{^{c}} = U $$

8. $$ U^{c}=\emptyset $$


*DeMorgan's Laws:*

1. $$(A \cap B)^{c} = A^{c} \cap B^{c}$$

2. $$(A \cup B)^{c} = A^{c} \cup B^{c}$$

*Distributive laws:*

1. $$A\cap \left ( B\cup C \right )=\left ( A\cap B \right )\cup \left ( A\cap C \right )$$

It is a very good idea to experiment with a statement's validity with concrete examples before trying to prove the statement.  You just might get lucky and find either a hint to the sequence of statements that would provide a proof or a counter-example to the statement.  For example, while not an acceptable form of proof for the statement, $$\left ( A\cap B\right )^{c}=A^{c}\cup B^{^{c}},$$

there is value in noticing that the Venn Diagram for the left hand side and right hand side of the statment do not disprove the statement.  It is a very good idea to experiment with a statement's validity with concrete examples before trying to prove the statement.  You just might get lucky and find either a hint to the sequence of statements that would provide a proof or a counter-example to the statement.

{% include marginfigure.html id="deMorg" url="assets/img/F3.png" description="Venn Diagram to conceptualize idea behind the Distributive Law, that set intersection distributes over set union. " %}
<!--- <img src="../../../../assets/img/F3.png" alt="Drawing" style="width: 333px;" align="center;"> --->
<!---  <img src="../../../../assets/img/F3.png" alt="Drawing" style="width: 333px;" align="center;"> --->


Let $$A, B$$ and $$C$$ be arbitrary finite sets.

We can generalise De Morgan's laws to any number of sets
$$\left ( \bigcup_{n} S_{n}\right )^{_{c}}=\bigcap_{n}S_{n}^{c}$$
$$\left ( \bigcap_{n} S_{n}\right )^{_{c}}=\bigcup_{n}S_{n}^{c}$$
where $$S_n, n=1,2,3,...,n $$ are arbitrary sets.

A proof of DeMorgan's laws $$( A \cap B )^{c} = A^{c}\cup B^{^{c}}$$.

To prove that $$( A \cap B )^{c} \subseteq A^{c}\cup B^{^{c}},$$ let $$x \in ( A \cap B  )^{c}.$$
Then $$ x \notin  ( A \cap B  ).$$ This implies that either $$$ x \notin A \text{ or } x\notin B.$$ We then have that $$x \in A^{c}\cup B^{c}.$$
Now let $$x \in  A^{c}\cup B^{^{c}}.$$ Then $$x \in A^{c } \text{ or } x \in B^{c}$$ which means that $$x \in A^{c}\cup B^{c}
\blacksquare$$

|||[Index](../../../)||| [Prev](../operations/cartesian-product)||| [Next](../partitions/power-set)

