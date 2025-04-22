window.addEventListener("keydown", (e) => {
  if (!e.shiftKey) return;

  if (e.key === 'Shift') {
    animate();
    return;
  }

  for (const el of document.querySelectorAll('.hotkey')) {
    if (el.innerHTML === `⌃+${e.key.toUpperCase()}`) {
      window.location.href = el.parentElement.href;
      e.preventDefault();
      return;
    }
  }
});

function animate() {
  const t = 80;
  let i = 0;
  for (const el of document.querySelectorAll('.hotkey')) {
    i++;
    setTimeout(() => {
      el.style = 'background: var(--theme-focused-foreground);';
      el.parentElement.children[1].style = 'box-shadow: inset 0 0 0 2px var(--theme-focused-foreground)';
    }, i * t);

    setTimeout(() => {
      el.style = '';
      el.parentElement.children[1].style = '';
    }, (i * t) + t);
  }
}
