export default function WelcomeHeader() {
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="mb-6">
      <p className="text-sm font-medium text-slate-500">{today}</p>

      <h1 className="mt-1 font-serif text-3xl font-bold text-[#0b1f3a]">
        Welcome back
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        Here is what is happening across ACMGS today.
      </p>
    </div>
  );
}
