const projects = {
  'hkte-reels': { title: 'Promotional IG Reels for HKTE', role: 'Camera Assistant', group: 'HKTE', art: 'art-afterlight', description: 'Promotional Instagram Reels for HKTE. Image and link coming soon.' },
  nice: { title: '《nice》', role: 'Gaffer', group: 'Butterfly Peas', art: 'art-still-water', url: 'https://www.youtube.com/watch?v=JexknY0z2co' },
  'shi-fu-da-hai': { title: '《石浮大海》', role: 'Gaffer', group: 'Tofu Kingdom', art: 'art-night-shift', url: 'https://www.youtube.com/watch?v=yV9DLP1MN98' },
  'band-show-recording': { title: 'Band Show Recording', role: 'Light Designer', group: 'Tofu Kingdom', art: 'art-soft-focus', description: 'Band show recording by Tofu Kingdom. Image coming soon.' },
  'catch-a-feeling': { title: '《Catch A feeling》', role: 'Camera Assistant', group: 'Aska Cheung', art: 'art-second-take', url: 'https://www.youtube.com/watch?v=qfCJF0ZAgoA' },
  'animals-in-the-city': { title: '《Animals In The City》', role: 'Gaffer', group: 'Short Film', art: 'art-night-shift', description: 'Narrative short film. Link and image coming soon.' },
  'temporary-love-map': { title: '《臨時戀愛地圖》', role: 'Lighting Assistant', group: '創+作', art: 'art-afterlight', url: 'https://www.youtube.com/watch?v=wd1Je2rwF6Q' },
  'night-glow': { title: '《夜光漫遊》', role: 'Camera Assistant', group: 'Venus Chi', art: 'art-still-water', url: 'https://www.youtube.com/watch?v=awYDUVe56_g' },
  'dior-interview': { title: 'Interview for Dior', role: 'Lighting Assistant', group: 'Dior', art: 'art-soft-focus', description: 'Interview for Dior. Link and image coming soon.' },
  lit: { title: '《Lit》', role: 'Camera Assistant', group: 'Hugo Wong', art: 'art-second-take', url: 'https://www.youtube.com/watch?v=uom6BKA-jYA' },
  'ten-number-pier': { title: '《十號碼頭的半對》', role: 'Videographer', group: 'OneUp', art: 'art-afterlight', url: 'https://www.youtube.com/watch?v=h4H3I9oFI_s' },
  'one-up-short-stories': { title: 'One Up Music Video Short Stories', role: 'Editor & Production Assistant', group: 'One Up', art: 'art-night-shift', url: 'https://www.instagram.com/reel/C9RtGQAJtm0/' },
  'trouble-away': { title: '《麻煩彈開》', role: 'Camera Assistant', group: '詹天文', art: 'art-still-water', url: 'https://www.youtube.com/watch?v=kIwButt9xGk' },
  'bad-good-person': { title: '《爛好人》', role: 'Creative', group: '鄭俊弘', art: 'art-soft-focus', description: 'Music video. Link coming soon.' },
  'ten-outta-ten': { title: '《Ten Outta Ten》', role: 'Production Assistant', group: 'One Up', art: 'art-second-take', url: 'https://www.youtube.com/watch?v=IHVrC25Veak' },
  'stone-sinks-sea': { title: '《石沈大海》', role: 'Production Assistant', group: 'Tofu Kingdom', art: 'art-night-shift', url: 'https://www.youtube.com/watch?v=vpq7B8PiGl8' },
  'mo-yang': { title: '《默羊》', role: 'Gaffer & Colourist', group: 'CUHK Image and Creative Media', art: 'art-afterlight', description: 'CUHK Course - Image and Creative Media. Link and image coming soon.' },
  'cudanso-promotion': { title: 'CUDANSO2324 Promotion Video', role: 'Director & Videographer & Editor', group: 'CUHK Modern Dance Society', art: 'art-still-water', url: 'https://www.youtube.com/watch?v=nz3X29giXaI' }
};

const projectKey = new URLSearchParams(window.location.search).get('project');
const project = projects[projectKey];

const positionCase = (value) => value.toLowerCase().replace(/(^|\s|&)\w/g, (letter) => letter.toUpperCase());
const projectHeading = (group, title) => title.includes('《') ? `${group} ${title}` : `${group} - ${title}`;

document.querySelectorAll('.project-card').forEach((card) => {
  const title = card.querySelector('.project-meta strong');
  const group = card.querySelector('.project-group');
  const role = card.querySelector('.project-role');
  const projectKeyFromCard = new URL(card.href).searchParams.get('project');
  const cover = projects[projectKeyFromCard]?.cover;
  if (cover) {
    card.querySelector('.project-art').style.backgroundImage = `url(${cover})`;
    card.querySelector('.project-art').classList.add('project-cover');
  }
  if (title && group && role) {
    title.textContent = projectHeading(group.textContent, title.textContent);
    group.remove();
    role.textContent = positionCase(role.textContent);
  }
});

if (project && document.querySelector('.project-page')) {
  document.title = `${project.title} — Shih Wing`;
  document.querySelector('#project-title').textContent = project.title;
  document.querySelector('#project-title').textContent = projectHeading(project.group, project.title);
  document.querySelector('#project-role-detail').textContent = positionCase(project.role);
  document.querySelector('#project-credit-detail').textContent = project.credits || project.group;
  document.querySelector('#project-description').textContent = project.description || 'Project details coming soon.';
  document.querySelector('#project-art').className = `project-art ${project.art}`;
  const projectMedia = document.querySelector('#project-media');
  const projectImage = document.querySelector('#project-image');
  const projectLink = document.querySelector('#project-link');
  const galleryImages = project.images || [];
  let galleryIndex = 0;

  const updateGallery = () => {
    const imagePath = galleryImages[galleryIndex];
    if (imagePath) {
      projectImage.src = imagePath;
      projectImage.alt = `${project.title} image ${galleryIndex + 1}`;
      projectImage.style.filter = 'none';
      projectMedia.classList.add('has-gallery');
      document.querySelector('#gallery-count').textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
    }
  };

  if (galleryImages.length > 0) {
    projectLink.hidden = true;
    updateGallery();
  } else if (project.url) {
    projectLink.href = project.url;
    projectLink.setAttribute('href', project.url);
    projectLink.hidden = false;
    projectLink.classList.add('is-video');
    projectMedia.classList.add('is-video');
    projectLink.setAttribute('aria-label', `Open ${project.title}`);
    const youtubeMatch = project.url.match(/[?&]v=([^&]+)/);
    if (youtubeMatch) {
      const thumbnail = `https://img.youtube.com/vi/${youtubeMatch[1]}/maxresdefault.jpg`;
      projectImage.src = thumbnail;
      projectImage.alt = `${project.title} video thumbnail`;
      projectImage.style.filter = 'none';
      projectImage.classList.add('project-thumbnail-image');
      document.querySelector('#project-art').classList.add('project-thumbnail');
      projectLink.addEventListener('click', (event) => {
        event.preventDefault();
        const player = document.createElement('iframe');
        player.src = `https://www.youtube-nocookie.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
        player.title = `${project.title} video`;
        player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        player.allowFullscreen = true;
        player.referrerPolicy = 'strict-origin-when-cross-origin';
        projectLink.replaceWith(player);
        projectMedia.classList.add('is-playing');
      });
    }
  } else {
    projectLink.hidden = true;
  }

  document.querySelector('#gallery-previous').addEventListener('click', () => {
    galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
  });
  document.querySelector('#gallery-next').addEventListener('click', () => {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    updateGallery();
  });
}
