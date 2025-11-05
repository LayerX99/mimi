
const mapping = {
  'btn-site':   'https://www.mimistore1iq.store/',
  'btn-wa':     'https://wa.me/9647737698219',
  'btn-ig':     'https://www.instagram.com/mimi__store10?igsh=MXFzM3ZlMno4NXlxcQ%3D%3D&utm_source=qr',
  'btn-fb':     'https://www.facebook.com/share/17HVo6FRQx/?mibextid=wwXIfre',
  'btn-tiktok': 'https://www.tiktok.com/@yourprofile',
  'btn-yt':     'https://youtube.com/@mimi__store10?si=N5tCaCuf23ctJ6rY'
};

Object.entries(mapping).forEach(([id, url]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('click', () => window.open(url, '_blank', 'noopener'));
});
