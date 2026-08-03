document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const toggleIcon = themeToggle?.querySelector(".toggle-icon");

  const getStoredTheme = () => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "dark" ? "dark" : "light";
  };

  const setTheme = (theme) => {
    const nextTheme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", nextTheme);
    body?.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    if (toggleIcon) {
      toggleIcon.textContent = nextTheme === "dark" ? "☀︎" : "☾";
    }
  };

  const initialTheme = root.getAttribute("data-theme") || body?.getAttribute("data-theme") || getStoredTheme();
  setTheme(initialTheme);

  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  document.querySelectorAll(".folder-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const target = document.getElementById(targetId);

      if (!target) return;

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      target.classList.toggle("is-collapsed", expanded);
    });
  });

  const terminalOutput = document.getElementById("terminalOutput");
  const terminalInput = document.getElementById("terminalInput");
  const promptPrefix = "C:\\Portfolio";

  const printLine = (message, type = "") => {
    const line = document.createElement("div");
    line.className = `terminal-line${type ? ` ${type}` : ""}`;
    line.textContent = message;
    terminalOutput?.appendChild(line);
    terminalOutput?.scrollTo({ top: terminalOutput.scrollHeight, behavior: "smooth" });
  };

  if (terminalOutput) {
    printLine(`${promptPrefix}>_`, "command");
  }

  terminalInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    const rawInput = terminalInput.value.trim().toLowerCase();
    const command = rawInput || "";
    printLine(`${promptPrefix}> ${terminalInput.value.trim()}`, "command");
    terminalInput.value = "";

    if (!command) return;

    if (command === "help") {
      printLine("Available commands: about, projects, resume, contact, help, clear");
    } else if (command === "about") {
      printLine("Opening about directory...");
      window.location.href = "about.html";
    } else if (command === "projects") {
      printLine("Opening projects directory...");
      window.location.href = "projects.html";
    } else if (command === "resume") {
      printLine("Opening resume directory...");
      window.location.href = "resume.html";
    } else if (command === "contact") {
      printLine("Opening contact directory...");
      window.location.href = "contact.html";
    } else if (command === "clear") {
      terminalOutput.innerHTML = "";
      printLine(`${promptPrefix}>_`, "command");
    } else {
      printLine(`Unknown command: ${command}`, "error");
      printLine("Try help", "error");
    }
  });
});
