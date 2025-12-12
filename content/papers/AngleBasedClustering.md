+++
title = "Angle-based clustering"
slug = "angle-based-clustering"  # Use only lowercase letters, numbers, and hyphens
date = 2020-09-30T12:00:00+02:00
draft = false

year = 2020
authors = ["Anna Beer", "Dominik Seeholzer", "Nadine-Sarah Schüler", "Thomas Seidl"]
venue = "International Conference on Similarity Search and Applications (Springer International Publishing)"
summary = "Short summary of the paper."

tags = ["clustering"]  # Add as needed

pdf = ""  # Place PDF in static/papers/
external_pdf = "https://link.springer.com/chapter/10.1007/978-3-030-60936-8_24"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "The amount of data increases steadily, and yet most clustering algorithms perform complex computations for every single data point. Furthermore, Euclidean distance which is used for most of the clustering algorithms is often not the best choice for datasets with arbitrarily shaped clusters or such with high dimensionality. Based on ABOD, we introduce ABC, the first angle-based clustering method. The algorithm first identifies a small part of the data as border points of clusters based on the angle between their neighbors. Those few border points can, with some adjustments, be clustered with well-known clustering algorithms like hierarchical clustering with single linkage or DBSCAN. Residual points can quickly and easily be assigned to the cluster of their nearest border point, so the overall runtime is heavily reduced while the results improve or remain similar. "
+++

