let n=0;
const loadMore =() =>{
    n+=4;
let template='';
fetch ('data.json')
.then(response=>response.json())
.then(json =>{

    json.slice(0,n).forEach(data => {
        
        let click=0;
        let like=0
        const changeN=()=>{  
            click=1;
        }

        if(click==0){
            like=Number(data.likes);
        }else if(click==1){
            like=Number(data.likes);
            like+1;
        }
        let img='';
        
        if(data.source_type=='facebook'){
            img='icon/facebook.svg';
        }else if(data.source_type=='instagram'){
            img='icon/instagram-logo.svg';
        }

        
        template +=`
        <div id="post">
            <div id="header">
                <img id="profileImage" src="${data.profile_image}">
                <div id="nameDate">    
                <div id= "name">${data.name}</div>
                    <div id="date">${data.date}</div>
                    </div>
                <img id="postType" src="${img}" href="${data.source_link}">

                    
            </div>
            <div type="${data.type}">
                <img  id="picture"   src="${data.image}">
            </div>
            <div id="content">
            <div id="caption">${data.caption}</div>
            </div>
            <div id="footer">
                <div id="likes">
                    <div id="btnLikes"><img id="likeBtn" src="icon/heart.svg" onclick='${changeN}'>
                    ${like}
                    </div>
                
                </div>
            </div>
        </div>
        `

    });
     
    document.getElementById('container').innerHTML = template;//if(imageType=="facebook"){}
    if(n>=20){
        document.getElementById('btn').style.visibility='hidden';
    }
})

}
loadMore();