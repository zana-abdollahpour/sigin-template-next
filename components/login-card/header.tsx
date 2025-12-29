export function Header() {
  return (
    <div className="mb-8 text-center">
      <h1
        className="mb-2 text-2xl font-bold"
        data-en="Welcome back"
        data-fa="خوش آمدید"
      >
        خوش آمدید
      </h1>
      <p
        className="text-sm text-(--text-secondary)"
        data-en="Sign in to AI4US to continue"
        data-fa="برای ادامه وارد حساب AI4US شوید"
      >
        برای ادامه وارد حساب AI4US شوید
      </p>
    </div>
  );
}
