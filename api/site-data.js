import { createHash, timingSafeEqual } from "node:crypto";
import { put, list } from "@vercel/blob";
import { siteData as defaultSiteData } from "../src/data/siteData.js";

const BLOB_NAME = "site-data.json";

function sha256Hex(value) {
  return createHash("sha256").update(value).digest("hex");
}

function safeEqualHex(a, b) {
  const aBuf = Buffer.from(a, "hex");
  const bBuf = Buffer.from(b, "hex");
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

async function readStoredData() {
  const result = await list({ prefix: BLOB_NAME, limit: 1 });
  const blob = result.blobs?.[0];
  if (!blob?.url) return null;

  const response = await fetch(blob.url, { cache: "no-store" });
  if (!response.ok) return null;
  return response.json();
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const stored = await readStoredData();
      return res.status(200).json({ data: stored || defaultSiteData });
    } catch {
      return res.status(200).json({ data: defaultSiteData });
    }
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const expectedHash = process.env.ADMIN_PASSWORD_HASH;
  if (!expectedHash) {
    return res.status(500).json({
      error: "Server missing ADMIN_PASSWORD_HASH",
    });
  }

  const { password, data } = req.body || {};
  if (!password || !data || typeof data !== "object") {
    return res.status(400).json({ error: "Missing password or data payload" });
  }

  const providedHash = sha256Hex(password);
  if (!safeEqualHex(providedHash, expectedHash)) {
    return res.status(401).json({ error: "Invalid admin password" });
  }

  await put(BLOB_NAME, JSON.stringify(data, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });

  return res.status(200).json({ ok: true });
}
