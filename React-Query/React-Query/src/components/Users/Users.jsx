import React from 'react'
import classes from './Users.module.css'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getUsers,addUser} from '../../api/api'
const Users = () => {
  const queryClient=useQueryClient()
 const {data,isLoading,isError}= useQuery({
    queryKey:["Get Users"],
    queryFn:getUsers,
    //stale Time denotes after how many seconds, we need to call the api again, till that time, cache data will be retured
    staleTime:60*1000
  })
  const {mutate,isPending,reset} =useMutation({
    mutationFn:addUser,
    //onMutate runs before the mutation happens
    onMutate:()=>{
      return {id:9}
    },
    //data---->returned by server
    //variables---->that we sent to the server
    //context--->returned by onMutate function
    onSuccess:(data,variables,context)=>{
      console.log(data,variables,context)
       //to fetch the updated server data, we need to invalidate our "Get Users" data
      queryClient.invalidateQueries({
        //in the query key, we can pass any number of query keys which we want to invalidate
        queryKey:["Get Users"],
        exact:true
      })
    }
  })
  if(isLoading||isPending){
    return (
      <div className={classes.LoaderText}>Loading......</div>
    )
  }
 
  console.log(data)
  const addUserHandler=()=>{
    const data=mutate({name:"Abhishek Kumawat88",title:"Tech Lead",socials:[""],occupation:"Human"})
    console.log(data)
  }
  return (
    <div className={classes.OuterUsers}>
        <div className={classes.InnerUsers}>
           {
            data.data.users.map((user)=>{
              return (
                <p key={user.name}>{user.name}</p>
              )
            })
           }
        </div>

        <div className={classes.AddUser}>
          <button type='button' onClick={addUserHandler}>Add User</button>
        </div>
    </div>
  )
}

export default Users