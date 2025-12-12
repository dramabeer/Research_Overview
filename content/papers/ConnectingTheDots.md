+++
title = "Connecting the Dots--Density-Connectivity Distance unifies DBSCAN, k-Center and Spectral Clustering"
slug = "connecting-the-dots"  # Use only lowercase letters, numbers, and hyphens
date = 2023-08-04T12:00:00+02:00
draft = false

year = 2023
authors = ["Anna Beer", "Andrew Draganov", "Ellen Hohma", "Philipp Jahn", "Christian MM Frey", "Ira Assent"]
venue = "Proceedings of the 29th ACM SIGKDD conference on knowledge discovery and data mining"
summary = "Short summary of the paper."

tags = ["clustering", "density-based"]  # Add as needed
pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://dl.acm.org/doi/abs/10.1145/3580305.3599283"  # Optional external link
tutorial = "https://medium.com/@khurramhashmi11/what-is-the-dc-distance-1b880a6bcd4d"             # Optional related tutorial
code="https://github.com/Andrew-Draganov/dc_dist"
presentation = "presentation.pdf" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param


abstract = 'Despite the popularity of density-based clustering, its procedural definition makes it difficult to analyze compared to clustering methods that minimize a loss function. In this paper, we reformulate DBSCAN through a clean objective function by introducing the density-connectivity distance (dc-dist), which captures the essence of density-based clusters by endowing the minimax distance with the concept of density. This novel ultrametric allows us to show that DBSCAN, k-center, and spectral clustering are equivalent in the space given by the dc-dist, despite these algorithms being perceived as fundamentally different in their respective literatures. We also verify that finding the pairwise dc-dists gives DBSCAN clusterings across all epsilon-values, simplifying the problem of parameterizing density-based clustering. We conclude by thoroughly analyzing density-connectivity and its properties -- a task that has been elusive thus far in the literature due to the lack of formal tools. Our code recreates every experiment below: https://github.com/Andrew-Draganov/dc_dist'
+++

