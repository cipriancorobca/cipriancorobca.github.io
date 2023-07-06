function ScrollToProjects()
{
    document.getElementById("sidebar-navigation-to-projects").setAttribute("class","sidebar-section-button-selected");
    document.getElementById("sidebar-navigation-to-top").setAttribute("class","sidebar-section-button");
    document.getElementById("sidebar-navigation-to-contact").setAttribute("class","sidebar-section-button");

    document.getElementById("sidebar-navigation-to-top").style.fontWeight = "normal";
    document.getElementById("sidebar-navigation-to-contact").style.fontWeight = "normal";
    document.getElementById("sidebar-navigation-to-projects").style.fontWeight = "bolder";

    document.getElementById("sidebar-navigation-title").innerHTML = "Projects";
}

function ScrollToTop()
{
    document.getElementById("sidebar-navigation-to-top").setAttribute("class","sidebar-section-button-selected");
    document.getElementById("sidebar-navigation-to-projects").setAttribute("class","sidebar-section-button");
    document.getElementById("sidebar-navigation-to-contact").setAttribute("class","sidebar-section-button");

    document.getElementById("sidebar-navigation-to-projects").style.fontWeight = "normal";
    document.getElementById("sidebar-navigation-to-contact").style.fontWeight = "normal";
    document.getElementById("sidebar-navigation-to-top").style.fontWeight = "bolder";

    document.getElementById("sidebar-navigation-title").innerHTML = "About";
}

function ScrollToContact()
{
    document.getElementById("sidebar-navigation-to-contact").setAttribute("class","sidebar-section-button-selected");
    document.getElementById("sidebar-navigation-to-top").setAttribute("class","sidebar-section-button");
    document.getElementById("sidebar-navigation-to-projects").setAttribute("class","sidebar-section-button");

    document.getElementById("sidebar-navigation-to-top").style.fontWeight = "normal";
    document.getElementById("sidebar-navigation-to-projects").style.fontWeight = "normal";
    document.getElementById("sidebar-navigation-to-contact").style.fontWeight = "bolder";

    document.getElementById("sidebar-navigation-title").innerHTML = "Contact";
}