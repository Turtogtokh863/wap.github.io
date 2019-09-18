package edu.mum;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.awt.print.PrinterAbortException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

@WebServlet(name="Quiz", value="")
public class quiz extends HttpServlet {

    String[] questions={
            "3, 1, 4, 1, 5, 1",
            "1, 1, 2, 3, 5",
            "1, 4, 9, 16, 25",
            "2, 3, 5, 7, 11",
            "1, 2, 4, 8, 16"
    };
    int[] answers={9,8,36,13,32};

    public String getQuestion(int index){
        return questions[index];
    }

    public int getRandomIndex(){
        int randomIndex = new Random().nextInt(questions.length);
        return randomIndex;
    }

    public int getUserScore(HttpServletRequest request){
        int score = 0;
        HttpSession session =request.getSession();
        if(!session.isNew()) {
            for (Cookie cookie :
                    request.getCookies()) {
                if (cookie.getName().equals("score")) {
                    score = Integer.parseInt(cookie.getValue());
                }
            }
        }
        return score;
    }

    public void setUserScore(HttpServletResponse response, int score){
        Cookie cookie = new Cookie("score", String.valueOf(score));
        response.addCookie(cookie);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int ne = getRandomIndex();
        String q = getQuestion(ne);
        int userScore = getUserScore(request);
            if(answers[Integer.parseInt(request.getParameter("ind"))] == Integer.parseInt(request.getParameter("answer"))){
                userScore++;
                setUserScore(response, userScore);
            }
            request.setAttribute("ind",ne);
        System.out.println(getUserScore(request));
            request.setAttribute("score", userScore);
            request.setAttribute("seq", q);
            request.getRequestDispatcher("index.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int curInd = getRandomIndex();
        String q = getQuestion(curInd);
        request.setAttribute("ind",curInd);
        request.setAttribute("score",getUserScore(request));
        request.setAttribute("seq", q);
        request.getRequestDispatcher("index.jsp").forward(request, response);
    }
}
