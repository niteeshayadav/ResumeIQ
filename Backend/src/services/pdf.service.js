import {PDFParse} from 'pdf-parse';

const extractTextFromPDF = async (buffer) => {
    try{
        const Uint8ArrayBuffer = new Uint8Array(buffer);
        const data = new PDFParse(Uint8ArrayBuffer);
        const result = await data.getText();
        console.log(result.text);
        return result.text;
    }
    catch(error){
        console.error(error);
        throw new Error("Failed to extract text from PDF");
    }
}

export default extractTextFromPDF;
