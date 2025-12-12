+++
title = "Scar: Spectral clustering accelerated and robustified"
slug = "scar"  # Use only lowercase letters, numbers, and hyphens
date = 2022-07-01T12:00:00+02:00
draft = false

year = 2022
authors = ["Ellen Hohma*", "Christian MM Frey*", "Anna Beer*", "Thomas Seidl"]
venue = "Proceedings of the VLDB Endowment"
summary = "Short summary of the paper."

tags = ["clustering", "Spectral"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://www.vldb.org/pvldb/vol15/p3031-beer.pdf"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "Spectral clustering is one of the most advantageous clustering approaches. However, standard Spectral Clustering is sensitive to noisy input data and has a high runtime complexity. Tackling one of these problems often exacerbates the other. As real-world datasets are often large and compromised by noise, we need to improve both robustness and runtime at once. Thus, we propose Spectral Clustering - Accelerated and Robust (SCAR), an accelerated, robustified spectral clustering method. In an iterative approach, we achieve robustness by separating the data into two latent components: cleansed and noisy data. We accelerate the eigendecomposition - the most time-consuming step - based on the Nyström method. We compare SCAR to related recent state-of-the-art algorithms in extensive experiments. SCAR surpasses its competitors in terms of speed and clustering quality on highly noisy data."
+++

