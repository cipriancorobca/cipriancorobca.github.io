// functia de submit

function Savedata()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('pass').value;
    var errormsg = document.getElementById('error');

    if(username == "user" && password == "12345")
    {
        document.location.replace('../en/home.html');
    }

    else
    {
        errormsg.style.visibility = "visible";
    }
}

//  functiile de tema

function Themeswitch1()
{
    document.querySelectorAll('input[type=text]').forEach(e => e.style.setProperty("--c", "#BCBABE"));
    document.querySelectorAll('input[type=password]').forEach(e => e.style.setProperty("--c", "#BCBABE"));
    document.getElementById('white').style.display = "none";
    document.getElementById('black').style.display = "block";
    document.getElementsByTagName('body')[0].className = "white-mode";
    document.getElementById('titolo').style.color = "#1995AD";
    document.getElementById('contenitore').style.backgroundColor = "#A1D6E2";
    document.getElementById('username').style.backgroundColor = "#F1F1F2";
    document.getElementById('username').style.color = "#BCBABE";
    document.getElementById('pass').style.backgroundColor = "#F1F1F2";
    document.getElementById('pass').style.color = "#BCBABE";
    document.getElementById('conferma').style.backgroundColor = "#F1F1F2";
    document.getElementById('conferma').style.color = "#BCBABE";
}

function Themeswitch2()
{
    document.querySelectorAll('input[type=text]').forEach(e => e.style.setProperty("--c", "#c36b84"));
    document.querySelectorAll('input[type=password]').forEach(e => e.style.setProperty("--c", "#c36b84"));
    document.getElementById('white').style.display = "block";
    document.getElementById('black').style.display = "none";
    document.getElementsByTagName('body')[0].className = "purple-mode";
    document.getElementById('titolo').style.color = "#ed6b5b";
    document.getElementById('contenitore').style.backgroundColor = "#ed6b5b";
    document.getElementById('username').style.backgroundColor = "#f9ac66";
    document.getElementById('username').style.color = "#c36b84";
    document.getElementById('pass').style.backgroundColor = "#f9ac66";
    document.getElementById('pass').style.color = "#c36b84";
    document.getElementById('conferma').style.backgroundColor = "#f9ac66";
    document.getElementById('conferma').style.color = "#c36b84";
}