import { toast } from "react-toastify";

export function adminLogin(name, pass){
        if(name=="admin"){
            if(pass=="admin@123"){
                localStorage.setItem('admin', true);;
                toast.success("login succesfull");
            }
        }
}

export function isAuthenticated(){
    if(localStorage.getItem('admin')=='true'){
        return true;
    }else{
        return false;
    }
}

export function adminLogout(){
    localStorage.removeItem('admin');
    window.location.reload();
}
// Safely get the 'jobs' from localStorage and parse it
var alljobs = [];

// Safely get the 'jobs' from localStorage and parse it
try {
    const jobsFromStorage = localStorage.getItem('jobs');  // Get the data from localStorage
    if (jobsFromStorage && jobsFromStorage !== 'undefined') {
        alljobs = JSON.parse(jobsFromStorage);  // Only parse if it's not undefined or null
    }
} catch (error) {
    console.error("Error parsing jobs from localStorage:", error);
    alljobs = [];  // In case of error, set to empty array
}

export function getAllJobs() {
    return alljobs;  // Return all jobs or empty array
}

