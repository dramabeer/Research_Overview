+++
title = "DISCO: Internal Evaluation of Density-Based Clustering"
slug = "disco"  # Use only lowercase letters, numbers, and hyphens
date = 2025-02-08T12:00:00+02:00
draft = false

year = 2025
authors = ["Anna Beer*", "Lena Krieger*", "Pascal Weber*", "Martin Ritzert", "Ira Assent", "Claudia Plant"]
venue = "arXiv preprint arXiv:2503.00127"
summary = "Short summary of the paper."

tags = ["clustering", "density-based", "evaluation"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://arxiv.org/abs/2503.00127"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "In density-based clustering, clusters are areas of high object density separated by lower object density areas. This notion supports arbitrarily shaped clusters and automatic detection of noise points that do not belong to any cluster. However, it is challenging to adequately evaluate the quality of density-based clustering results. Even though some existing cluster validity indices (CVIs) target arbitrarily shaped clusters, none of them captures the quality of the labeled noise. In this paper, we propose DISCO, a Density-based Internal Score for Clustering Outcomes, which is the first CVI that also evaluates the quality of noise labels. DISCO reliably evaluates density-based clusters of arbitrary shape by assessing compactness and separation. It also introduces a direct assessment of noise labels for any given clustering. Our experiments show that DISCO evaluates density-based clusterings more consistently than its competitors. It is additionally the first method to evaluate the complete labeling of density-based clustering methods, including noise labels."
+++

