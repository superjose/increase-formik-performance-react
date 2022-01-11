import { Grid } from "@mui/material";
import { Formik, Form } from "formik";
import React, { memo } from "react";
import { PerformantTextField } from "../../components/Fields/Form/PerformantTextField";

export type PerformantProps = {};

export const Performant: React.FC<PerformantProps> = memo((props) => {
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
              <PerformantTextField
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
