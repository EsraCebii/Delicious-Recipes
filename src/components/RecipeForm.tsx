import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function RecipeForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      ingredients: [],
      servesNumber: 0,
      directions: [],
      totalTime: 0,
      image: "",
      author: "",
    },
    onSubmit: (values) => {
      console.log(values);
      //    dispatch(addComment(form));
      //   navigate('/')
    },
  });
  return (
    <div className="container card">
      <h3>Recipe Form</h3>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="recipe"
            required
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Recipe Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>serves number</Form.Label>
          <Form.Control
            type="number"
            placeholder="serves number"
            id="servesNumber"
            name="servesNumber"
            required
            onChange={formik.handleChange}
            value={formik.values.servesNumber}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>total time</Form.Label>
          <Form.Control
            type="number"
            placeholder="total time"
            required
            id="totalTime"
            name="totalTime"
            onChange={formik.handleChange}
            value={formik.values.totalTime}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author name</Form.Label>
          <Form.Control
            type="text"
            placeholder="author name"
            required
            id="author"
            name="author"
            onChange={formik.handleChange}
            value={formik.values.author}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ingredients</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            id="ingredients"
            name="ingredients"
            onChange={formik.handleChange}
            value={formik.values.ingredients}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>directions</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            id="directions"
            name="directions"
            onChange={formik.handleChange}
            value={formik.values.directions}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Recipe Image</Form.Label>
          <Form.Control
            type="file"
            required
            id="image"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default RecipeForm;