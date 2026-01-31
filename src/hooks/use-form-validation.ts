import { useState, useCallback } from "react";
import { FORM_CONSTRAINTS } from "@/lib/constants";

interface FormData {
  [key: string]: string;
}

interface ValidationErrors {
  [key: string]: string;
}

export const useFormValidation = (initialValues: FormData) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validate email
  const validateEmail = useCallback((email: string): boolean => {
    return FORM_CONSTRAINTS.EMAIL_REGEX.test(email);
  }, []);

  // Validate individual field
  const validateField = useCallback(
    (name: string, value: string): string => {
      switch (name) {
        case "name":
          if (!value.trim()) {
            return "Name is required";
          }
          if (value.trim().length < FORM_CONSTRAINTS.NAME_MIN_LENGTH) {
            return `Name must be at least ${FORM_CONSTRAINTS.NAME_MIN_LENGTH} characters`;
          }
          if (value.length > FORM_CONSTRAINTS.NAME_MAX_LENGTH) {
            return `Name must not exceed ${FORM_CONSTRAINTS.NAME_MAX_LENGTH} characters`;
          }
          return "";

        case "email":
          if (!value.trim()) {
            return "Email is required";
          }
          if (!validateEmail(value)) {
            return "Please enter a valid email address";
          }
          return "";

        case "message":
          if (!value.trim()) {
            return "Message is required";
          }
          if (value.trim().length < FORM_CONSTRAINTS.MESSAGE_MIN_LENGTH) {
            return `Message must be at least ${FORM_CONSTRAINTS.MESSAGE_MIN_LENGTH} characters`;
          }
          if (value.length > FORM_CONSTRAINTS.MESSAGE_MAX_LENGTH) {
            return `Message must not exceed ${FORM_CONSTRAINTS.MESSAGE_MAX_LENGTH} characters`;
          }
          return "";

        default:
          return "";
      }
    },
    [validateEmail]
  );

  // Handle field change
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors]
  );

  // Handle field blur
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setTouched(prev => ({
        ...prev,
        [name]: true,
      }));

      const error = validateField(name, value);
      if (error) {
        setErrors(prev => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [validateField]
  );

  // Validate entire form
  const validateForm = useCallback((): boolean => {
    const newErrors: ValidationErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setFormData,
  };
};
