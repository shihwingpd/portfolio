const projects = {
  'mint-studio-centrestage': { date: '2026-09', title: 'Centrestage', heading: 'mint studio X Centrestage', role: 'Videographer', group: 'Mint Studio X', art: 'art-still-water', url: 'https://www.instagram.com/reel/DdWLYNEzQ41/?stkn=MWhxejdhNG9sbjM2aw==', cover: 'assets/covers/mint-studio-centrestage.jpg' },
  'polyu-dsai-promotion': { date: '2026-04', title: 'Promotion Video', role: 'Gaffer', group: 'PolyU DSAI', art: 'art-soft-focus', cover: 'assets/covers/polyu-dsai-promotion.png' },
  'vincy-so-final-night': { date: '2026-03', title: '《海上、最後の夜》Concept Video', role: 'Gaffer', group: 'Vincy So', art: 'art-afterlight', url: 'https://www.instagram.com/reel/DWteOYgE4Jj/?stkn=MXYxMTE0bHV3cjgyYw==', cover: 'assets/covers/vincy-so-final-night.jpg' },
  'esprit-brand-interview': { date: '2026-03', title: '品牌專訪 ESPRIT', heading: 'mint interview | 品牌專訪 ESPRIT', role: 'Camera Assistant', group: 'mint interview', art: 'art-soft-focus', url: 'https://www.instagram.com/reel/DVYCLURk8BD/?stkn=MTVoMTQ0bzBnenhscA==', cover: 'assets/covers/esprit-brand-interview.jpg' },
  'murfi-lau-interview': { date: '2025-08', title: 'MURFI LAU', heading: 'mint interview | MURFI LAU', role: 'Camera Assistant', group: 'mint interview', art: 'art-night-shift', url: 'https://www.instagram.com/reel/DQWliKnCT6F/?stkn=MXJvcnR5bGR0Z3IwOQ==', cover: 'assets/covers/murfi-lau-interview.jpg' },
  nice: { date: '2025-02', title: '《nice》', role: 'Gaffer', group: 'Butterfly Peas', art: 'art-still-water', url: 'https://www.youtube.com/watch?v=JexknY0z2co', cover: 'assets/covers/nice.jpg' },
  'shi-fu-da-hai': { date: '2025-02', title: '《石浮大海》', role: 'Gaffer', group: 'Tofu Kingdom', art: 'art-night-shift', url: 'https://www.youtube.com/watch?v=yV9DLP1MN98', cover: 'assets/covers/shi-fu-da-hai.jpg' },
  'band-show-recording': { date: '2025-01', title: 'Band Show Recording', role: 'Light Designer', group: 'Tofu Kingdom', art: 'art-soft-focus' },
  'catch-a-feeling': { date: '2025-01', title: 'Catch a Feeling', role: 'Camera Assistant', group: 'Aska Cheung', art: 'art-second-take', url: 'https://www.youtube.com/watch?v=qfCJF0ZAgoA', cover: 'assets/covers/catch-a-feeling.jpg' },
  'animals-in-the-city': { date: '2024-11', title: '《Animals In The City》', role: 'Gaffer', group: 'Short Film', art: 'art-night-shift' },
  'temporary-love-map': { date: '2024-11', title: '《臨時戀愛地圖》', role: 'Lighting Assistant', group: '創+作', art: 'art-afterlight', url: 'https://www.youtube.com/watch?v=wd1Je2rwF6Q', cover: 'assets/covers/temporary-love-map.jpg' },
  'night-glow': { date: '2024-10', title: '《夜光漫遊》', role: 'Camera Assistant', group: 'Venus Chi', art: 'art-still-water', url: 'https://www.youtube.com/watch?v=awYDUVe56_g', cover: 'assets/covers/night-glow.jpg' },
  'ten-number-pier': { date: '2024-07', title: '《十號碼頭的半對》', role: 'Videographer', group: 'OneUp', art: 'art-afterlight', url: 'https://www.youtube.com/watch?v=h4H3I9oFI_s', cover: 'assets/covers/ten-number-pier.jpg' },
  'bad-good-person': { date: '2024-06', title: '《爛好人》', role: 'Creative', group: '鄭俊弘', art: 'art-soft-focus' },
  'mo-yang': { date: '2024-12', dateLabel: 'Oct 2023 – Dec 2024', title: '《默羊》', role: 'Gaffer & Colourist', group: 'CUHK Image and Creative Media', art: 'art-afterlight' }
};

