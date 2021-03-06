// IIFE -- Immediately Invoked Function Express
// AKA Anonymous Self-Executing Function
(function()
{
    
    function DisplayHomePage()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            // redirect to about page
            location.href = "about.html";
        });

        //Step 1 get a reference to an entry point(s) 
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;

        // Step 2 create an element(s) to insert
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("Article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

        // Step 3 configure new element
        MainParagraph.setAttribute("id", "MainParagraph")
        MainParagraph.setAttribute("class", "mt-3");
        
        let FirstParagraphString = "This is";
        let SecondParagraphString = `${FirstParagraphString} the main paragraph`;
        
        MainParagraph.textContent = SecondParagraphString;
        Article.setAttribute("class", "container");

        // Step 4 add / insert new element
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);

        /*DocumentBody.innerHTML = `
        <main>
            <h1 class="container">Hello, World!</h1>
            <p class="mt-5">This is dynamically created!</p>
        </main>
        `;*/


        // Deletion Examples
        //MainParagraph.remove();
        //document.getElementsByTagName("h1")[0].remove();
        //document.getElementById("ArticleParagraph").remove();

        // Insert Before Example
        //let NewH1 = document.createElement("h1");
        //NewH1.setAttribute("class", "display-1");
        //NewH1.textContent = "Hello, World!";

        MainContent.before(NewH1);
    }
    
    function Start()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
            break;
        }
    }

    // variable referencing an anonymous function
    let myFunction = function()
    {

    }

    window.addEventListener("load", Start);
})();