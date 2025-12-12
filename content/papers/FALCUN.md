+++
title = "FALCUN: A Simple and Efficient Deep Active Learning Strategy"
slug = "falcun"  # Use only lowercase letters, numbers, and hyphens
date = 2024-08-22T12:00:00+02:00
draft = false

year = 2024
authors = ["Sandra Gilhuber", "Anna Beer", "Yunpu Ma", "Thomas Seidl"]
venue = "Joint European Conference on Machine Learning and Knowledge Discovery in Databases (Springer Nature Switzerland)"
summary = "Short summary of the paper."

tags = ["deep learning", "active learning"]  # Add as needed
pdf = "paper.pdf"  # Place PDF in static/papers/
external_pdf = "https://link.springer.com/chapter/10.1007/978-3-031-70352-2_25"  # Optional external link, if none : remove param
tutorial = ""             # Optional related tutorial, if none : remove param

presentation = "presentation.pdf" # Optional external link, if none : remove param
poster = "" # Optional external link, if none : remove param

abstract = "We propose FALCUN, a novel deep batch active learning method that is label- and time-efficient. Our proposed acquisition uses a natural, self-adjusting balance of uncertainty and diversity: It slowly transitions from emphasizing uncertain instances at the decision boundary to emphasizing batch diversity. In contrast, established deep active learning methods often have a fixed weighting of uncertainty and diversity, limiting their effectiveness over diverse data sets exhibiting different characteristics. Moreover, to increase diversity, most methods demand intensive search through a deep neural network’s high-dimensional latent embedding space. This leads to high acquisition times when experts are idle while waiting for the next batch for annotation. We overcome this structural problem by exclusively operating on the low-dimensional probability space, yielding much faster acquisition times without sacrificing label efficiency. In extensive experiments, we show FALCUN’s suitability for diverse use cases, including medical images and tabular data. Compared to state-of-the-art methods like BADGE, CLUE, and AlfaMix, FALCUN consistently excels in quality and speed: while FALCUN is among the fastest methods, it has the highest average label efficiency."
+++

