+++
title = "Temporal Subspace Clustering for Molecular Dynamics Data"
slug = "temporal-subspace-clustering"  # Use only lowercase letters, numbers, and hyphens
date = 2024-07-31T12:00:00+02:00
draft = false

year = 2024
authors = ["Anna Beer", "Martin Heinrigs", "Claudia Plant", "Ira Assent"]
venue = "arXiv preprint arXiv:2408.00056"
summary = "Short summary of the paper."

tags = ["clustering", "molecular dynamcs", "temporal"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://arxiv.org/abs/2408.00056"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "We introduce MOSCITO (MOlecular Dynamics Subspace Clustering with Temporal Observance), a subspace clustering for molecular dynamics data. MOSCITO groups those timesteps of a molecular dynamics trajectory together into clusters in which the molecule has similar conformations. In contrast to state-of-the-art methods, MOSCITO takes advantage of sequential relationships found in time series data. Unlike existing work, MOSCITO does not need a two-step procedure with tedious post-processing, but directly models essential properties of the data. Interpreting clusters as Markov states allows us to evaluate the clustering performance based on the resulting Markov state models. In experiments on 60 trajectories and 4 different proteins, we show that the performance of MOSCITO achieves state-of-the-art performance in a novel single-step method. Moreover, by modeling temporal aspects, MOSCITO obtains better segmentation of trajectories, especially for small numbers of clusters."
+++

