import React, { memo } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../../components/Fields/Form/TextField";
import { Grid } from "@mui/material";

export type ProblematicProps = {};

/**
 * This is the  problematic view.
 *
 * It's using the <TextField /> directly
 *
 * SEe the performant view to see how the <PerformantTextField /> is used
 */
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
        <Grid container={true} spacing={3}>
          {totalFields.map((f, i) => (
            <Grid item={true} xs={12} md={4} key={`state.field-${i}`}>
              <TextField
                label={"Field #" + (i + 1)}
                name={`state.field-${i}`}
              />
            </Grid>
          ))}
        </Grid>
      </Form>
    </Formik>
  );
});
