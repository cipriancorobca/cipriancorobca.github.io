const occupations = [
    'Frontend developer','UI/UX designer',
    'Gamer','Cycling enjoyer','Artist',
    'Game developer','Quick learner'
]
var v = true,g;

window.onload = function() 
{
    window.scrollTo(0,0);
    let a = Math.trunc(Math.random()*7);
    g = a;
    document.getElementById('occupation').innerHTML = occupations[a];
    setInterval(changeContentAndVisibility, 4000);
    /*var d,alt = true;

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
    },1000);*/
}

function changeContentAndVisibility() 
{
    let a = Math.trunc(Math.random()*7);
    if(a != g)
    {
        document.getElementById('occupation').style.opacity = "0";
        setTimeout(function(){document.getElementById('occupation').innerHTML = occupations[a];},600);
        setTimeout(function(){document.getElementById('occupation').style.opacity = "1";},800);
        g = a;
    }
}

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
        ab1.style.transition = "0.6s opacity";
        ab1.style.opacity = "0";
        setTimeout(function(){ab1.style.opacity = "1"}, 600);
    }
}

function ShowProjectInfo(a)
{
    if(a == "1")
    {
        window.open("https://tryit-vopz.onrender.com","_blank");
    }

    else if(a == "2")
    {
        window.open("./untitled_9/source/login/login.html","_blank");
    }

    else if(a == "3")
    {
        window.open("https://newssharing.space","_blank");
    }

    else if(a == "4")
    {
        window.open("https://saudipearl4.wordpress.com","_blank");
    }

    else if(a == "5")
    {
        window.open("https://github.com/cipriancorobca/cipriancorobca.github.io","_blank");
    }
}