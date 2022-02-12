function change_tab(id)
{
  document.getElementById("page_content").innerHTML=document.getElementById(id+"_desc").innerHTML;
  document.getElementById("Home").className="notselected";
  document.getElementById("Portfolio").className="notselected";
  document.getElementById("Contact").className="notselected";
  document.getElementById(id).className="selected";
}

