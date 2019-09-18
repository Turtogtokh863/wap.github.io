<html>
<body>
<style>
    div{
        width: 640px;
        height: 500px;
        border: solid blue;
    }
    input[type=text]{
        width: 45px;
    }
    h1{
        text-align: center;
    }
</style>
<div class="container">
    <h1>The Number Quiz</h1>
    <form action="quiz" method="post">
        <input  type="text" name="ind" value="<%= request.getAttribute("ind")%>" hidden>
        <h2 >Your current score is : <%= request.getAttribute("score")%></h2>
        <span id="score"></span></br>
        <h1>Guess the next number in the sequence.</h1></hr>
        <h2 name="seq"><%= request.getAttribute("seq")%>
        </h2></br>
        <label>Your answer : </label>
        <input type="text" name="answer"></br></br>
        <input type="submit">
    </form>
</div>
</body>
</html>
