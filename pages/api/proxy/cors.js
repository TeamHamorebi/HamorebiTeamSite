import axios from "axios";
import { ContactGoogleForm } from "../../../lib/ContactGoogleForm";

// multipart/form-data を使用するのに必要。ないとtext/plainに変換されてしまう。
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const formData = req; // Contact.jsから受け取ったフォームデータ諸々
  try {
    await axios.post(ContactGoogleForm.action, formData, {
      headers: {
        "Content-type": req.headers["content-type"],
      },
    });
    res.status(200).json();
  } catch (error) {
    console.log(error.response);
    return res.status(error.status || 500).end(error.message);
  }
}
