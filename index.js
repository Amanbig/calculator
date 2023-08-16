var count='0';
var op = '';
document.querySelector('.AC').addEventListener("click", function() {
    count='0';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.C').addEventListener("click", function() {
    count='0';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.per').addEventListener("click", function() {
    count+='%';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.div').addEventListener("click", function() {
    count+='/';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.one').addEventListener("click", function() {
    count+='1';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.two').addEventListener("click", function() {
    count+='2';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.three').addEventListener("click", function() {
    count+='3';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.four').addEventListener("click", function() {
    count+='4';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.five').addEventListener("click", function() {
    count+='5';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.six').addEventListener("click", function() {
    count+='6';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.seven').addEventListener("click", function() {
    count+='7';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.eight').addEventListener("click", function() {
    count+='8';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.nine').addEventListener("click", function() {
    count+='9';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.plus').addEventListener("click", function() {
    count+='+';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.minus').addEventListener("click", function() {
    count+='-';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.X').addEventListener("click", function() {
    count+='*';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.dot').addEventListener("click", function() {
    count+='.';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.comma').addEventListener("click", function() {
    count+=',';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.zero').addEventListener("click", function() {
    count+='0';
    document.querySelector('h1').innerText = count;
});
document.querySelector('.equal').addEventListener("click", function() {
    var ans=eval(count)
    document.querySelector('h1').innerText = ans.toString();
    count='0';
});