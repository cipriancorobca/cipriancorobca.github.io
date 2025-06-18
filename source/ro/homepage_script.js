
//  language switch

function English()
{
    document.location.replace('../en/home.html');
}

function Italian()
{
    document.location.replace('../it/home.html');
}

function Slovak()
{
    document.location.replace('../sk/home.html');
}

//  redirect

function Showredirect(a)
{
    document.getElementById('comingsoon').style.display = "none";
    document.getElementById('redirect').style.display = "block";
    document.getElementById('maindiv1').style.display = "none";
    document.getElementById('maindiv2').style.display = "none";
    document.getElementById('tomain').style.display = "block";

    setTimeout(() => {
        switch(a)
        {
            case 1:
            {
                window.open("https://tryit-vopz.onrender.com","_blank");
            }

            case 2:
            {
                window.open("https://thetimecalculator.app","_blank");
            }

            case 3:
            {
                window.open("../../resources/css_boxes/index.html","_blank");
            }
        }
    },2552);
}

//  coming soon

function Showcs()
{
    document.getElementById('comingsoon').style.display = "block";
    document.getElementById('infodiv').style.display = "none";
    document.getElementById('maindiv1').style.display = "none";
    document.getElementById('maindiv2').style.display = "none";
    document.getElementById('tomain').style.display = "block";
    setTimeout(Hidecs,2552);
    window.scrollTo(0,document.body.scrollHeight);
}

function Hidecs()
{
    document.getElementById('comingsoon').style.display = "none";
    document.getElementById('tomain').style.display = "none";
    document.getElementById('maindiv1').style.display = "flex";
    document.getElementById('maindiv2').style.display = "flex";
}

// info

function Showinfo()
{
    document.getElementById('comingsoon').style.display = "none";
    document.getElementById('infodiv').style.display = "block";
    document.getElementById('redirect').style.display = "none";
    document.getElementById('maindiv1').style.display = "none";
    document.getElementById('maindiv2').style.display = "none";
    document.getElementById('tomain').style.display = "block";
}

//  return to main

function ToMain()
{
    document.getElementById('infodiv').style.display = "none";
    document.getElementById('comingsoon').style.display = "none";
    document.getElementById('redirect').style.display = "none";
    document.getElementById('tomain').style.display = "none";
    document.getElementById('maindiv1').style.display = "flex";
    document.getElementById('maindiv2').style.display = "flex";
}

//  tema

function Themeswitch1()
{
    //theme,return and language buttons
    document.getElementById('white').style.display = "none";
    document.getElementById('black').style.display = "block";
    document.getElementById('lang').style.backgroundColor = "black";
    document.getElementById('tomain').style.backgroundColor = "black";
    document.getElementById('tomain').style.color = "white";

    //background
    document.getElementsByTagName('body')[0].className = "white-mode";

    //divs
    document.getElementById('titlelink').style.color = "#1995AD";
    document.getElementById('content1').style.backgroundColor = "#A1D6E2";
    document.getElementById('content2').style.backgroundColor = "#A1D6E2";
    document.getElementById('content3').style.backgroundColor = "#A1D6E2";
    document.getElementById('content4').style.backgroundColor = "#A1D6E2";
    document.getElementById('comingsoon').style.backgroundColor = "#A1D6E2";
    document.getElementById('infodiv').style.backgroundColor = "#A1D6E2";
    document.getElementById('redirect').style.backgroundColor = "#A1D6E2";

    //p
    document.getElementById('info1').style.color = "#454144";
    document.getElementById('info2').style.color = "#454144";
    document.getElementById('info3').style.color = "#454144";
    document.getElementById('info4').style.color = "#454144";
    document.getElementById('infocs').style.color = "#454144";
    document.getElementById('inforedir').style.color = "#454144";
    document.getElementById('infoabout').style.color = "#454144";
    document.getElementById('infoemail').style.color = "#454144";
    document.getElementById('subtitle').style.color = "#1995AD";

    //inputs
    document.getElementById('findout1').style.backgroundColor = "#F1F1F2";
    document.getElementById('findout1').style.color = "#454144";
    document.getElementById('findout2').style.backgroundColor = "#F1F1F2";
    document.getElementById('findout2').style.color = "#454144";
    document.getElementById('findout3').style.backgroundColor = "#F1F1F2";
    document.getElementById('findout3').style.color = "#454144";
    document.getElementById('findout4').style.backgroundColor = "#F1F1F2";
    document.getElementById('findout4').style.color = "#454144";
}

function Themeswitch2()
{
    //theme,return and language buttons
    document.getElementById('white').style.display = "block";
    document.getElementById('black').style.display = "none";
    document.getElementById('lang').style.backgroundColor = "white";
    document.getElementById('tomain').style.backgroundColor = "white";
    document.getElementById('tomain').style.color = "black";

    //background
    document.getElementsByTagName('body')[0].className = "purple-mode";

    //divs
    document.getElementById('titlelink').style.color = "#ed6b5b";
    document.getElementById('content1').style.backgroundColor = "#ed6b5b";
    document.getElementById('content2').style.backgroundColor = "#ed6b5b";
    document.getElementById('content3').style.backgroundColor = "#ed6b5b";
    document.getElementById('content4').style.backgroundColor = "#ed6b5b";
    document.getElementById('comingsoon').style.backgroundColor = "#ed6b5b";
    document.getElementById('infodiv').style.backgroundColor = "#ed6b5b";
    document.getElementById('redirect').style.backgroundColor = "#ed6b5b";

    //p
    document.getElementById('info1').style.color = "#3a3e59";
    document.getElementById('info2').style.color = "#3a3e59";
    document.getElementById('info3').style.color = "#3a3e59";
    document.getElementById('info4').style.color = "#3a3e59";
    document.getElementById('infocs').style.color = "#3a3e59";
    document.getElementById('inforedir').style.color = "#3a3e59";
    document.getElementById('infoabout').style.color = "#3a3e59";
    document.getElementById('infoemail').style.color = "#3a3e59";
    document.getElementById('subtitle').style.color = "#ed6b5b";

    //inputs
    document.getElementById('findout1').style.backgroundColor = "#f9ac66";
    document.getElementById('findout1').style.color = "#3a3e59";
    document.getElementById('findout2').style.backgroundColor = "#f9ac66";
    document.getElementById('findout2').style.color = "#3a3e59";
    document.getElementById('findout3').style.backgroundColor = "#f9ac66";
    document.getElementById('findout3').style.color = "#3a3e59";
    document.getElementById('findout4').style.backgroundColor = "#f9ac66";
    document.getElementById('findout4').style.color = "#3a3e59";
}