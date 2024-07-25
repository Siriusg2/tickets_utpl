"use client";

import TicketsForm from "../../components-built-in/ticketsForm";
import FormContainer from "../../components-built-in/formContainer";

export default function TicketsFormContainer() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-6xl h-[75vh]">
        <FormContainer title="Formulario de Tickets">
          <TicketsForm />
        </FormContainer>
      </div>
    </div>
  );
}