const projectKey = new URLSearchParams(window.location.search).get('project');
const project = projects[projectKey];

const positionCase = (value) => value.toLowerCase().replace(/(^|\s|&)\w/g, (letter) => letter.toUpperCase());
const projectHeading = (group, title, heading) => heading || (title.includes('《') ? `${group} ${title}` : `${group} - ${title}`);

const renderProjectGrid = () => {
  const projectGrid = document.querySelector('#project-grid');
  if (!projectGrid) return;

  projectGrid.replaceChildren();
  Object.entries(projects)
    .sort(([, first], [, second]) => second.date.localeCompare(first.date))
    .forEach(([key, item]) => {
      const card = document.createElement('a');
      card.className = 'project-card';
      card.href = `project.html?project=${key}`;

      const artwork = document.createElement('span');
      artwork.className = `project-art ${item.art || ''}`;
      artwork.setAttribute('role', 'img');
      artwork.setAttribute('aria-label', `Video thumbnail for ${item.heading || projectHeading(item.group, item.title)}`);

      const youtubeMatch = item.url?.match(/[?&]v=([^&]+)/);
      const coverUrl = item.cover || (youtubeMatch ? `https://img.youtube.com/vi/${youtubeMatch[1]}/hqdefault.jpg` : null);
      if (coverUrl) {
        const coverImage = document.createElement('img');
        coverImage.className = 'project-cover-image';
        coverImage.src = coverUrl;
        coverImage.alt = '';
        artwork.append(coverImage);
        artwork.classList.add('has-cover');
      }

      const metadata = document.createElement('span');
      metadata.className = 'project-meta';
      const title = document.createElement('strong');
      title.textContent = item.heading || projectHeading(item.group, item.title);
      const role = document.createElement('small');
      role.className = 'project-role';
      role.textContent = positionCase(item.role);
      metadata.append(title, role);
      card.append(artwork, metadata);
      projectGrid.append(card);
    });
};

renderProjectGrid();

if (project && document.querySelector('.project-page')) {
  document.title = `${project.title} — Shih Wing`;
  document.querySelector('#project-title').textContent = project.title;
  document.querySelector('#project-title').textContent = projectHeading(project.group, project.title, project.heading);
  document.querySelector('#project-role-detail').textContent = positionCase(project.role);
  document.querySelector('#project-art').className = `project-art ${project.art}`;
  const projectMedia = document.querySelector('#project-media');
  const projectImage = document.querySelector('#project-image');
  const projectLink = document.querySelector('#project-link');
  const projectVideo = document.querySelector('#project-video');
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

  if (project.video) {
    projectLink.hidden = true;
    projectVideo.src = project.video;
    projectVideo.hidden = false;
  } else if (galleryImages.length > 0) {
    projectLink.hidden = true;
    updateGallery();
  } else if (project.url) {
    projectLink.href = project.url;
    projectLink.setAttribute('href', project.url);
    projectLink.hidden = false;
    projectLink.classList.add('is-video');
    projectMedia.classList.add('is-video');
    projectLink.setAttribute('aria-label', `Open ${project.title}`);
    const instagramMatch = project.url.match(/instagram\.com\/(?:reel|p)\/([^/?]+)/);
    if (instagramMatch) {
      const player = document.createElement('iframe');
      player.src = `https://www.instagram.com/reel/${instagramMatch[1]}/embed`;
      player.title = `${project.title} on Instagram`;
      player.allow = 'autoplay; clipboard-write; encrypted-media; picture-in-picture';
      player.allowFullscreen = true;
      player.loading = 'eager';
      player.referrerPolicy = 'strict-origin-when-cross-origin';
      projectMedia.classList.add('is-instagram');
      projectLink.replaceWith(player);
    }
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
