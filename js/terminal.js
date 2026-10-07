/**
 * Darsh Patel Portfolio — Interactive Hero Terminal
 * Built-in commands render instantly from siteData; free text proxies to /api/ask (Gemini, server-side).
 */

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("terminal-body");
  const form = document.getElementById("terminal-form");
  const input = document.getElementById("terminal-input");
  if (!body || !form || !input) return;

  const data = window.siteData || {};

  function appendLine(text, cls) {
    const line = document.createElement("div");
    line.className = "terminal-line" + (cls ? ` ${cls}` : "");
    line.textContent = text;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
    return line;
  }

  function appendHTML(html, cls) {
    const line = document.createElement("div");
    line.className = "terminal-line" + (cls ? ` ${cls}` : "");
    line.innerHTML = html;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  const commands = {
    help() {
      appendLine("Available commands:");
      appendLine("  about       — who is Darsh");
      appendLine("  skills      — tech stack");
      appendLine("  projects    — what I've built");
      appendLine("  experience  — work history");
      appendLine("  contact     — how to reach me");
      appendLine("  resume      — download resume");
      appendLine("  clear       — clear the terminal");
      appendLine("  or just type a question — I'll ask Gemini.");
    },
    about() {
      (data.personal?.bio || []).forEach(p => appendLine(p));
    },
    skills() {
      const cats = data.skills?.categories || [];
      cats.forEach(cat => {
        appendLine(`${cat.name}:`, "terminal-system");
        appendLine("  " + cat.skills.map(s => s.name).join(", "));
      });
    },
    projects() {
      (data.projects || []).forEach(p => {
        appendLine(`${p.title} — ${p.subtitle}`, "terminal-system");
        appendLine("  " + p.description);
      });
      (data.otherProjects || []).forEach(p => {
        appendLine(`${p.title} — ${p.description}`);
      });
    },
    experience() {
      (data.experience || []).forEach(e => {
        appendLine(`${e.role} @ ${e.company} (${e.period})`, "terminal-system");
        appendLine("  " + e.description);
      });
    },
    contact() {
      appendLine(`Email: ${data.contact?.email || ""}`);
      appendLine(`Phone: ${data.contact?.phoneFormatted || ""}`);
      appendLine(`Location: ${data.contact?.location || ""}`);
    },
    resume() {
      appendLine("Opening resume download...");
      const a = document.createElement("a");
      a.href = `assets/${data.resume?.file || "Darsh_Patel_Resume.pdf"}`;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      a.remove();
    },
    clear() {
      body.innerHTML = "";
      appendHTML(`Live AI assistant <span class="terminal-ai-badge">⚡ powered by Gemini</span> — ask anything about Darsh.`, "terminal-system");
    }
  };

  async function askAI(question) {
    const loadingLine = appendLine("thinking...", "terminal-loading");
    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: question })
      });

      const result = await response.json().catch(() => ({}));
      loadingLine.remove();

      if (!response.ok) {
        appendLine(result.error || "Something went wrong. Try a built-in command like 'about' instead.", "terminal-error");
        return;
      }

      appendLine(result.reply || "No response.");
    } catch (err) {
      loadingLine.remove();
      appendLine("Network error — try again, or type 'help' for offline commands.", "terminal-error");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = input.value.trim();
    if (!raw) return;

    appendLine(raw, "terminal-user");
    input.value = "";

    const key = raw.toLowerCase();
    if (commands[key]) {
      commands[key]();
    } else {
      askAI(raw);
    }
  });

  input.addEventListener("keydown", (e) => e.stopPropagation());
});
