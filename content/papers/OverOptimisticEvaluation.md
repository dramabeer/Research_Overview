+++
title = "Over-optimistic evaluation and reporting of novel cluster algorithms: an illustrative study"
slug = "over-optimistic-evaluation"  # Use only lowercase letters, numbers, and hyphens
date = 2023-03-17T12:00:00+02:00
draft = false

year = 2023
authors = ["T Ullmann", "A Beer","M Hünemörder", "T Seidl", "AL Boulesteix"]
venue = "Advances in Data Analysis and Classification (Springer Berlin Heidelberg)"
summary = "Short summary of the paper."

tags = ["Clustering", "Evaluation"] # Add as needed
pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://link.springer.com/article/10.1007/s11634-022-00496-5"  # Optional external link



abstract = 'Despite the popularity of density-based clustering, its procedural definition makes it difficult to analyze compared to clustering methods that minimize a loss function. In this paper, we reformulate DBSCAN through a clean objective function by introducing the density-connectivity distance (dc-dist), which captures the essence of density-based clusters by endowing the minimax distance with the concept of density. This novel ultrametric allows us to show that DBSCAN, k-center, and spectral clustering are equivalent in the space given by the dc-dist, despite these algorithms being perceived as fundamentally different in their respective literatures. We also verify that finding the pairwise dc-dists gives DBSCAN clusterings across all epsilon-values, simplifying the problem of parameterizing density-based clustering. We conclude by thoroughly analyzing density-connectivity and its properties -- a task that has been elusive thus far in the literature due to the lack of formal tools. Our code recreates every experiment below: https://github.com/Andrew-Draganov/dc_dist'
+++


