<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: 1246
  Date: 9/19/2019
  Time: 6:50 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Result</title>
</head>
<body>
<h1>Servlet BeerSelect</h1>
<ul>
    <c:forEach var="style" items="${styles}">
        <li>${style}</li>
    </c:forEach>
</ul>
</body>
</html>