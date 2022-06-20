import { TextField, Button, TextareaAutosize } from "@mui/material";
import { useFormik } from "formik";
const CreateArticle = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="article-create m-10">
      <div className="article-create__box mx-auto ex-sm:max-w-full w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-start justify-between ex-sm:gap-8"
        >
          <h6 className="flex flex-col self-center items-center">
            Create your own article
          </h6>
          <TextField
            id="title"
            name="title"
            type="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            variant="standard"
            label="Enter your article title"
            className="p-1 w-full"
            required
          />
          <TextareaAutosize
            id="content"
            name="content"
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            onChange={formik.handleChange}
            value={formik.values.content}
            className="p-1 w-full border-[1px] border-gray-300"
            required
          />
          <Button variant="contained" type="submit" className="w-full">
            Create Article
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CreateArticle;
