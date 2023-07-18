window.onload = function() 
{
    window.scrollTo(0,0);
}

function ScrollToProjects()
{
    document.getElementById("sidebar-navigation-to-projects").setAttribute("class","sidebar-section-button-selected");
    document.getElementById("sidebar-navigation-to-top").setAttribute("class","sidebar-section-button");
    document.getElementById("sidebar-navigation-to-contact").setAttribute("class","sidebar-section-button");

    document.getElementById("sidebar-navigation-to-top").style.fontWeight = "normal";
    document.getElementById("sidebar-navigation-to-contact").style.fontWeight = "normal";
    document.getElementById("sidebar-navigation-to-projects").style.fontWeight = "bolder";

    document.getElementById("sidebar-navigation-title").innerHTML = "Projects";
    document.getElementById("projects-content-container").scrollIntoView({behavior:'smooth'});
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
    document.getElementById("about-content-container").scrollIntoView({behavior:'smooth'});
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
    document.getElementById("contact-content-container").scrollIntoView({behavior:'smooth'});
}

function ToggleAbout(a)
{
    var ab1 = document.getElementById("about-1");
    var ab2 = document.getElementById("about-2");

    if(a == '1')
    {
        ab1.style.transition = "0.6s opacity";
        ab1.style.opacity = "0";
        setTimeout(function(){ab1.style.display = "none"}, 600);
        ab2.style.display = "block";
        ab2.style.transition = "0.6s opacity";
        setTimeout(function(){ab2.style.opacity = "1"}, 600);
    }

    else if(a == '0')
    {
        ab2.style.transition = "0.6s opacity";
        ab2.style.opacity = "0";
        setTimeout(function(){ab2.style.display = "none"}, 600);
        setTimeout(function(){ab1.style.display = "block"}, 600);
        ab1.style.opacity = "0";
        ab1.style.transition = "0.6s opacity";
        ab1.style.opacity = "1";
    }
}

function ShowProjectInfo(a)
{
    var p1 = document.getElementById("project-info-1");
    var p2 = document.getElementById("project-info-2");
    var b1 = document.getElementById("project-1");
    var b2 = document.getElementById("project-2");
    var b3 = document.getElementById("project-3");

    if(a == "0")
    {
        p1.style.display = "none";
        p2.style.display = "none";
        b1.setAttribute("onclick","ShowProjectInfo(1)");
        b2.setAttribute("onclick","ShowProjectInfo(2)");
        b3.setAttribute("onclick","ShowProjectInfo(3)");
    }

    else if(a == "1")
    {
        p1.style.display = "block";
        p2.style.display = "none";
        b1.setAttribute("onclick","ShowProjectInfo(0)");
        b2.setAttribute("onclick","ShowProjectInfo(2)");
        b3.setAttribute("onclick","ShowProjectInfo(3)");
    }

    else if(a == "2")
    {
        p1.style.display = "none";
        p2.style.display = "block";
        b1.setAttribute("onclick","ShowProjectInfo(1)");
        b2.setAttribute("onclick","ShowProjectInfo(0)");
        b3.setAttribute("onclick","ShowProjectInfo(3)");
    }

    else if(a == "3")
    {
        p1.style.display = "none";
        p2.style.display = "none";
        b1.setAttribute("onclick","ShowProjectInfo(1)");
        b2.setAttribute("onclick","ShowProjectInfo(2)");
        b3.setAttribute("onclick","ShowProjectInfo(0)");
    }
}