type SearchFieldProps = {
  defaultValue?: string;
};

export function SearchField({ defaultValue = "" }: SearchFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="q" className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Search products
      </label>
      <input
        id="q"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search by product name or description"
        className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-400"
      />
    </div>
  );
}
