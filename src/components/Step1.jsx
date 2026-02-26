import { useFormContext } from "react-hook-form";

function Step1({ nextStep }) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(["firstName", "lastName", "dob"]);

    if (valid) nextStep();
  };

  return (
    <>
      <h2>Personal Info</h2>

      <input {...register("firstName")} placeholder="First Name" />
      {errors.firstName && (
        <p className="error">{errors.firstName.message}</p>
      )}

      <input {...register("lastName")} placeholder="Last Name" />
      {errors.lastName && (
        <p className="error">{errors.lastName.message}</p>
      )}

      <input type="date" {...register("dob")} />
      {errors.dob && (
        <p className="error">{errors.dob.message}</p>
      )}

      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
  );
}

export default Step1;