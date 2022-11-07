import { FormHelperText, FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { FormControl } from "@chakra-ui/react";
import { resolve } from "path";
import { useForm } from "react-hook-form";
import { useState } from "react"

export default function SignupForm() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()

  function onSubmit(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(value, null, 2))
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name ? true : false}>
        <FormLabel>メールアドレス</FormLabel>
        <Input id="email" type={"email"} {...register("email", {
          required: "This is required",
        })}></Input>
        <FormHelperText></FormHelperText>
        <FormErrorMessage>
        </FormErrorMessage>
      </FormControl>
    </form>
  )
}