import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./validationSchema";
import "./App.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [step, setStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    console.log("SUBMITTED:", data);

    setStep(4);

    setTimeout(() => {
      reset();
      setStep(1);
    }, 1000);
  };

  return (
    <FormProvider {...methods}>
      <div className="container">
        {step <= 3 && (
          <div className="progress">
            Step {step} of 3
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}
        {step <= 3 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <Step1 nextStep={() => setStep(2)} />
            )}

            {step === 2 && (
              <Step2
                nextStep={() => setStep(3)}
                prevStep={() => setStep(1)}
              />
            )}

            {step === 3 && (
              <Step3 prevStep={() => setStep(2)} />
            )}
          </form>
        )}
        {step === 4 && (
          <div className="success-message">
            Successfully Form Submitted!
          </div>
        )}
      </div>
    </FormProvider>
  );
}

export default App;