const app = "I don't do much.";

const token = 'eabbe22816e571098b87faa480ce4c55c84286fa'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(function(json) {
  json.forEach(function(obj) {
    let el = document.createElement('p')
    el.innerHTML = `Repo name: ${obj.name}`
    document.body.appendChild(el)
  })
} );


// console.log(json)
