+++
title = "I Want'Em All (At Once): Ultrametric Cluster Hierarchies"
slug = "i-want-em-all-at-once"  # Use only lowercase letters, numbers, and hyphens
date = 2025-02-19T12:00:00+02:00
draft = false

year = 2025
authors = ["Andrew Draganov*", "Pascal Weber*", "Rasmus Skibdahl Melanchton Jørgensen", "Anna Beer", "Claudia Plant", "Ira Assent"]
venue = "arXiv preprint arXiv:2502.14018"
summary = "Hierarchical similarity measures are awesome. If you use an ultrametric (such as the minmax distance or some trees coming from index structures) as similarity measure for clustering, you can represent it as a hierarchy. Then, optimizing quite some loss-functions, e.g., for k-Means or k-Center is very fast. The results for different k build another hierarchy from which you can chose the best partitioning to get a flat clustering with diverse methods (thresholding is the simplest). Basically, our presented framework called SHiP (Similarity-Hierarchy-Partitioning) offers a lot of different, meaningful clusterings that you get in an instant once the ultrametric similarity is given - a tool offering these advantages to non-computer scientists will come soon."

tags = ["clustering", "hierarchical"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://arxiv.org/abs/2502.14018"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "Hierarchical clustering is a powerful tool for exploratory data analysis, organizing data into a tree of clusterings from which a partition can be chosen. This paper generalizes these ideas by proving that, for any reasonable hierarchy, one can optimally solve any center-based clustering objective over it (such as k-means). Moreover, these solutions can be found exceedingly quickly and are themselves necessarily hierarchical. Thus, given a cluster tree, we show that one can quickly access a plethora of new, equally meaningful hierarchies. Just as in standard hierarchical clustering, one can then choose any desired partition from these new hierarchies. We conclude by verifying the utility of our proposed techniques across datasets, hierarchies, and partitioning schemes. "
+++

