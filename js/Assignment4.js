function menuchoice()
{
if (document.getElementById("menu").value=="Show Area 1")
{
    document.getElementById("section2").style.visibility="hidden";
    document.getElementById("section1").style.visibility="visible";
}
else if (document.getElementById("menu").value=="Show Area 2")
{
    document.getElementById("section1").style.visibility="hidden";
    document.getElementById("section2").style.visibility="visible";
}
if (document.getElementById("menu").value=="Please Select An Option")
{
document.getElementById("section1").style.visibility="hidden";
document.getElementById("section2").style.visibility="hidden";
}
}