import { useFormContext } from "react-hook-form";

function Step3({ prevStep }) {
  const { getValues } = useFormContext();
  const data = getValues();

  return (
    <>
      <h2>Review</h2>

      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>DOB: {data.dob}</p>
      <p>Email: {data.email}</p>

      <button type="button" onClick={prevStep}>
        Back
      </button>

      <button type="submit">
        Submit
      </button>
    </>
  );
}

export default Step3;