
"use client";

export default function Flight() {
  return (
    <main className="m-4">
      <div>
        <h1 className="font-semibold text-xl py-5">Don&apos;t Miss</h1>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/flight.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      ></div>
    </main>
  );
}
