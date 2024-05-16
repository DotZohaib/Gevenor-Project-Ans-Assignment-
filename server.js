async function api(){
    let blog = await fetch(`https://randomuser.me/api/`);
    let data = await blog.json()

    console.log(data);
    
}

api();