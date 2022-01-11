import { useField } from "formik";
import React, { memo } from "react";
// import { TextField as MUITextField } from "@mui/material";
import MUITextField from "@mui/material/TextField";

export type TextFieldProps = {
  name: string;
};

export const TextField: React.FC<TextFieldProps> = memo((props) => {
  const { name } = props;
  const [field] = useField(name);
  return <MUITextField {...field} />;
});
