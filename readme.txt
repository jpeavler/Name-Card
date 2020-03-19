Stretch Questions:
Which web event did you hook into to update the display name?
    Clicking on a button, specifically the submit button.
Where in your HTML did you link to your JavaScript file? Are there better places? What's the best place? 
    I linked to my JavaScript file at the bottom of body, which is the best place to do it.
    The temptation is to put it in the head, since we put our CSS link there.
    We want to put it in the end of the HTML file so we don't reference an object in the js the
    compiler hasn't read in the HTML yet.
Why is it best practice to store your CSS/JS in external files rather than in your HTML file? 
    Separation of concerns. If we wanted to update how our CSS or JS work, we don't have to 
    sift through the HTML document for the bits we want to change.