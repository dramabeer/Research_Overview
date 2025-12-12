+++
title = "FairDen: Fair Density-Based Clustering"
slug = "fair-den"  # Use only lowercase letters, numbers, and hyphens
date = 2025-01-01T12:00:00+02:00
draft = false

year = 2025
authors = ["Lena Krieger*", "Anna Beer*", "Pernille Matthews", "Anneka Myrup Thiesson", "Ira Assent"]
venue = "The Thirteenth International Conference on Learning Representations"
summary = "Short summary of the paper."

tags = ["clustering", "density-based", "fairness"]  # Add as needed


external_pdf = "https://openreview.net/forum?id=aPHHhnZktB"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

pdf = "paper.pdf"  # Place PDF in static/papers/
presentation = "" # Optional external link, if none : remove param
poster = "poster.pdf" # Optional external link, if none : remove param

abstract = "Fairness in data mining tasks like clustering has recently become an increasingly important aspect. However, few clustering algorithms exist that focus on fair groupings of data with sensitive attributes. Including fairness in the clustering objective is especially hard for density-based clustering, as it does not directly optimize a closed form objective like centroid-based or spectral methods. This paper introduces FairDen, the first fair, density-based clustering algorithm. We capture the dataset's density-connectivity structure in a similarity matrix that we manipulate to encourage a balanced clustering. In contrast to state-of-the-art, FairDen inherently handles categorical attributes, noise, and data with several sensitive attributes or groups. We show that FairDen finds meaningful and fair clusters in extensive experiments."
+++

