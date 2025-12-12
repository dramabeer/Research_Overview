+++
title = "Shade: Deep density-based clustering"
slug = "shade"  
date = 2024-12-09T12:00:00+02:00
draft = false

year = 2025
authors = ["Anna Beer*", "Pascal Weber*", "Lukas Miklautz", "Collin Leiber", "Walid Durani", "Christian Böhm", "Claudia Plant"]
venue = "2024 IEEE International Conference on Data Mining (ICDM)"
summary = "Short summary of the paper."

tags = ["deep", "clustering", "density-based"]  

pdf = "paper.pdf"  # Place PDF in static/papers/
pdf_conference = "paper_conference.pdf" 
external_pdf = "https://ieeexplore.ieee.org/abstract/document/10884477"  
tutorial = ""          

presentation = "presentation.pdf" 
poster = "" 

abstract = "Detecting arbitrarily shaped clusters in high-dimensional noisy data is challenging for current clustering methods. We introduce SHADE, the first deep clustering algorithm that incorporates density-connectivity into its loss function. Similar to existing deep clustering algorithms, SHADE supports high-dimensional and large data sets with the expressive power of a deep autoencoder. In contrast to most existing deep clustering methods that rely on a centroid-based clustering objective, SHADE incorporates a novel loss function that captures density-connectivity. It thereby learns a representation that enhances the separation of density-connected clusters. SHADE detects a stable clustering and noise points fully automatically without any user input. It outperforms existing methods in clustering quality, especially on data that contain non-Gaussian clusters, such as video data. Moreover, the embedded space of SHADE is suitable for visualization and interpretation of the clustering results as the individual shapes of the clusters are preserved."
+++

