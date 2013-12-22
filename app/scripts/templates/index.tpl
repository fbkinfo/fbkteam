<ul class="b-links col-md-12 col-sm-12 col-xs-12">
    <% _.each(directions, function(directionItem) { %>
    <li class="b-links__item j-direction-block">
        <a href="#show/<%=directionItem.code%>" class="b-links__item-link j-direction-link <%=directionItem.class%>" data-code="<%=directionItem.code%>" data-direction="<%=directionItem.code%>">
        <%=directionItem.title%>
        </a>
        <div class="b-links__item-description j-direction-description">
            <span class="b-links__item-text col-md-7"><%=directionItem.description%></span>
            <a class="b-button-ready btn btn-lg col-md-5 col-sm-5 j-ready-button <%=directionItem.buttonClass%>" href="/#form/<%=directionItem.code%>">Готов помочь</a>
        </div>
        <div class="clearfix"></div>
    </li>
    <% }); %>
</ul>
