/*window.onload = function() 
{
    window.scrollTo(0,0);
    var d,alt = true;

    setInterval(() =>
    {
        d = new Date();

        if(alt)
        {
            document.getElementById("sidebar-navigation-title").innerHTML = "" +
            ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
            alt = false;
        }

        else
        {
            document.getElementById("sidebar-navigation-title").innerHTML = "" +
            ("0" + d.getHours()).slice(-2) + " " + ("0" + d.getMinutes()).slice(-2);
            alt = true;
        }
    },1000);
}*/

function ScrollToProjects()
{
    ShowProjectInfo(0);
    document.getElementById("projects-content-container").scrollIntoView({behavior:'smooth'});
}

function ScrollToTop()
{
    ToggleAbout(0);
    document.getElementById("about-content-container").scrollIntoView({behavior:'smooth'});
}

function ScrollToContact()
{
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
    if(a == "1")
    {
        window.open("https://saudipearl4.wordpress.com","_blank");
    }

    else if(a == "2")
    {
        window.open("./untitled_9/source/login/login.html","_blank");
    }

    else if(a == "3")
    {
        window.open("https://github.com/cipriancorobca/cipriancorobca.github.io","_blank");
    }
}