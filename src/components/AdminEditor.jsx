import { useMemo, useState } from "react";

export default function AdminEditor({ currentData, onSaved }) {
  const initialJson = useMemo(() => JSON.stringify(currentData, null, 2), [currentData]);
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [jsonText, setJsonText] = useState(initialJson);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setStatus("");
    let parsed;
    try {
      parsed = JSON.parse(jsonText);
    } catch {
      setStatus("Invalid JSON. Fix formatting and try again.");
      return;
    }

    if (!password) {
      setStatus("Enter admin password.");
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("/api/site-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, data: parsed }),
      });

      const payload = await response.json();
      if (!response.ok) {
        setStatus(payload?.error || "Save failed");
        return;
      }

      setStatus("Saved. Refreshing live data...");
      onSaved(parsed);
    } catch {
      setStatus("Network error while saving.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[60] px-4 py-2 rounded-full bg-black/80 border border-orange-400/40 text-orange-300 text-sm font-semibold"
      >
        {open ? "Close Admin" : "Admin Edit"}
      </button>

      {open && (
        <div className="fixed inset-0 z-[59] bg-black/70 backdrop-blur-sm p-4 md:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto bg-[#0f0f14] border border-white/10 rounded-2xl p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">Live Content Editor</h2>
            <p className="text-sm text-gray-400 mb-4">
              Edit JSON and save to Vercel Blob storage. This updates the live website data.
            </p>

            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-3 px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white"
            />

            <textarea
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              rows={22}
              className="w-full font-mono text-xs md:text-sm px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-gray-100"
            />

            <div className="mt-4 flex gap-3 items-center">
              <button
                type="button"
                disabled={saving}
                onClick={handleSave}
                className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Live Data"}
              </button>
              <button
                type="button"
                onClick={() => setJsonText(JSON.stringify(currentData, null, 2))}
                className="px-4 py-2 rounded-full border border-white/20 text-gray-200"
              >
                Reset
              </button>
              {status && <p className="text-sm text-gray-300">{status}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
