function formPurchasing()
{
    var email = document.purchasing.email;
    var number = document.purchasing.number;
    var adress = document.purchasing.adress
    var colorselect = document.purchasing.color
    var paymentmethodselect = document.purchasing.paymentmethod
}
{
    {
    if(email(uemail))
    {
    if(number(unumber))
    {
    if(adress(uadd))
    { 
    if(color(ucolor))
    {
    if(paymentmethod(upay))
    }
}
    }
}
    }

    return false;
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function colorselect(ucolor)
{
if(ucolor.value == "Black")
{
alert('Select your color from the list');
ucolor.focus();
return false;
}
else
{
return true;
}
}
function Email(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function paymentmethodselect(ucolor)
{
if(upay.value == "Visa")
{
alert('Select your payment method from the list');
ucolor.focus();
return false;
}
else
{
return true;
}
}
{
alert('Form Successfully Submitted');
window.location.reload()
return true;
}


    
