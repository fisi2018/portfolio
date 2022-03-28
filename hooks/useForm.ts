import { useState } from "react"

export const useForm=(init)=>{
    const [form,setForm]=useState(init);
    const [loading,setLoading]=useState(false);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    return{
        form,
        handleChange,
        setLoading,
        loading,
        setForm
    }
}