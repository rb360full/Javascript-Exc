const myFirebaseApi = "https://digital-online-menu-default-rtdb.firebaseio.com/";

// API Functions


async function postRequest(array, arrayStringName) {
  let req = `${myFirebaseApi}${arrayStringName}.json`;
  let res = await fetch(req, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(array)
  });

  return res;
}
async function setRequest(array, arrayStringName, index) {

  // let req = `${myFirebaseApi}${arrayStringName}.json`;
  let req = index ? `${myFirebaseApi}${arrayStringName}/${index}.json` : `${myFirebaseApi}${arrayStringName}.json`
  console.log(req);
  let res = await fetch(req, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(array)
  });

  return res;
}

async function getRequest(arrayStringName, index) {
  let req = index ? `${myFirebaseApi}${arrayStringName}/${index}.json` : `${myFirebaseApi}${arrayStringName}.json`
  // let req = `${myFirebaseApi}${arrayStringName}.json`;
  console.log(req);
  let res = await fetch(req);
  let resJson = await res.json();

  return Object.values(resJson);
}

async function deleteRequest(arrayStringName, index) {
  let req = index ? `${myFirebaseApi}${arrayStringName}/${index}.json` : `${myFirebaseApi}${arrayStringName}.json`
  // let req = `${myFirebaseApi}${arrayStringName}.json`;
  let res = await fetch(req, {
    method: "DELETE",
  });

  return res;
}

async function callApiFunctions() {
  await getRequest("category")
    .then((result) => {
      category = [...result];
      generateCategoryItems();
    })
    .catch((err) => {
      callApiFunctions();
    });
  await getRequest("foods")
    .then((result) => {
      foods = [...result];
      generateMenuItems(category);
    })
    .catch((err) => {
      callApiFunctions();
    });

  await getRequest("foodOptionType")
    .then((result) => {
      foodOptionType = [...result];
      generateFoodOptionallity();
    })
    .catch((err) => {
      callApiFunctions();
    });
}

// Call Functions

// getRequest('foods').then(res => console.log(res))


let users = [
  { id: 1, name: 'reza', age: 40 },
  { id: 2, name: 'ali', age: 43 },
  { id: 3, name: 'safoora', age: 43 },
  { id: 4, name: 'ava', age: 8 }
]

let newUser = { id: 5, name: 'mostafa', age: 38 }

// setRequest(users, 'users').then(res => console.log(res))
// setRequest(newUser, 'users', 4).then(res => console.log(res))

// getRequest('users').then(res => console.log(res))
deleteRequest('users',4).then(res => console.log(res))

