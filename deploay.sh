echo "Switching to branch master"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to serevr... "
scp -r build/* ubuntu@13.53.206.195:/var/www/192.53.122.115/

echo "Done!"