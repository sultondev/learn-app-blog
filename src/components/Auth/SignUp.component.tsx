import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import UserPicture from "../../media/images/users/user-01.svg";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section
      className="signup 
      flex items-center h-[94vh]
      ex-sm:m-[24px]"
    >
      <div className="signup-box mx-auto ex-sm:max-w-xs w-full border-[1px] border-gray-600 py-6 px-10">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-start justify-between ex-sm:gap-8"
        >
          <h6 className="flex flex-col self-center items-center">
            <img src={UserPicture} alt="" className="w-20 h-20" />
            Please, fill the fields
          </h6>
          <TextField
            id="fullname"
            name="fullname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullname}
            variant="standard"
            label="Enter your name"
            className="p-1 w-full"
            required
          />
          <TextField
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            variant="standard"
            label="Enter your name"
            className="p-1 w-full"
            required
          />
          <TextField
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            variant="standard"
            label="Enter your email"
            className="p-1 w-full"
            required
          />
          <TextField
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            variant="standard"
            label="Enter your password"
            className="p-1 w-full"
            required
          />
          <Button variant="contained" type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
