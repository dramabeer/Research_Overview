+++
title = "CODEC: Detecting Linear Correlations in Dense Clusters using coMAD-based PCA"
slug = "codec"  # Use only lowercase letters, numbers, and hyphens
date = 2019-08-26T12:00:00+02:00
draft = false

year = 2019
authors = ["Maximilian Archimedes Xaver Hünemörder", "Anna Beer", "Daniyal Kazempour", "Thomas Seidl"]
venue = "LWDA"
summary = "Short summary of the paper."

tags = ["correlation", "PCA"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://ceur-ws.org/Vol-2454/paper_74.pdf"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "The coMAD (co-median absolute deviation) is a measure for the joint median of two random variables. Previous experiments have shown that a coMAD-based PCA is more robust towards noise and outliers, yielding eigenvectors which represent linear correlation better than its covariance-based competitors. In this preliminary work we introduce CODEC - COrrelations in DEnse Clusters - a method for detecting linear correlations in dense clusters utilizing a coMAD-based PCA. The idea of CODEC is intriguingly simple: first a density-based clustering is performed using the well established clustering method DBSCAN. Then on each of the clusters PCA is performed. Instead of using the covariance matrix we use the coMAD matrix as a basis for performing PCA."
+++

