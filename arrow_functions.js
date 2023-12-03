function greeting(msg){
    alert(msg)
} 

greeting(10)

let createBlog = (title, body) => {
    if(!title || !body){
        console.log("No Title!!..")
    }

    else {
        console.log(`${title}-${body}`)
    }

}

createBlog("hello")