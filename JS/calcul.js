function ajouter(msg)
{
    document.form1.val.value=document.form1.val.value+msg;
}
function supp()
{
    document.form1.val.value="";
}
function equals()
{
    var exp=document.form1.val.value;
    document.form1.val.value=eval(exp);
}