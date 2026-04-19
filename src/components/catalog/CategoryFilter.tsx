type CategoryFilterProps = {
  categories: string[];
  defaultValue?: string;
};

export function CategoryFilter({
  categories,
  defaultValue = "",
}: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="category" className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Category
      </label>
      <select
        id="category"
        name="category"
        defaultValue={defaultValue}
        className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-50 dark:focus:border-slate-400"
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
