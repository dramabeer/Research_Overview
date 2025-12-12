+++
title = "Grace: Limiting the Number of Grid Cells for Clustering High-Dimensional Data"
slug = "grace-limiting-grid-cells"  # Use only lowercase letters, numbers, and hyphens
date = 2020-01-01T12:00:00+02:00
draft = false

year = 2020
authors = ["Anna Beer", "Daniyal Kazempour", "Julian Busch", "Alexander Tekles", "Thomas Seidl"]
venue = "LWDA"
summary = "Short summary of the paper."

tags = ["clustering", "high-dimensional"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://ceur-ws.org/Vol-2738/LWDA2020_paper_11.pdf"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "Using grid-based clustering algorithms on high-dimensional data has the advantage of being able to summarize datapoints into cells, but usually produces an exponential number of grid cells. In this paper we introduce Grace (using a Gr id which is adaptive for clustering), a clustering algorithm which limits the number of cells produced depending on the number of points in the dataset. A non-equidistant grid is constructed based on the distribution of points in one-dimensional projections of the data. A density threshold is automatically deduced from the data and used to detect dense cells, which are later combined to clusters. The adaptive grid structure makes an efficient but still accurate clustering of multidimensional data possible. Experiments with synthetic as well as real-world data sets of various size and dimensionality confirm these properties."
+++

