+++
title = "Data with density-based clusters: A generator for systematic evaluation of clustering algorithms"
slug = "generator-for-systematic-evaluation"  # Use only lowercase letters, numbers, and hyphens
date = 2024-08-22T12:00:00+02:00
draft = false

year = 2024
authors = ["Philipp Jahn", "Christian MM Frey", "Anna Beer", "Collin Leiber", "Thomas Seidl"]
venue = "Joint European Conference on Machine Learning and Knowledge Discovery in Databases (Springer Nature Switzerland)"
summary = "Short summary of the paper."

tags = ["evaluation", "density-based"]  # Add as needed
pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://link.springer.com/chapter/10.1007/978-3-031-70368-3_1"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "Mining data containing density-based clusters is well-established and widespread but faces problems when it comes to systematic and reproducible comparison and evaluation. Although the success of clustering methods hinges on data quality and availability, reproducibly generating suitable data for this setting is not easy, leading to mostly low-dimensional toy datasets being used. To resolve this issue, we propose DENSIRED (DENSIty-based Reproducible Experimental Data), a novel data generator for data containing density-based clusters. It is highly flexible w.r.t. a large variety of properties of the data and produces reproducible datasets in a two-step approach. First, skeletons of the clusters are constructed following a random walk. In the second step, these skeletons are enriched with data samples. DENSIRED enables the systematic generation of data for a robust and reliable analysis of methods aimed toward examining data containing density-connected clusters. In extensive experiments, we analyze the impact of user-defined properties on the generated datasets and the intrinsic dimensionalities of synthesized clusters. Our code and novel benchmark datasets are publicly available at: https://github.com/PhilJahn/DENSIRED."
+++

