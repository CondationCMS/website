---
title: "Use case: article list"
template: documentation/content.html
---

# Use case: article list

```twig
<!-- -->
{% set pageNumber = requestContext.getQueryParameter('page', '1') %}
{% set page = nodeList.from("/blog/*").sort("publish_date").reverse(true).page(pageNumber).size(3).list() %}
{% for entry in page.items %}
<div class="entry card">
    <div class="card-body">
        <h4 class="card-title">{{ entry.name }}</h4>
        <h6>{{ entry.meta['publish_date'] | date('dd-MM-yyyy') }}</h6>
        <p class="card-text">{{ entry.content}}</p>
        <a href="{{ entry.path}}" class="btn btn-primary">read more</a>
    </div>
</div>
<hr />
{% endfor %}
<nav>
    <ul class="pagination justify-content-center">
        {% if page.page == 1 %}
            <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
        {% else %}
            <li class="page-item">
                <a class="page-link" href="{{ requestContext.uri + "?page=" + (page.page - 1) }}" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
        {% endif %}
        {% if page.page == page.total %}
            <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        {% else %}
            <li class="page-item">
                <a class="page-link" href="{{ requestContext.uri + "?page=" + (page.page + 1) }}" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        {% endif %}
    </ul>
</nav>
```

```html
<div id="content" class="container" th:with="pageNumber = ${requestContext.getQueryParameter('page', '1')}">
    <div class="row"
        th:with='page = ${nodeList.from("/blog/*").sort("publish_date").reverse(true).page(pageNumber).size(1).list()}'>
        <th:block th:each="entry : ${page.items}" data-test="e">
            <h2 th:text="${entry.name}"></h2>
            <p th:text="${entry.content}"></p>
            <u th:text="${#dates.format(entry.meta['publish_date'], 'dd-MM-yyyy HH:mm')}"></u>
            <a th:href="${entry.path}">read more</a>
        </th:block>

        <div>
            <nav aria-label="blog pagination">
                <ul class="pagination">
                    <li class="page-item " th:classappend="${page.page == 1 ? 'disabled' : ''}"
                        th:with="prevPage = ${page.page-1}"
                        >
                        <a class="page-link" th:href="${links.createUrl('/blog?page=' + prevPage)}" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item" th:classappend="${page.page == page.total ? 'disabled' : ''}"
                        th:with="nextPage = ${page.page+1}"
                        >
                        <a class="page-link" th:href="${links.createUrl('/blog?page=' + nextPage)}">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
```