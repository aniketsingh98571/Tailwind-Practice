const BASE_URL="https://ruby-precious-moth.cyclic.app"
const KEY="cf94e370-62bf-4d4a-ac9b-f97f58b53312"
const getUsers=async()=>{
    const query = `
        query Users($range: Int!, $key: String!) {
            users(range: $range, key: $key) {
                name,title
            }
        }
`;
const variables = {
    range: 20, // replace with your actual range
    key: KEY // replace with your actual key
};

const dataJson=await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query,
        variables
    }),
})
const data=await dataJson.json()
console.log("retrieved data",data)
return data
}
const addUser=async({name,title,socials,occupation})=>{
    console.log(name,title,socials,occupation)
    const mutation = `
        mutation Add($user: AddUserInput!, $key: String!) {
            addUser(user: $user, key: $key) {
                name,title,socials,occupation
            }
        }
`;
const variables = {
    key: KEY, // replace with your actual key
    user: {
        name: name, // replace with your actual name
        title: title, // replace with your actual title
        socials: socials, // replace with your actual socials
        occupation: occupation // replace with your actual occupation
    }
};

const dataJson=await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: mutation,
        variables
    }),
})
const data=await dataJson.json()
console.log('returned response',data)
return data
}

const editUser=async(id,name,title,socials,occupation)=>{
    const mutation = `
    mutation Edit($id: ID!, $user: EditUserInput!, $key: String!) {
        updateUser(id: $id, user: $user, key: $key) {
            name
        }
    }
`;

const variables = {
    id: id, // replace with your actual id,type-integer
    key: KEY, // replace with your actual key
    user: {
        name: name, // replace with your actual name
        title:title, // replace with your actual title
        socials: socials, // replace with your actual socials
        occupation: occupation // replace with your actual occupation
    }
};

const dataJson=await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: mutation,
        variables
    }),
})
const data=await dataJson.json()
console.log("returneed data",data)
return data
}
export {getUsers,addUser,editUser}