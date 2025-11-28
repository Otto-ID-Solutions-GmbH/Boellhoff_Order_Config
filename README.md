# Boellhoff_Config

```bash

ssh otto-id

cd /var/www/html/boellhoff/configs
git fetch && git rebase origin/master

pm2 show app
pm2 logs app

pm2 restart app --update-env
sudo service apache2 reload
```
