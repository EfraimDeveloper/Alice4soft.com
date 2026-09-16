const API_URL = "https://localhost:7092/api/Companies";

export async function getCompanies() {

    const response=await fetch(API_URL);

    if(!response.ok){
        throw new Error("Error loading companies");
    }

    return await response.json();
    
}

export async function getCompanyById(id){

    const response=await fetch(`${API_URL}/${id}`);

    if(!response.ok){
        throw new Error("Company not found.")
    }

    return await response.json();
}

export async function  createCompany(company){
    const response=await fetch(API_URL,{
        method:"Post",
        headers:{
            "Content-Type":"application/json"
    },
    body:JSON.stringify(company)
});

if(response.ok){
    throw new Error("Error creating company");
}
return await response.json();
}