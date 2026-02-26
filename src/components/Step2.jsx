import { useState } from "react";
import { useFormContext } from "react-hook-form";

function Step2({ nextStep, prevStep }) {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <h2>Account Details</h2>

      <input {...register("email")} placeholder="Email" />
      {errors.email && (
        <p className="error">{errors.email.message}</p>
      )}

      <div className="password-field">
        <input
          type={showPass ? "text" : "password"}
          {...register("password")}
          placeholder="Password"
        />
        <span
          onClick={() => setShowPass(!showPass)}
          dangerouslySetInnerHTML={{
            __html: showPass ? "&#128584;" : "&#128065;",
          }}
        ></span>
      </div>
      {errors.password && (
        <p className="error">{errors.password.message}</p>
      )}

      <div className="password-field">
        <input
          type={showConfirm ? "text" : "password"}
          {...register("confirmPassword")}
          placeholder="Confirm Password"
        />
        <span
          onClick={() => setShowConfirm(!showConfirm)}
          dangerouslySetInnerHTML={{
            __html: showConfirm ? "&#128584;" : "&#128065;",
          }}
        ></span>
      </div>
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}

      <button type="button" onClick={prevStep}>
        Back
      </button>
      <button type="button" disabled={!isValid} onClick={nextStep}>
        Next
      </button>
    </>
  );
}

export default Step2;