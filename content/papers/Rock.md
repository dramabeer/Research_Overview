+++
title = "Rock: Let the points roam to their clusters themselves"
slug = "rock"  # Use only lowercase letters, numbers, and hyphens
date = 2019-01-01T12:00:00+02:00
draft = false

year = 2019
authors = ["Anna Beer", "Daniyal Kazempour", "Thomas Seidl"]
venue = "Proceedings of the 22nd International Conference on Extending Database Technology (EDBT)"
summary = "Short summary of the paper."

tags = ["clustering"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://openproceedings.org/2019/conf/edbt/EDBT19_paper_217.pdf"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "In this work we present Rock, a method where the points Roam to their clusters using k-NN. Rock is a draft for an algorithm which is capable of detecting non-convex clusters of arbitrary dimension while delivering representatives for each cluster similar to, eg, Mean Shift or k-Means. Applying Rock, points roam to the mean of their k-NN while k increments in every step. Like that, rather outlying points and noise move to their nearest cluster while the clusters themselves contract first to their skeletons and further to a representative point each. Our empirical results on synthetic and real data demonstrate that Rock is able to detect clusters on datasets where either mode seeking or density-based approaches do not succeed."
+++

