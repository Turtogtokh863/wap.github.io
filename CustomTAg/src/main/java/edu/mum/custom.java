package edu.mum;

import javax.servlet.ServletException;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class custom extends SimpleTagSupport {
    String thecolor;
    String words;

    @Override
    public void doTag() throws JspException, IOException {

        JspWriter out = getJspContext().getOut();
        if(thecolor != null){
            out.write(String.format("<span style='color:%s'>%s</span>", thecolor, words));
        }else{
            out.write(String.format("<span>%s</span>", words));
        }
    }

    public void setWords(String words) {
        this.words = words;
    }

    public void setThecolor(String thecolor) {
        this.thecolor = thecolor;
    }
}
