import axios from "axios";

async function analyzeImage(imageUrl) {
    const endpoint = "https://cvmy1ai.cognitiveservices.azure.com/";
    const apiKey = "70d892dd2e3f418dba6891a18fbcddce";
    const url = `${endpoint}/computervision/imageanalysis:analyze?api-version=2023-04-01-preview`;
    try {
        const response = await axios.post(url, { url: imageUrl }, {
            headers: {
                "Ocp-Apim-Subscription-Key": apiKey,
                "Content-Type": "application/json"
            },
            params: {
                features: "caption,read", 
                "model-version": "latest", 
                language: "en",
            }
        });
        return response.data;

    } catch (error) {
        console.error("Error analysing images:", error);
        throw error;
    }
}
export default analyzeImage;