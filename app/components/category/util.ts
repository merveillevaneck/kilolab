export const mapToInitialState = (categories: string[]) => {
  return categories.reduce((prev: {[key: keyof typeof categories]}, curr: string) => ({
    ...prev,
    [curr]: false,
  }), {});
}