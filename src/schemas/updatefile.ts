import {
  InferInput,
  array,
  minLength,
  minValue,
  number,
  object,
  optional,
  string,
  pipe,
} from "valibot";

const UpdateFileSchema = object({
  file_no: pipe(string(), minLength(1, "Please enter file number.")),
  applicant_name: pipe(string(), minLength(1, "Please enter applicant name.")),
  survey_number: pipe(
    string(),
    minLength(1, "Please enter your file survey number.")
  ),
  villageId: pipe(number(), minValue(1, "Select village.")),
  typeId: pipe(number(), minValue(1, "Select File Type.")),
  names: optional(array(pipe(string(), minLength(1, "Please enter name.")))),
  surveyNumbers: optional(
    array(pipe(string(), minLength(1, "Please enter survey number.")))
  ),
  referenceNumbers: optional(
    array(pipe(string(), minLength(1, "Please enter reference number.")))
  ),
  dates: optional(array(pipe(string(), minLength(1, "Please enter date.")))),
});

type UpdateFileForm = InferInput<typeof UpdateFileSchema>;
export { UpdateFileSchema, type UpdateFileForm };
