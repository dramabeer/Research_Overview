+++
title = "Chain-Detection for DBSCAN"
slug = "chain-detection-dbscan"  # Use only lowercase letters, numbers, and hyphens
date = 2019-01-01T12:00:00+02:00
draft = false

year = 2019
authors = ["Janis Held", "Anna Beer", "Thomas Seidl"]
venue = "BTW 2019–Workshopband (Gesellschaft für Informatik Bonn)"
summary = "Short summary of the paper."

tags = ["clustering", "density-based"]  # Add as needed

pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://dl.gi.de/items/1f157e72-2be5-4399-b5f2-8a1f4ee217c5"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "Chains connecting two or more different clusters are a well known problem of the probably most famous density-based clustering algorithm DBSCAN. Since already a small number of points resulting from, eg, noise can form such a chain and build a bridge between different clusters, it can happen that the results of DBSCAN are distorted: several disparate clusters get merged into one. This single-link effect is rather known but to the best of our knowledge there are no satisfying solutions which extract those chains, yet. We present a new algorithm detecting not only straight chains between clusters, but also bent and noisy ones. Users are able to choose between eliminating one dimensional and higher dimensional chains connecting clusters to receive the underlying cluster structure by DBSCAN. Also, the desired straightness can be set by the user. We tested our efficient algorithm on a dataset containing traffic accidents in Great Britain and were able to detect chains emerging from streets between cities and villages, which led to clusters composed of diverse villages."
+++

