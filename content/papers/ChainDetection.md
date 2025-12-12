+++
title = "Chain-Detection Between Clusters"
slug = "chain-detection"  # Use only lowercase letters, numbers, and hyphens
date = 2019-11-01T12:00:00+02:00
draft = false

year = 2019
authors = ["Janis Held", "Anna Beer", "Thomas Seidl"]
venue = "Datenbank-Spektrum (Springer Berlin Heidelberg)"
summary = "Short summary of the paper."

tags = ["clustering"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://link.springer.com/article/10.1007/s13222-019-00324-9"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "Chains connecting two or more different clusters are a well known problem of clustering algorithms like DBSCAN or Single Linkage Clustering. Since already a small number of points resulting from, e. g., noise can form such a chain and build a bridge between different clusters, it can happen that the results of the clustering algorithm are distorted: several disparate clusters get merged into one. This single-link effect is rather known but to the best of our knowledge there are no satisfying solutions which extract those chains, yet. We present a new algorithm detecting not only straight chains between clusters, but also bent and noisy ones. Users are able to choose between eliminating one dimensional and higher dimensional chains connecting clusters to receive the underlying cluster structure. Also, the desired straightness can be set by the user. As this paper is an extension of [8], we apply our technique not only in combination with DBSCAN but also with single link hierarchical clustering. On a real world dataset containing traffic accidents in Great Britain we were able to detect chains emerging from streets between cities and villages, which led to clusters composed of diverse villages. Additionally, we analyzed the robustness regarding the variance of chains in synthetic experiments."
+++

