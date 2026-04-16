type SearchFieldProps = {
  defaultValue?: string;
};

export function SearchField({ defaultValue = "" }: SearchFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="q" className="text-sm font-medium text-slate-700">
        Search products
      </label>
      <input
        id="q"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search by product name or description"
        className="h-10 rounded-md border border-slate-300 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
      />
    </div>
  );
}
