export async function knowledgeLoader() {
  const res = await fetch("https://knowledge-server-side-chi.vercel.app/knowledges");
  return res.json();
}
