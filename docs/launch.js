'use strict';

fetch('launch.json', {cache: 'no-store'}).then(response => {
  if (!response.ok) throw new Error();
  return response.json();
}).then(config => {
  const url = new URL(config.origin);
  if (url.protocol !== 'https:' || url.href !== url.origin + '/') throw new Error();
  const link = document.getElementById('open');
  link.href = url.href;
  link.hidden = false;
  document.getElementById('status').hidden = true;
}).catch(() => {
  document.getElementById('status').textContent = '운영 콘솔 연결을 준비 중입니다.';
});
