package edu.mum;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Calculator extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("addition",0);
        request.setAttribute("multiplication",0);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        String num1 = request.getParameter("num1");
//        String num2 = request.getParameter("num2");
//        String num3 = request.getParameter("num3");
//        String num4 = request.getParameter("num4");
//        int sum = Integer.parseInt(num1) + Integer.parseInt(num2);
//        int mult = Integer.parseInt(num3) * Integer.parseInt(num4);
//
//        PrintWriter out = response.getWriter();
//
////        out.println(num1 + " + " + num2 + "=" + sum);
////            out.println(num3 + " * " + num4 + "=" + mult);
//        response.setContentType("text/html");
//        out.println("<form action=\"calc\" method=\"post\">");
//        out.println("<input  name=\"num1\" value="+num1+">");
//        out.println("+");
//        out.println("<input name=\"num2\" value="+num2+">");
//        out.println(" = " + sum + "\n");
//        out.println(" <input name=\"num3\" value="+num3+">");
//        out.println("+");
//        out.println(" <input  name=\"num4\" value="+num4+">");
//        out.println(" = " + mult + "\n");
//        out.println("</form>");
//    }
        try{
        PrintWriter out = response.getWriter();

        out.println("<html><body>");
        if(request.getParameter("num1").equals("") || request.getParameter("num2").equals("")){
            out.println("<span></span>" + "<br/>");
        } else {
            int a = Integer.parseInt(request.getParameter("num1"));
            int b = Integer.parseInt(request.getParameter("num2"));
            int sum = a + b;
            request.setAttribute("addition",sum);
            request.setAttribute("num1",a);
            request.setAttribute("num2",b);
            out.println("<span>" + a + " + " + b + " = " + sum + "<span>" + "<br/>");
        }

        if(request.getParameter("num3").equals("") || request.getParameter("num4").equals("")){
            out.println("<span></span>" + "<br/>");
        } else {
            int c = Integer.parseInt(request.getParameter("num3"));
            int d = Integer.parseInt(request.getParameter("num4"));
            int mult = c + d;
            request.setAttribute("multiplication",mult);
            request.setAttribute("num3",c);
            request.setAttribute("num4",d);

            out.println("<span>" + c + " + " + d + " = " + mult + "<span>" + "<br/>");
        }
            request.getRequestDispatcher("index.jsp").forward(request,response);
        out.println("</body></html>");

        } catch (NumberFormatException e) {
            System.out.println("Please input at least one combination together. " + request.getParameter("num1") + ", " + request.getParameter("num2"));
            e.printStackTrace();
            response.getWriter().println("<span>error</span>");
        }
    }
}
