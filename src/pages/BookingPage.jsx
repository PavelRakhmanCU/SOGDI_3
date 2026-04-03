import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

/** Formspree form endpoint — same as previous site version */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnngrbnj";

const EMAIL_PATTERN = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "Please enter a valid email address.",
};

function countPhoneDigits(value) {
  if (!value || typeof value !== "string") return 0;
  return value.replace(/\D/g, "").length;
}

function validatePhone(value) {
  if (!value || !String(value).trim()) {
    return "Contact number is required.";
  }
  const digits = countPhoneDigits(value);
  if (digits < 10) {
    return "Enter a valid number with at least 10 digits.";
  }
  if (digits > 15) {
    return "That number looks too long. Please check and try again.";
  }
  return true;
}

function Booking() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm({ mode: "onBlur" });

  const { setActivator } = useContext(GlobalContext);

  const handleFormInteraction = () => {
    setActivator(false);
  };

  const validateAtLeastOneFile = () => {
    const v = getValues();
    const files = [
      v.designFile,
      v.designFile1,
      v.designFile2,
      v.designFile3,
    ];
    const has = files.some((f) => f && f.length > 0);
    return has || "Please upload at least one file (body area or inspiration).";
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Match previous Formspree field names (including `ity` for city)
    const subject = `New Booking request from ${data.fullName}`;
    formData.append("subject", subject);
    formData.append("full-name", data.fullName);
    formData.append("height", data.height);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("ity", data.city);
    formData.append("design-description", data.designDescription);

    if (data.designFile && data.designFile.length > 0) {
      formData.append("design-file", data.designFile[0]);
    }
    if (data.designFile1 && data.designFile1.length > 0) {
      formData.append("design-file-1", data.designFile1[0]);
    }
    if (data.designFile2 && data.designFile2.length > 0) {
      formData.append("design-file-2", data.designFile2[0]);
    }
    if (data.designFile3 && data.designFile3.length > 0) {
      formData.append("design-file-3", data.designFile3[0]);
    }

    try {
      const response = await axios.post(FORMSPREE_ENDPOINT, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error(error.response);
      if (error.response) {
        console.log(error.response.data);
      }
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-form-container" onClick={handleFormInteraction}>
        <header className="booking-form__intro">
          <h1 className="booking-form__title">Book a session</h1>
          <p className="booking-form__lead">
            Send your details and references. I&apos;ll get back to you as soon as I
            can.
          </p>
        </header>

        <form
          className="booking-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="booking-form__grid">
            <div className="booking-form__field booking-form__field--span-2">
              <label className="booking-form__label" htmlFor="fullName">
                Full name <span aria-hidden="true">*</span>
              </label>
              <input
                className="booking-form__input"
                type="text"
                id="fullName"
                autoComplete="name"
                aria-invalid={errors.fullName ? "true" : "false"}
                aria-describedby={errors.fullName ? "err-fullName" : undefined}
                {...register("fullName", {
                  required: "Full name is required.",
                })}
                onFocus={handleFormInteraction}
              />
              {errors.fullName && (
                <p id="err-fullName" className="booking-form__error" role="alert">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="booking-form__field">
              <label className="booking-form__label" htmlFor="height">
                Height <span aria-hidden="true">*</span>
              </label>
              <input
                className="booking-form__input"
                type="text"
                id="height"
                autoComplete="off"
                placeholder='e.g. 5&apos;8&quot;'
                aria-invalid={errors.height ? "true" : "false"}
                aria-describedby={errors.height ? "err-height" : undefined}
                {...register("height", { required: "Height is required." })}
              />
              {errors.height && (
                <p id="err-height" className="booking-form__error" role="alert">
                  {errors.height.message}
                </p>
              )}
            </div>

            <div className="booking-form__field">
              <label className="booking-form__label" htmlFor="city">
                City <span aria-hidden="true">*</span>
              </label>
              <input
                className="booking-form__input"
                type="text"
                id="city"
                autoComplete="address-level2"
                aria-invalid={errors.city ? "true" : "false"}
                aria-describedby={errors.city ? "err-city" : undefined}
                {...register("city", { required: "City is required." })}
              />
              {errors.city && (
                <p id="err-city" className="booking-form__error" role="alert">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className="booking-form__field">
              <label className="booking-form__label" htmlFor="email">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                className="booking-form__input"
                type="email"
                id="email"
                autoComplete="email"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "err-email" : undefined}
                {...register("email", {
                  required: "Email is required.",
                  pattern: EMAIL_PATTERN,
                })}
              />
              {errors.email && (
                <p id="err-email" className="booking-form__error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="booking-form__field">
              <label className="booking-form__label" htmlFor="phone">
                Contact number <span aria-hidden="true">*</span>
              </label>
              <input
                className="booking-form__input"
                type="tel"
                id="phone"
                autoComplete="tel"
                inputMode="tel"
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "err-phone" : undefined}
                {...register("phone", { validate: validatePhone })}
              />
              {errors.phone && (
                <p id="err-phone" className="booking-form__error" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="booking-form__field booking-form__field--files booking-form__field--span-2">
              <p className="booking-form__files-heading">Reference photos</p>
              <p className="booking-form__hint">
                Upload at least one file — body area and/or inspiration images.
              </p>

              <div className="booking-form__file-row">
                <label className="booking-form__file-label" htmlFor="designFile">
                  Body area photo
                </label>
                <input
                  className="booking-form__file"
                  type="file"
                  id="designFile"
                  accept="image/*"
                  {...register("designFile", {
                    validate: validateAtLeastOneFile,
                  })}
                />
              </div>
              <div className="booking-form__file-row">
                <label className="booking-form__file-label" htmlFor="designFile1">
                  Inspiration 1
                </label>
                <input
                  className="booking-form__file"
                  type="file"
                  id="designFile1"
                  accept="image/*"
                  {...register("designFile1")}
                />
              </div>
              <div className="booking-form__file-row">
                <label className="booking-form__file-label" htmlFor="designFile2">
                  Inspiration 2
                </label>
                <input
                  className="booking-form__file"
                  type="file"
                  id="designFile2"
                  accept="image/*"
                  {...register("designFile2")}
                />
              </div>
              <div className="booking-form__file-row">
                <label className="booking-form__file-label" htmlFor="designFile3">
                  Inspiration 3
                </label>
                <input
                  className="booking-form__file"
                  type="file"
                  id="designFile3"
                  accept="image/*"
                  {...register("designFile3")}
                />
              </div>
              {errors.designFile && (
                <p className="booking-form__error" role="alert">
                  {errors.designFile.message}
                </p>
              )}
            </div>

            <div className="booking-form__field booking-form__field--span-2">
              <label className="booking-form__label" htmlFor="designDescription">
                Notes &amp; design details <span aria-hidden="true">*</span>
              </label>
              <textarea
                className="booking-form__textarea"
                id="designDescription"
                rows={6}
                placeholder="Describe your idea, placement, size, and any other notes."
                aria-invalid={errors.designDescription ? "true" : "false"}
                aria-describedby={
                  errors.designDescription ? "err-notes" : undefined
                }
                {...register("designDescription", {
                  required: "Please add notes about your tattoo idea.",
                  minLength: {
                    value: 15,
                    message: "Please add a bit more detail (at least 15 characters).",
                  },
                  setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
                })}
              />
              {errors.designDescription && (
                <p id="err-notes" className="booking-form__error" role="alert">
                  {errors.designDescription.message}
                </p>
              )}
            </div>
          </div>

          <div className="booking-form__actions">
            <button
              type="submit"
              className="booking-form__submit cta-button"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Submit booking request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;
