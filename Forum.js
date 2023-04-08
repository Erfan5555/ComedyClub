
const PostButton= document.getElementById('PostButton');
const Forum = document.querySelector("#BackGround")
postBox= document.querySelector('#post');
const TextToInsert = document.getElementById("y");

PostButton.addEventListener('click',function(){
    
    var Text= TextToInsert.value;
    const newPost= postBox.cloneNode(true);
    newPost.querySelector('p').innerHTML=Text;
    Forum.appendChild(newPost);
})