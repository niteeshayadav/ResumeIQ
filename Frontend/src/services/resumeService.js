import api from "./api";

const uploadResume = async (formData) => {
    try {
        const response = await api.post('/analyze', formData);
        return response.data;
    } 
    catch (error) {
        console.error('Error uploading resume:', error);
        throw new Error(error.response?.data?.message || 'Failed to upload resume');
    }
};

export default uploadResume;