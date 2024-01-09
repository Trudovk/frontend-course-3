import { useForm } from "react-hook-form";
import { FormType } from "../../types";
import styled from "styled-components";
import { useState } from "react";

const StyledButton = styled.button`
  background-color: var(--theme);
  border: none;
  color: var(--text);
  &:focus {
    border: none;
  }
  &:active {
    border: none;
  }
`;

const StyledInput = styled.input`
  border: 1px solid var(--text);
  background-color: var(--theme);
  color: var(--text);
`;

export default function Feedback() {
  const [massage, setMassage] = useState<FormType[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormType>({
    mode: "onBlur",
  });
  const saveElement = (data: FormType) => {
    setMassage((prev) => [...prev, data]);
    reset();
  };
  return (
    <main>
      <form onSubmit={handleSubmit(saveElement)}>
        <StyledInput
          {...register("mail", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
        />
        <div>{errors.mail?.message}</div>
        <StyledInput
          {...register("text", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 10,
              message: "Нужно больше символов",
            },
          })}
        />
        <div>{errors.text?.message}</div>
        <StyledButton disabled={!isValid} type="submit">
          Отправить
        </StyledButton>
      </form>
      <ul>
        {massage.map((massage, key) => (
          <li key={key}>
            <h2>{massage.text}</h2>
            <p>{massage.mail}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
