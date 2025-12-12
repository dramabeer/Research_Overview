+++
title = "LUCK: linear correlation clustering using cluster algorithms and a kNN based distance function"
slug = "luck"  # Use only lowercase letters, numbers, and hyphens
date = 2019-07-23T12:00:00+02:00
draft = false

year = 2019
authors = ["Anna Beer", "Daniyal Kazempour", "Lisa Stephan", "Thomas Seidl"]
venue = "Proceedings of the 31st International Conference on Scientific and Statistical Database Management"
summary = "Short summary of the paper."

tags = ["clustering", "kNN-based"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://dl.acm.org/doi/abs/10.1145/3335783.3335801"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "LUCK allows to use any distance-based clustering algorithm to find linear correlated data. For that a novel distance function is introduced, which takes the distribution of the kNN of points into account and corresponds to the probability of two points being part of the same linear correlation. In this work in progress we tested the distance measure with DBSCAN and k-Means comparing it to the well-known linear correlation clustering algorithms ORCLUS, 4C, COPAC, LMCLUS, and CASH, receiving good results for difficult synthetic data sets containing crossing or non-continuous correlations."
+++

