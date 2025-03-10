function InputTextarea({ label, id, register, validationRules }) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <textarea
        id={id}
        className="h-[34px] w-full rounded border border-brown bg-transparent px-2 py-1.5 text-sm font-medium leading-6 text-brown focus:outline-none sm:h-[32px] sm:py-1 dark:border-background dark:text-background"
        {...(register && register(id, validationRules))}
      />
    </div>
  );
}

export default InputTextarea;
