import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function login(formData: FormData) {
  "use server";
  const password = formData.get("password") as string;
  if (password === "SRC2026FR") {
    const cookieStore = await cookies();
    cookieStore.set("norde-fin-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    redirect("/businessplan/financieel");
  }
  redirect("/businessplan/login?error=1");
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex flex-col min-h-screen bg-nacht">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nacht" style={{ height: "52px", borderBottom: "0.5px solid rgba(242,237,230,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14 h-full flex items-center justify-between">
          <a href="/" className="text-lin" style={{ fontFamily: "var(--font-nord)", fontWeight: 900, fontSize: "22px", letterSpacing: "0.05em", lineHeight: 1 }}>
            NOORD
          </a>
          <a
            href="/businessplan"
            className="font-sans text-lin/30 hover:text-lin/60 uppercase font-light transition-colors duration-200"
            style={{ fontSize: "9px", letterSpacing: "0.3em" }}
          >
            ← Businessplan
          </a>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center px-6" style={{ paddingTop: "52px" }}>
        <div className="w-full max-w-md">

          {/* Lock icon */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center justify-center" style={{ width: "48px", height: "48px", border: "0.5px solid rgba(242,237,230,0.12)", borderRadius: "50%" }}>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="9" width="16" height="11" rx="1" stroke="rgba(242,237,230,0.3)" strokeWidth="0.75"/>
                <path d="M4 9V6C4 3.79086 6.23858 2 9 2C11.7614 2 14 3.79086 14 6V9" stroke="rgba(242,237,230,0.3)" strokeWidth="0.75"/>
                <circle cx="9" cy="14.5" r="1.5" fill="rgba(242,237,230,0.3)"/>
              </svg>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="font-sans text-lin/30 uppercase font-light mb-4" style={{ fontSize: "9px", letterSpacing: "0.4em" }}>
              Vertrouwelijk
            </div>
            <h1 className="font-serif text-lin font-light" style={{ fontSize: "clamp(28px, 5vw, 42px)", letterSpacing: "0.08em", lineHeight: 1.1 }}>
              Financieel Plan
            </h1>
            <div className="w-px bg-lin/15 mx-auto mt-6" style={{ height: "28px" }} />
            <p className="mt-6 font-sans text-lin/30 font-light" style={{ fontSize: "13px", lineHeight: 1.6 }}>
              Dit gedeelte is uitsluitend bestemd voor investeerders.
              <br />Voer het toegangswachtwoord in om verder te gaan.
            </p>
          </div>

          {/* Form */}
          <form action={login}>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Wachtwoord"
                className="w-full font-sans font-light text-lin bg-transparent outline-none placeholder:text-lin/20"
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.05em",
                  padding: "16px 0",
                  borderBottom: error ? "0.5px solid rgba(160,112,64,0.6)" : "0.5px solid rgba(242,237,230,0.15)",
                  transition: "border-color 0.2s",
                }}
              />
            </div>

            {error && (
              <p className="font-sans font-light text-warm mb-6" style={{ fontSize: "12px", letterSpacing: "0.05em" }}>
                Onjuist wachtwoord. Probeer het opnieuw.
              </p>
            )}

            <button
              type="submit"
              className="w-full font-sans font-light uppercase text-nacht bg-lin/90 hover:bg-lin transition-colors duration-200 mt-6"
              style={{ fontSize: "10px", letterSpacing: "0.3em", padding: "14px 24px" }}
            >
              Toegang →
            </button>
          </form>

          {/* Back */}
          <div className="text-center mt-10">
            <a
              href="/overzicht"
              className="font-sans font-light text-lin/20 hover:text-lin/40 uppercase transition-colors duration-200"
              style={{ fontSize: "9px", letterSpacing: "0.3em" }}
            >
              ← Terug naar overzicht
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center py-8">
        <p className="font-sans font-light text-lin/15" style={{ fontSize: "10px", letterSpacing: "0.2em" }}>
          © 2025 NOORD Social Recovery Club · Vertrouwelijk
        </p>
      </div>
    </div>
  );
}
