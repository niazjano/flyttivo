export type OfferPayload = {
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
};

const OFFER_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxiLYhOoO_knZV_LK--TxLILaFI0ReIaaPNdTKEhH3HlPjDPy1v2IV_XpppjxArPLpH/exec";

const OFFER_FORM_SELECTOR = "[data-offer-form]";
const SUCCESS_SELECTOR = "[data-success-message]";
const ERROR_SELECTOR = "[data-error-message]";

type OfferFormElement = HTMLFormElement & {
  name: HTMLInputElement;
  phone: HTMLInputElement;
  email: HTMLInputElement;
  city: HTMLInputElement;
  message: HTMLTextAreaElement;
};

function showSuccessMessage(form: HTMLFormElement) {
  const success = form.querySelector<HTMLElement>(SUCCESS_SELECTOR);
  const error = form.querySelector<HTMLElement>(ERROR_SELECTOR);
  success?.classList.remove("hidden");
  error?.classList.add("hidden");
}

function showErrorMessage(form: HTMLFormElement) {
  const success = form.querySelector<HTMLElement>(SUCCESS_SELECTOR);
  const error = form.querySelector<HTMLElement>(ERROR_SELECTOR);
  success?.classList.add("hidden");
  error?.classList.remove("hidden");
}

function setSubmitting(form: HTMLFormElement, submitting: boolean) {
  const submitButton = form.querySelector<HTMLButtonElement>(
    'button[type="submit"]'
  );
  if (!submitButton) return;

  if (!submitButton.dataset.originalText) {
    submitButton.dataset.originalText = submitButton.textContent ?? "";
  }

  submitButton.disabled = submitting;
  submitButton.textContent = submitting
    ? "Skickar..."
    : submitButton.dataset.originalText || "Skicka";
}

async function handleSubmit(event: Event) {
  event.preventDefault();

  const form = event.target as OfferFormElement | null;
  if (!form) return;

  const payload: OfferPayload = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    city: form.city.value,
    message: form.message.value,
  };

  setSubmitting(form, true);
  form.querySelector<HTMLElement>(SUCCESS_SELECTOR)?.classList.add("hidden");
  form.querySelector<HTMLElement>(ERROR_SELECTOR)?.classList.add("hidden");

  try {
    const res = await fetch(OFFER_WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Request failed");

    showSuccessMessage(form);
    form.reset();
  } catch (err) {
    showErrorMessage(form);
  } finally {
    setSubmitting(form, false);
  }
}

export function initOfferForms() {
  if (typeof document === "undefined") return;

  const forms = Array.from(
    document.querySelectorAll<HTMLFormElement>(OFFER_FORM_SELECTOR)
  );

  forms.forEach((form) => {
    if (form.dataset.offerBound === "true") return;
    form.dataset.offerBound = "true";
    form.addEventListener("submit", handleSubmit);
  });
}
