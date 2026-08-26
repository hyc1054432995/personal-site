// 极简滚动浮现——尊重 prefers-reduced-motion，不需要额外判断，
// CSS 里已经用媒体查询关掉了动效，这里只负责加类名。
document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(
      ".about-grid, .skills-grid, .project-body, .stamp-wrap"
    );
    targets.forEach((el) => el.classList.add("reveal"));
  
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => io.observe(el));
  });