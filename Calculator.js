let ele = document.querySelector('.num1');
console.log(ele);
function setField(e)
{
    ele = e.target
    console.log(ele)
}
function setNum(num)
{
    let data = ele.value;
    data = data + num;
    ele.value = data;
}
function calcy(op)
{
    let a = parseInt(document.querySelector('.num1').value);
    let b = parseInt(document.querySelector('.num2').value);
    let c;
    if (op=='+')
    {
        c = a + b;
    }
    else if (op=='-')
    {
        c = a - b;
    }
    else if (op=='*')
    {
        c = a * b;
    }
    else if (op=='/')
    {
        c = a / b;
    }
    document.querySelector('.num3').value = c;
}
function calc(op)
{
    document.querySelector('.num3').value = ""
    document.querySelector('.num2').value = ""
    document.querySelector('.num1').value = ""

    ele = document.querySelector('.num1');
}