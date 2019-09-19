package edu.mum.cs;

import edu.mum.cs.model.BeerExpert;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

public class BeerSelection extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet BeerSelect</title>");
            out.println("</head>");
            out.println("<body>");

            String color = request.getParameter("color");
            BeerExpert be = new BeerExpert();
            List<String> results = be.getBrands(color);

            out.println("Beer Selection Advice <br/>");
            Iterator it = results.iterator();
            while(it.hasNext()){
                out.print("<br/>try: " + it.next());
            }

            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String c = request.getParameter("color");
        BeerExpert be = new BeerExpert();
        List result = be.getBrands(c);

        request.setAttribute("styles", result);
        request.getRequestDispatcher("beer.jsp").forward(request, response);

    }

}