import axios from "axios";
import { baseUrl } from "../utils/envirnment";

export const signupHandler = async (username, number, email, password, setAlert) => {
  alert('came in signup in services of client')
  try {
    const data = await axios.post(
      `${baseUrl}/api/auth/register`,
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log("Signed Up");
    console.log(data);
    setAlert({
      open: true,
      message: `Account Created:: username - ${username}`,
      type: "success"
    })
  } catch (err) {
    console.log("error adding user to database");
  }
};
