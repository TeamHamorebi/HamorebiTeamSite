import axios from "axios";
import { ContactGoogleForm } from "../../../lib/ContactGoogleForm";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    await axios.post(ContactGoogleForm.action, req, {
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
