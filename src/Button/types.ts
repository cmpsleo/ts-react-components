const variants = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;

export type ButtonVariants = typeof variants[number];

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  variant?: ButtonVariants;
};
