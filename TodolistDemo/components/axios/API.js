import axios from 'axios';

const baseURL = 'http://10.0.2.2:3000/Todos'
export const getData = async () => {
    try {
        const res = await axios.get(baseURL);
        return res.data;
    } catch (error) {
        console.log({
            error_message: error
        })
    }
}

export const postData = async (title) => {
    try {
        await axios.post(baseURL, title)
        console.log(title);
    } catch (error) {
        console.log({
            error_message: error
        }) 
    }
}

export const delData = async (id) => {
    try {
        await axios.delete(`${baseURL}/${id}`)
    } catch (error) {
        console.error(error); 
    }
}