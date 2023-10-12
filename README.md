# presentation-23
Presentation for the study block 2023.10

The presentation is made by displaying the section inside the div class = "chapter", which by itself inside the div class = "presentation". 

Inside the script there will be assignSectionIds function which will give an id for each selected section with utilization of documnet.querySelectorAll method.

Display function is pretty easy, if the id and the SlideId match the function will add ".active" string to the class, for which there was setup CSS which will display the one matching the rest will be hidden.

updateChapterName function was tricky to implement: The chapter names are in div class = "chapter as h2. So I needed to select exactly the contents of h2. For this I had to employ the ChatGPT, it gave as the result the use of .closest() method, which select the specified ancestor element. 

Then the function of navigation between slides and simple implementation of "restart" button.
