import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { useMutation, useQuery } from '@apollo/client';
import { REGISTER_USER } from '@gql/user';
import { GET_WORKAREAS } from '@gql/workArea';

import { CalendarIcon, MailIcon, PhoneIcon, CurrencyDollarIcon, HashtagIcon } from '@heroicons/react/solid';

import Section from '@components/Form/Section';
import InputText from '@components/Form/InputText';
import InputSelect from '@components/Form/InputSelect';
import InputCheckBox from '@components/Form/InputCheckBox';
import Button from '@components/Form/Button';

const NewUserForm = () => {
  const { data, loading } = useQuery(GET_WORKAREAS);
  const [register] = useMutation(REGISTER_USER);
  const initialValues = {
    name: '',
    lastname: '',
    birthday: '',
    gender: '',
    maritalStatus: '',
    curp: '',
    address: {
      street: '',
      number: {
        exterior: '',
        interior: '',
      },
      colony: '',
      municipality: '',
      state: '',
      country: 'México',
      zipCode: '',
      streets: {
        a: '',
        b: '',
      },
    },
    email: '',
    password: '',
    repeatPassword: '',
    phone: '',
    role: '',
    rfc: '',
    schooling: '',
    nss: '',
    infonavitCredit: false,
    job: {
      workAreaId: '',
      description: '',
      schedule: {
        from: '',
        to: '',
      },
      salary: '',
      accountNumber: '',
    },
    details: {
      status: true,
      creatorUserId: '1',
    },
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Nombre obligatorio'),
    lastname: Yup.string().required('Uno de los apellidos, es obligatorio'),
    birthday: Yup.string(),
    gender: Yup.string().required('El genero es requerido'),
    maritalStatus: Yup.string().required('El estado civil es requerido'),
    curp: Yup.string()
      .matches(
        /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        'CURP no válido'
      )
      .required('El CURP es obligatorio'),
    address: Yup.object({
      street: Yup.string().required('La calle es obligatoria'),
      number: Yup.object({
        exterior: Yup.string().required('El número exterior es obligatorio'),
        interior: Yup.string(),
      }),
      colony: Yup.string().required('La colonia es obligatoria'),
      municipality: Yup.string().required('El municipio es obligatorio'),
      state: Yup.string().required('El estado es requerido'),
      country: Yup.string().required('El país es obligatorio'),
      zipCode: Yup.string()
        .matches(/^[0-9]{5}/, 'Código postal no válido')
        .required('El código postal es obligatorio'),
      streets: Yup.object({
        a: Yup.string(),
        b: Yup.string(),
      }),
    }),
    email: Yup.string().email('No es una dirección de correo valida').required('El correo es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'La contraseña no coincide')
      .required('La contraseña es obligatoria'),
    phone: Yup.string()
      .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'Número telefónico no válido')
      .required('El teléfono es obligatorio'),
    role: Yup.string().required('El ROL del usuario es requerido'),
    rfc: Yup.string()
      .matches(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/, 'RFC no válido')
      .required('El RFC es obligatorio'),
    schooling: Yup.string().required('La escolaridad es requerida'),
    nss: Yup.string()
      .matches(/^(\d{2})(\d{2})(\d{2})\d{5}$/, 'NSS no válido')
      .required('El NSS es obligatorio'),
    infonavitCredit: Yup.boolean(),
    job: Yup.object({
      workAreaId: Yup.string().required('El area de trabajo es requerida'),
      description: Yup.string().required('La descripción del puesto es obligatoria'),
      schedule: Yup.object({
        from: Yup.string().required('La hora es obligatoria'),
        to: Yup.string().required('El termino de su jornada laboral es obligatoria'),
      }),
      salary: Yup.string().required('El salario es obligatorio'),
      accountNumber: Yup.string().required('El número de cuenta es obligatoria'),
    }),
  });

  const onSubmit = async (formData) => {
    /* ERROR 404 with Apollo
    try {
      const result = await register({
        variables: { user: formData },
      });
      console.log(result);
    } catch (e) {
      console.log(e);
    } */
  };
  const workArea = data?.workAreas.workAreas.map((workArea) => {
    return { id: workArea.id, value: workArea.title };
  });

  const gender = ['HOMBRE', 'MUJER', 'OTRO'];
  const maritalStatus = ['SOLTERO', 'CASADO', 'UNION_LIBRE', 'VIUDO', 'DIVORCIADO'];
  const states = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila de Zaragoza',
    'Colima',
    'Ciudad de México',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Estado de Mexico',
    'Michoacan de Ocampo',
    'Morelos',
    'Nayarit',
    'Nuevo Leon',
    'Oaxaca',
    'Puebla',
    'Queretaro de Arteaga',
    'Quintana Roo',
    'San Luis Potosi',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz de Ignacio de la Llave',
    'Yucatan',
    'Zacatecas',
  ];
  const rol = ['USER', 'ADMIN'];
  const schooling = ['PRIMARIA', 'SECUNDARIA', 'BACHILLERATO', 'TECNICA', 'LICENCIATURA', 'INGENIERIA', 'MAESTRIA', 'POSTGRADO'];

  if (loading) return <p>Cargando...</p>;

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <Section title="Informacion Personal">
            <Field label="Nombre" type="text" name="name" component={InputText} col="3" />
            <Field label="Apellidos" type="text" name="lastname" component={InputText} col="3" />
            <Field label="Cumpleaños" type="text" name="birthday" leading={CalendarIcon} component={InputText} />
            <Field label="Genero" name="gender" options={gender} component={InputSelect} col="3" />
            <Field label="Estado civil" name="maritalStatus" options={maritalStatus} component={InputSelect} col="3" />
            <Field label="CURP" type="text" name="curp" component={InputText} />
            <Field label="Calle" type="text" name="address.street" component={InputText} col="2" />
            <Field label="Numero exterior" type="text" name="address.number.exterior" leading={HashtagIcon} component={InputText} col="2" />
            <Field label="Numero interior" type="text" name="address.number.interior" leading={HashtagIcon} component={InputText} col="2" />
            <Field label="Colonia" type="text" name="address.colony" component={InputText} col="3" />
            <Field label="Municipio/Delegación" type="text" name="address.municipality" component={InputText} col="3" />
            <Field label="Estados" name="address.state" options={states} component={InputSelect} col="3" />
            <Field label="País" type="text" name="address.country" component={InputText} col="3" />
            <Field label="Codigo Postal" type="text" name="address.zipCode" component={InputText} />
            <Field label="Entre calle" type="text" name="address.streets.a" component={InputText} col="3" />
            <Field label="y calle" type="text" name="address.streets.b" component={InputText} col="3" />
          </Section>
          <Section title="Cuenta">
            <Field label="Correo" type="email" name="email" leading={MailIcon} component={InputText} />
            <Field label="Contraseña" type="password" name="password" component={InputText} col="3" />
            <Field label="Repetir contraseña" type="password" name="repeatPassword" component={InputText} col="3" />
            <Field label="Teléfono" type="text" name="phone" leading={PhoneIcon} component={InputText} />
            <Field label="Rol de la cuenta" name="role" options={rol} component={InputSelect} />
          </Section>
          <Section title="Información laboral">
            <Field label="RFC" type="text" name="rfc" component={InputText} />
            <Field label="Escolaridad" name="schooling" options={schooling} component={InputSelect} />
            <Field label="NSS" type="text" name="nss" component={InputText} />
            <Field label={['Credito infonavit', 'Si el usuario cuenta con un credito infonavit']} name="infonavitCredit" component={InputCheckBox} />
            <Field label="Area de trabajo" name="job.workAreaId" options={workArea} component={InputSelect} />
            <Field label="Descripción del puesto" type="text" name="job.description" component={InputText} />
            <Field label="Horario de" type="text" name="job.schedule.from" trailing="hrs" component={InputText} col="3" />
            <Field label="a" type="text" name="job.schedule.to" trailing="hrs" component={InputText} col="3" />
            <Field label="Salario" type="text" name="job.salary" leading={CurrencyDollarIcon} component={InputText} />
            <Field label="Numero de cuenta" type="text" name="job.accountNumber" component={InputText} />
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

export default NewUserForm;
