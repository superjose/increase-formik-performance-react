import React, { memo } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../../components/Fields/Form/TextField";
import { Grid } from "@mui/material";

export type ProblematicProps = {};

export const Problematic: React.FC<ProblematicProps> = memo((props) => {
  const totalFields = new Array<number>(30).fill(0);
  return (
    <Formik
      initialValues={{
        state: {},
      }}
      onSubmit={() => {}}
    >
      <Form>
        <Grid container={true}>
          {totalFields.map((f, i) => (
            <Grid item={true} xs={12} md={4} key={`state.field-${i}`}>
              <TextField name={`state.field-${i}`} />
            </Grid>
          ))}
        </Grid>
      </Form>
    </Formik>
  );
});
