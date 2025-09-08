from node:24 as builder
workdir /opt/builder
copy . ./
run npm i
run npm run build

from nginx:1.29.0
copy --from=builder /opt/builder/dist /var/www/html
copy nginx.conf /etc/nginx/nginx.conf
cmd ["nginx"]
