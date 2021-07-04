




addCss.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onload = ()=>{
       console.log(request.response)
       const style = document.createElement('style')
       style.innerHTML = request.response
       document.body.appendChild(style)
    }
    request.error=()=>{
        console.log('error')
    }
   request.send()
}

addJs.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/addJs.js')
    request.onload=()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.error=()=>{
        console.log('失败')
    }
    request.send()
}

addHtml.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','addHtml.html')
    request.onreadystatechange=()=>{
        if(request.readyState ===4 && request.status ===200){
            console.log(request.readyState)
            console.log(request.status)
            const div = document.createElement('div')
            div.innerHTML = request.response
            console.log(div)
            document.body.appendChild(div)
        }

    }
    request.send()
}
addXml.onclick=()=>{
    const request = new XMLHttpRequest;
    request.open('GET','/addXml.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<400){
            const dom = request.responseXML
            console.log(dom)
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
addJson.onclick=()=>{
    const request = new XMLHttpRequest;
    request.open('GET','/addJson.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<400){
            const content = JSON.parse(request.response)
            console.log(content)
            addName.textContent =content.name
            console.log(content.name)
        }
    }
    request.send()
}

//try catch 测试
// let name1 
// try{
//     name1 = JSON.parse(`('name':"13")`)//这里的单引号出差

// } catch(error){
//     console.log('出错了')
//     console.log(error)
//     name1={"name":"no name"}
// }
// console.log(name1)
let n =2
addPage.onclick=()=>{

    const request = new XMLHttpRequest();
    request.open('GET',`/page${n}.json`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status>=200 && request.status<400){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n = n+1
        }

    }
    console.log(request)
    request.send()
}