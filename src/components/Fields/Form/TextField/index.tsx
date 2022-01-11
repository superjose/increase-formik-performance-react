import { useField } from "formik";
import React, { memo } from "react";
import { TextField as MUITextField } from "@mui/material";

export type TextFieldProps = {
  name: string;
  label?: string;
};

export const TextField: React.FC<TextFieldProps> = memo((props) => {
  const { name, label } = props;
  const [field] = useField(name);
  return <MUITextField label={label} {...field} />;
});
