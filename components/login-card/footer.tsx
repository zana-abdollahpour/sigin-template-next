export function Footer() {
  return (
    <div className="mt-8 border-t border-(--border-color) pt-4 text-center">
      <p className="text-[10px] leading-relaxed text-(--text-secondary)">
        <span
          data-en="By clicking continue, you agree to our"
          data-fa="با ادامه دادن، شما قوانین ما را می‌پذیرید:"
        >
          با ادامه دادن، شما قوانین ما را می‌پذیرید:{" "}
        </span>
        <a
          href="#"
          className="underline hover:text-(--text-primary)"
          data-en="Terms of Service"
          data-fa="شرایط استفاده"
        >
          شرایط استفاده
        </a>
        <span data-en="and" data-fa="و" className="mx-0.5">
          و
        </span>
        <a
          href="#"
          className="underline hover:text-(--text-primary)"
          data-en="Privacy Policy"
          data-fa="حریم خصوصی"
        >
          حریم خصوصی
        </a>
        .
      </p>
    </div>
  );
}
