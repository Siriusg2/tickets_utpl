export function GET() {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
