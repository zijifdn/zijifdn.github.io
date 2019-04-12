function addweb()
{
    var webName = document.getElementById("sug-name").value;
    var weburl = document.getElementById("sug-link").value;
    if (webName == "" || weburl == "")
    {
        alert("请输入网站名与地址");
        return;
        var reg = "/^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/";
        if (!reg.test(weburl))
        {
            alert("请输入正确的网站地址");
            return;
        }
            
    }
    
    var
        webs = document.getElementById("webs");
        add = document.getElementById("add");
        newdiv = document.createElement("div");
    newdiv.className = "web1";
    newdiv.innerHTML = "<a href="+weburl+" target=\"_blank\">"+webName+"<\/a>";
    webs.insertBefore(newdiv, add);
    
    
}

function openNav() {
    document.getElementById("sidenav").style.height = "180px";
}

function closeNav() {
    document.getElementById("sidenav").style.height = "0";
}