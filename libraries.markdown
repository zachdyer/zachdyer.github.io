---
title: Library Documentation
layout: page
desc: Documentation for the various libraries that come with the template.
img: /img/about500x500.jpg
permalink: libraries
---

<!-- START THE FEATURETTES -->

{% for library in site.library %}
<hr class="featurette-divider">

<div class="row featurette">
  <div class="col-md-7{% cycle '', ' col-md-push-5' %}">
    <h2 class="featurette-heading">{{ library.title }}</h2>
    <p class="lead">{{ library.desc }}</p>
    <p><a class="btn btn-primary btn-lg" href="{{ site.github.url }}{{ library.url }}" role="button">Learn More »</a></p>
  </div>
  <div class="col-md-5{% cycle '', ' col-md-pull-7' %}">
    <a href="{{ site.github.url }}{{ library.url }}">
      <img class="featurette-image img-responsive center-block" alt="{{ library.title }}" src="{{ site.github.url }}{{ library.img }}">
    </a>
  </div>
</div>
{% endfor %}

<hr class="featurette-divider">

<!-- /END THE FEATURETTES -->
