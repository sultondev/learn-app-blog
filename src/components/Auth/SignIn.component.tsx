import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section
      className="signin 
      flex items-center h-[94vh]
      ex-sm:m-[24px]"
    >
      <div className="signin-box mx-auto ex-sm:max-w-xs w-full border-[1px] border-gray-600 py-6 px-10">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-start justify-between ex-sm:gap-8"
        >
          <h6 className="flex flex-col self-center items-center">
            Welcome back
          </h6>
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
            Log In
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
