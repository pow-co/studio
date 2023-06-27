cd /opt/studio.pow.co
git stash
git checkout main
git pull origin main
npm install
npm run build
systemctl restart powco_studio
