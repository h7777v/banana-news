set -e

cd local_frame/flat_minecraft
echo "Installing dependencies for flat_minecraft..."
npm ci

echo "Building flat_minecraft..."
npm run build
