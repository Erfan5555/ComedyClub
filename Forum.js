
const PostButton= document.getElementById('PostButton');
const Forum = document.querySelector("#BackGround")
postBox= document.querySelector('#post');
SubmitPost= document.getElementById('postButton');
const TextToInsert = document.getElementById("y");
var click;

PostButton.addEventListener('click',function(){
    TextToInsert.style.display='block'
    SubmitPost.style.display='block'
    PostButton.style.display='none'
    
})


SubmitPost.addEventListener('click',function(){
     
            var Text= TextToInsert.value;
            const newPost= postBox.cloneNode(true);
            newPost.querySelector('p').innerHTML=Text;
            Forum.insertBefore(newPost,postBox);
           
            TextToInsert.style.display='block'
        
      
    })


