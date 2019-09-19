package edu.mum.cs;

public class Question {
    private String question;
    private String answer;

    public Question(String ques, String answer) {
        this.question = ques;
        this.answer = answer;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public boolean checkAnswer(String answer){
        return this.answer.equals(answer);
    }
}
