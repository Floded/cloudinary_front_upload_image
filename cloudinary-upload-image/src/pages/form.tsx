import { useState } from "react";


export const Form = () => {  
     
    const cloud_name = import.meta.env.VITE_CLOUD_NAME;
    const preset = import.meta.env.VITE_CLOUD_PRESET;
    const cloudinaryUrl = import.meta.env.VITE_CLOUD_API

    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false)

    const uploadImage = async (event:  { target: HTMLInputElement }) => {
        
        const files = event.target.files;
        const data = new FormData();
        
        if(!files || files.length === 0) {
            console.error("No files selected");
            return
        }

        data.append("file", files[0]);
        data.append("upload_preset", preset);
        
        setLoading(true)
        
        try {
            const response = await fetch(`${cloudinaryUrl}/${cloud_name}/image/upload`,{
                method: "POST",
                body: data
            })
            const file = await response.json();
            setImage(file.secure_url);
            setLoading(false)
        } catch (error) {
            console.error("Error uploading image", error);
            setLoading(false)
            
        }
    }
  return (
    <div>
        <h1>Upload image</h1>

        <input type="file"
        name="file"
        placeholder="Upload an image"
        onChange={(e)=>{uploadImage(e)}} 
        />

        {loading ? ( <h3>Loading...</h3> ) : ( <img src={image} alt="" /> )}
    </div>
  )
}
