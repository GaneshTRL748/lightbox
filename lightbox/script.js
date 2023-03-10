let openimg=(pic)=>
{
    document.getElementById('content').style.display='none';
    document.getElementById('lightbox').style.display='block';
    document.getElementById('full_img').src=pic;
    document.getElementById('full_img').style.opacity=0.8;
}
let closeimg=()=>
{
    document.getElementById('content').style.display='block';
    document.getElementById('lightbox').style.display='none';
}