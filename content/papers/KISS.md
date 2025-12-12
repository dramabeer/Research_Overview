+++
title = "KISS: A fast kNN-based Importance Score for Subspaces."
slug = "kiss"  # Use only lowercase letters, numbers, and hyphens
date = 2021-01-01T12:00:00+02:00
draft = false

year = 2021
authors = ["Anna Beer", "Ekaterina Allerborn","Valentin Hartmann", "Thomas Seidl"]
venue = "EDBT"
summary = "Short summary of the paper."

tags = ["importance score", "kNN-based"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://pure.au.dk/portal/en/publications/kiss-a-fast-%CE%BAnn-based-importance-score-for-subspaces"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "In high-dimensional datasets some dimensions or attributes can be more important than others. Whereas most algorithms neglect one or more dimensions for all points of a dataset or at least for all points of a certain cluster together, our method KISS (κ NN-based Importance Score of Subspaces) detects the most important dimensions for each point individually. It is fully unsupervised and does not depend on distorted multidimensional distance measures. Instead, the κ nearest neighbors (κNN) in one-dimensional projections of the data points are used to calculate the score for every dimension's importance. Experiments across a variety of settings show that those scores reflect well the structure of the data. KISS can be used for subspace clustering. What sets it apart from other methods for this task is its runtime, which is linear in the number of dimensions and O(n log(n)) in the number of points, as opposed to quadratic or even exponential runtimes for previous algorithms."
+++

