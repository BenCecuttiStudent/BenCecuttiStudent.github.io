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