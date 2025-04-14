import { toast } from "react-toastify";

//to get the data create function and variables
var allusers = JSON.parse(localStorage.getItem('users')) || [];//getting data from localstorage along with key name that is users

//to get all users inside the any page
export function getAllusers(){
    return allusers;
}
//to create the or to insert the data to local storage create one function with parameter

export function createnewuser(useremail, userphone){
   console.log(allusers);
   

    let isEmailExist = allusers.find((item)=>item.email==useremail);
    let isPhoneExist = allusers.find((item)=>item.phone == userphone);
    console.log(isEmailExist);
    if(isEmailExist){//we are checking is any data is present or not in this variable
        toast.error("Given Email already exist")
        return;
    }else if(isPhoneExist){
        toast.error("Given Phone number already exist");
        return;
    }else{
        const newuser = {
            email:useremail,
            phone:userphone
        }
    
        allusers.push(newuser)
        console.log(allusers);
        //inserting to localstorage with key users after converting to json
        localStorage.setItem('users', JSON.stringify(allusers))
    }
}


//deleting data
export function deleteuser(index){
    console.log(index);
    allusers.splice(index, 1);
    console.log(allusers);
    localStorage.setItem('users', JSON.stringify(allusers));
}

//finding the data

export function finduser(index){
    return allusers[index]
}

export function updateUser(index, newEmail, newPhone){
   try {
    allusers[index].email = newEmail;
    allusers[index].phone = newPhone;
    localStorage.setItem('users', JSON.stringify(allusers))
    toast.success('updated successfully')
   } catch (error) {
        toast.error('something went wrong please try later...')
   }
}


