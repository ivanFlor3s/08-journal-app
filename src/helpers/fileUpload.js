
export const fileUpload = async (file) =>{
    const cloudUrl = 'https://api.cloudinary.com/v1_1/ifstorage/upload';

    const formData = new FormData()
    formData.append('upload_preset','react-journal')
    formData.append('file',file)

    try {
        const respuesta = await fetch(cloudUrl,{
            method:'POST',
            body: formData
        })
        if(respuesta.ok){
            const  clouResp = await respuesta.json()
            return clouResp.secure_url
        }
        else {
            throw await respuesta.json()
        }
    } catch (error) {
        throw new Error(error)
    }

}