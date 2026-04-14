/**
 * Hook to manage NavButton logic
 */
export function useNavButtonState(direction?: "left" | "right") {
  const hoverTranslate =
    direction === "left"
      ? "group-hover:-translate-x-0.5"
      : direction === "right"
        ? "group-hover:translate-x-0.5"
        : "";

  return {
    hoverTranslate,
  };
}
