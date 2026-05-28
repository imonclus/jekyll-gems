---
layout: page
title: Blog
permalink: /blog/
---

<style>
  .post-list {
    list-style: none;
    padding-left: 0;
  }
  .post-list-item {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e1e8ed;
  }
  .post-list-item:last-child {
    border-bottom: none;
  }
  .post-list-item h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  .post-list-item h2 a {
    text-decoration: none;
    color: #2a7ae2;
  }
  .post-list-item h2 a:hover {
    text-decoration: underline;
  }
  .post-meta {
    display: block;
    font-size: 0.9rem;
    color: #828282;
    margin-bottom: 0.5rem;
  }

  /* Justificar el texto del extracto del post */
  .post-list-item p {
    text-align: justify;
  }
</style>

<ul class="post-list">
  {%- for post in site.posts -%}
    <li class="post-list-item">
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h2>
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h2>
      {{ post.excerpt }}
    </li>
  {%- endfor -%}
</ul>