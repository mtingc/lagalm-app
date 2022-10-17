import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { useMutation } from '@apollo/client';
import { Add_WORKAREA } from '@gql/workArea';

import Section from '@components/Form/Section';
import InputText from '@components/Form/InputText';
import Button from '@components/Form/Button';

const NewWorkAreaForm = () => {
  const [addWorkArea, { loading }] = useMutation(Add_WORKAREA);
  const initialValues = {
    title: '',
    description: '',
    details: {
      status: true,
      creatorUserId: '1',
    },
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Titulo obligatorio'),
    description: Yup.string().required('Descripción obligatoria'),
  });
  const onSubmit = async (formData) => {
    try {
      const result = await addWorkArea({
        variables: { workArea: formData },
      });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <Section title="Area de trabajo">
            <Field label="Titulo" type="text" name="title" component={InputText} />
            <Field label="Descripción" type="text" name="description" component={InputText} />
          </Section>
          <div className="flex justify-end">
            <Button type="white">Cancelar</Button>
            <Button disabled={!formik.isValid || formik.isSubmitting}>Enviar</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewWorkAreaForm;
