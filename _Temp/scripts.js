



fetch("data.json")
  .then(res =>res.json()).then(result=> console.log(result))
  .catch(err => { console.log(err) })


