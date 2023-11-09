// bold button
document.getElementById('btn-bold').addEventListener('click', function(){
    document.getElementById('text-area').style.fontWeight = 'bold';
})

// italic button
document.getElementById('btn-italic').addEventListener('click', function(){
    document.getElementById('text-area').style.fontStyle = 'italic';
})

// underline button
document.getElementById('btn-underline').addEventListener('click', function(){
    document.getElementById('text-area').style.textDecoration = 'underline';
})

// left align button
document.getElementById('btn-align-left').addEventListener('click', function(){
    document.getElementById('text-area').style.textAlign = 'left';
})

// center align button
document.getElementById('btn-align-center').addEventListener('click', function(){
    document.getElementById('text-area').style.textAlign = 'center';
})

// right align button
document.getElementById('btn-align-right').addEventListener('click', function(){
    document.getElementById('text-area').style.textAlign = 'right';
})

// justify align button
document.getElementById('btn-align-justify').addEventListener('click', function(){
    document.getElementById('text-area').style.textAlign = 'justify';
})

// font size
document.getElementById('input-fontsize').addEventListener('click', function(event){
    const inputValue = event.target.value;
    const fontSizeValue = parseInt(inputValue)
    document.getElementById('text-area').style.fontSize = fontSizeValue+'px';
})

// input color
document.getElementById('input-color').addEventListener('click', function(event){
    const colorValue = event.target.value;
    console.log(colorValue)
    document.getElementById('text-area').style.color = colorValue;
})