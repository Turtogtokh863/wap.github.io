<html>
<head>
    <link href="calc.css" type="text/css" rel="stylesheet">

</head>
<body>

<header>Simple Calculator
</header>
<form action="calc" method="post">
    <fieldset>
        <legend>Play with digits</legend>
        <input type="text" name="num1" value="<%= request.getAttribute("num1") == null ? "" :  request.getAttribute("num1") %>" >
        +
        <input type="text" name="num2" value="<%= request.getAttribute("num2") == null ? "" :  request.getAttribute("num2") %>">
        =
        <input type="text" name="addition" id="add" value="<%= request.getAttribute("addition") == null ? "" :  request.getAttribute("addition")%>"></br>

        <input type="text" name="num3" value="<%= request.getAttribute("num3") == null ? "" :  request.getAttribute("num3") %>" >
        *
        <input type="text" name="num4" value="<%= request.getAttribute("num4") == null ? "" :  request.getAttribute("num4") %>">
        =
        <input type="text" name="multiplication" id="mult" value="<%= request.getAttribute("multiplication") == null ? "" :  request.getAttribute("multiplication")%>"></br>
        <input type="submit">
    </fieldset>

</form>
</body>
</html>
